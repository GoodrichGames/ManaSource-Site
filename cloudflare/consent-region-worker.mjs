const PRIOR_CONSENT_COUNTRIES = new Set([
  // European Union
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE',
  'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // European Economic Area, United Kingdom, and Switzerland
  'IS', 'LI', 'NO', 'GB', 'CH',
]);
const UNKNOWN_COUNTRIES = new Set(['XX', 'T1']);

export const requiresPriorConsentForCountry = (country) => {
  const normalizedCountry = typeof country === 'string' ? country.trim().toUpperCase() : '';
  if (!normalizedCountry || UNKNOWN_COUNTRIES.has(normalizedCountry)) return true;
  return PRIOR_CONSENT_COUNTRIES.has(normalizedCountry);
};

const responseHeaders = {
  'Cache-Control': 'private, no-store',
  'Content-Type': 'application/json; charset=utf-8',
  'X-Content-Type-Options': 'nosniff',
};

const consentRegionWorker = {
  async fetch(request) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        headers: { ...responseHeaders, Allow: 'GET, HEAD' },
        status: 405,
      });
    }

    const body = JSON.stringify({
      requiresPriorConsent: requiresPriorConsentForCountry(request.cf?.country),
    });

    return new Response(request.method === 'HEAD' ? null : body, {
      headers: responseHeaders,
      status: 200,
    });
  },
};

export default consentRegionWorker;
