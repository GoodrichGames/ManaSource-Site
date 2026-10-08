import { useEffect } from 'react';
import '../styles/scss/colors.scss'
import '../styles/scss/index.scss'
import '../styles/scss/fonts.scss'
import { registerManaSourceServiceWorker } from '../public/register-sw.snippet';
import ConsentProvider from '../components/Structural/Consent/ConsentProvider';
import PageTransition from '../components/Structural/PageTransition/PageTransition';

function ManaSourceMarketing({ Component, pageProps }) {
  // useEffect(() => {
  //   registerManaSourceServiceWorker();
  // }, []);

  return (
    <ConsentProvider>
      <Component {...pageProps} />
      <PageTransition />
    </ConsentProvider>
  );
}

export default ManaSourceMarketing
