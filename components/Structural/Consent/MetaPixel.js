import Script from 'next/script';
import { META_PIXEL_ID } from '../../../utils/metaPixel';

/**
 * Meta pixel loader.
 *
 * Renders nothing unless a pixel id is configured. `ConsentProvider` is what decides whether this
 * is mounted at all, so the pixel script is never fetched before a visitor who must consent has
 * accepted. Mounting it here rather than in a template keeps that single gate.
 *
 * There is deliberately no `<noscript>` tracking image. The fallback pixel fires on page load
 * outside React, which would defeat the consent gate for the visitors it is meant to protect.
 */
const MetaPixel = () => {
  if (!META_PIXEL_ID) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
        t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `}
    </Script>
  );
};

export default MetaPixel;
