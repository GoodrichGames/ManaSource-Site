import assert from 'node:assert/strict';
import test from 'node:test';
import worker, { requiresPriorConsentForCountry } from './consent-region-worker.mjs';

test('requires consent in covered European countries', () => {
  const coveredCountries = [
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE',
    'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
    'IS', 'LI', 'NO', 'GB', 'CH',
  ];

  for (const country of coveredCountries) {
    assert.equal(requiresPriorConsentForCountry(country), true, country);
  }
});

test('does not require prior consent in countries outside the configured region', () => {
  for (const country of ['US', 'CA', 'AU', 'JP']) {
    assert.equal(requiresPriorConsentForCountry(country), false, country);
  }
});

test('fails closed when Cloudflare cannot determine a country', () => {
  assert.equal(requiresPriorConsentForCountry(undefined), true);
  assert.equal(requiresPriorConsentForCountry(null), true);
  assert.equal(requiresPriorConsentForCountry(''), true);
  assert.equal(requiresPriorConsentForCountry('XX'), true);
  assert.equal(requiresPriorConsentForCountry('T1'), true);
});

test('returns only the consent requirement', async () => {
  const request = new Request('https://www.manasourcegame.com/api/privacy-region');
  Object.defineProperty(request, 'cf', { value: { country: 'US' } });

  const response = await worker.fetch(request);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { requiresPriorConsent: false });
  assert.equal(response.headers.get('Cache-Control'), 'private, no-store');
});

test('rejects methods that cannot be used for a lookup', async () => {
  const request = new Request('https://www.manasourcegame.com/api/privacy-region', { method: 'POST' });
  const response = await worker.fetch(request);

  assert.equal(response.status, 405);
  assert.equal(response.headers.get('Allow'), 'GET, HEAD');
});
