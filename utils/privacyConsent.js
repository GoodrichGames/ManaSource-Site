const REGION_ENDPOINT = '/api/privacy-region';

export const fetchPriorConsentRequirement = async (signal) => {
  const response = await fetch(REGION_ENDPOINT, {
    cache: 'no-store',
    credentials: 'same-origin',
    headers: { Accept: 'application/json' },
    signal,
  });

  if (!response.ok) throw new Error(`Region lookup failed with status ${response.status}`);

  const result = await response.json();
  if (typeof result.requiresPriorConsent !== 'boolean') {
    throw new Error('Region lookup returned an invalid response');
  }

  return result.requiresPriorConsent;
};
