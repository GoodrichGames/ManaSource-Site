#!/usr/bin/env node
/**
 * Removes source images from the exported site when the site never requests them.
 *
 * `public/` is copied wholesale into `out/`, but pages load the WEBP variants that
 * next-image-export-optimizer generates. An original with a variant and no textual reference is
 * therefore published and never fetched. One of them is above Cloudflare's per-file limit for
 * static assets, so this also decides whether the site can deploy there at all.
 *
 * A file is removed only when BOTH are true:
 *   1. A generated variant of it exists in the sibling `nextImageExportOptimizer` folder.
 *   2. No text file in the export mentions its path.
 *
 * Condition 1 is what keeps this from deleting an asset that is served as-is, such as a favicon,
 * an SVG icon, or the social share image. Condition 2 keeps anything still referenced — by HTML, a
 * JS chunk, a stylesheet, the sitemap or the manifest — regardless of whether a variant exists.
 *
 * Writes nothing unless --write is passed.
 *
 *   node scripts/prune-unreferenced-originals.mjs            # dry run, prints every decision
 *   node scripts/prune-unreferenced-originals.mjs --write     # actually deletes
 *   node scripts/prune-unreferenced-originals.mjs --out-dir x # a different export folder
 *   node scripts/prune-unreferenced-originals.mjs --max-mib 25
 */

import fs from 'node:fs';
import path from 'node:path';

const VARIANT_FOLDER = 'nextImageExportOptimizer';
const SCANNED_TEXT_EXTENSIONS = new Set(['.html', '.js', '.mjs', '.css', '.json', '.xml', '.txt']);
const PRUNABLE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.tiff']);
// The folders whose originals are candidates. Everything outside them is served as-is.
const CANDIDATE_ROOTS = ['images'];

const readFlag = (name, fallback) => {
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? fallback : process.argv[index + 1];
};

const shouldWrite = process.argv.includes('--write');
const outDir = path.resolve(readFlag('out-dir', 'out'));
const maxBytes = Number(readFlag('max-mib', '25')) * 1024 * 1024;

const walk = (dir) => {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
};

const sitePath = (file) => `/${path.relative(outDir, file).split(path.sep).join('/')}`;

const isVariantPath = (file) => path.relative(outDir, file).split(path.sep).includes(VARIANT_FOLDER);

const formatMiB = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MiB`;

if (!fs.existsSync(outDir)) {
  console.error(`No export folder at ${outDir}. Run the build first.`);
  process.exit(1);
}

const allFiles = walk(outDir);

// One pass over every text file in the export. Reading them all costs a few seconds and avoids
// guessing which of them might name an image.
const haystack = allFiles
  .filter((file) => SCANNED_TEXT_EXTENSIONS.has(path.extname(file).toLowerCase()))
  .map((file) => fs.readFileSync(file, 'utf8'))
  .join('\n');

const candidates = allFiles.filter((file) => {
  if (isVariantPath(file)) return false;
  if (!PRUNABLE_EXTENSIONS.has(path.extname(file).toLowerCase())) return false;
  const [root] = path.relative(outDir, file).split(path.sep);
  return CANDIDATE_ROOTS.includes(root);
});

const hasVariant = (file) => {
  const variantDir = path.join(path.dirname(file), VARIANT_FOLDER);
  if (!fs.existsSync(variantDir)) return false;
  const stem = path.basename(file, path.extname(file));
  return fs.readdirSync(variantDir).some((name) => name.startsWith(`${stem}-opt-`));
};

const isReferenced = (file) => {
  const urlPath = sitePath(file);
  return haystack.includes(urlPath) || haystack.includes(encodeURI(urlPath));
};

const decisions = candidates.map((file) => {
  const size = fs.statSync(file).size;
  if (!hasVariant(file)) return { file, size, action: 'keep', reason: 'no generated variant' };
  if (isReferenced(file)) return { file, size, action: 'keep', reason: 'referenced in the export' };
  return { file, size, action: 'prune', reason: 'variant exists and nothing references it' };
});

const pruned = decisions.filter((d) => d.action === 'prune').sort((a, b) => b.size - a.size);
const kept = decisions.filter((d) => d.action === 'keep');

console.log(`${shouldWrite ? 'Pruning' : 'Dry run'} — ${outDir}`);
console.log(`${candidates.length} candidate originals under ${CANDIDATE_ROOTS.join(', ')}/\n`);

for (const decision of pruned) {
  console.log(`  remove  ${formatMiB(decision.size).padStart(10)}  ${sitePath(decision.file)}`);
}

const keptBytes = kept.reduce((sum, d) => sum + d.size, 0);
const prunedBytes = pruned.reduce((sum, d) => sum + d.size, 0);
console.log(`\n  ${pruned.length} to remove (${formatMiB(prunedBytes)})`);
console.log(`  ${kept.length} kept (${formatMiB(keptBytes)})`);

if (shouldWrite) {
  for (const decision of pruned) fs.rmSync(decision.file);
}

// Whether or not anything was pruned, the export has to be deployable. Checking here means a new
// oversized asset fails the build rather than the deploy.
const remaining = shouldWrite ? walk(outDir) : allFiles.filter((f) => !pruned.some((d) => d.file === f));
const oversized = remaining
  .map((file) => ({ file, size: fs.statSync(file).size }))
  .filter((entry) => entry.size > maxBytes)
  .sort((a, b) => b.size - a.size);

if (oversized.length) {
  console.error(`\n${oversized.length} file(s) above the ${formatMiB(maxBytes)} static-asset limit:`);
  for (const entry of oversized) {
    console.error(`  ${formatMiB(entry.size).padStart(10)}  ${sitePath(entry.file)}`);
  }
  console.error('\nCloudflare rejects a deploy containing these. Shrink or remove them.');
  process.exit(1);
}

console.log(`\nNo file exceeds ${formatMiB(maxBytes)}.`);
