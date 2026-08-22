# Consent region Worker

The browser asks `/api/privacy-region` whether optional services require prior consent. Keep that
response limited to the boolean decision; do not expose the visitor's country or IP address to the
application.

## Preview before DNS cutover

1. Create a Cloudflare API token with **Workers Scripts: Edit** and **Workers Routes: Edit** for the
   `manasourcegame.com` zone.
2. Add `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` as GitHub Actions repository secrets.
3. Run the **Deploy Cloudflare consent region Worker** workflow and choose `preview`.
4. Open the `workers.dev` URL printed by the deployment step. Test it from locations inside and
   outside the configured region and confirm the response contains only `requiresPriorConsent`.

The preview environment does not attach a route to `manasourcegame.com` and does not require a DNS
cutover. Cloudflare appends `-preview` to the Worker name for this environment.

## Deploy to the site

1. Proxy `manasourcegame.com` and `www.manasourcegame.com` through the Cloudflare zone.
2. Run the same workflow and choose `production`.
3. Request `https://www.manasourcegame.com/api/privacy-region` and confirm the response contains only
   `requiresPriorConsent` and is not cached.

The route and entry point are defined in `wrangler.jsonc`. Country coverage and the privacy-safe
unknown-country fallback are defined and tested in `consent-region-worker.mjs`.
