// Set NEXT_PUBLIC_META_PIXEL_ID at build time to switch the Meta pixel on. While it is unset the
// pixel is not rendered, the consent banner does not mention advertising measurement, and the
// privacy policy does not describe a pixel — so the site never claims behaviour it does not have.
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';

export const isMetaPixelConfigured = Boolean(META_PIXEL_ID);

// Meta's first-party cookies. Removed when a visitor withdraws consent, alongside the Google
// Analytics cookies.
const META_COOKIE_PREFIXES = ['_fbp', '_fbc'];

export const clearMetaPixelCookies = () => {
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    if (!META_COOKIE_PREFIXES.some((prefix) => name.startsWith(prefix))) return;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
  });
};
