import { useEffect } from 'react';
import '../styles/scss/colors.scss'
import '../styles/scss/index.scss'
import '../styles/scss/fonts.scss'
import { registerManaSourceServiceWorker } from '../public/register-sw.snippet';

function ManaSourceMarketing({ Component, pageProps }) {
  // useEffect(() => {
  //   registerManaSourceServiceWorker();
  // }, []);

  return <Component {...pageProps} />
}

export default ManaSourceMarketing
