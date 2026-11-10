module.exports = function phaserFeatureFlags(source) {
  const flags = this.getOptions();
  return source.replace(/\btypeof\s+([A-Z][A-Z0-9_]*)\b/g, (match, name) => (name in flags ? String(flags[name]) : match));
};
