import { useEffect } from 'react';
import '../styles/scss/colors.scss'
import '../styles/scss/index.scss'
import '../styles/scss/fonts.scss'
import { registerManaSourceServiceWorker } from '../public/register-sw.snippet';
import ConsentProvider from '../components/Structural/Consent/ConsentProvider';

function ManaSourceMarketing({ Component, pageProps }) {
  // useEffect(() => {
  //   registerManaSourceServiceWorker();
  // }, []);

  return <ConsentProvider><Component {...pageProps} /></ConsentProvider>
}

export default ManaSourceMarketing
