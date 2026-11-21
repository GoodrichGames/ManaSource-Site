import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { prefersStaticScene } from '../../../utils/graphics';
import { whenIdleAfterLoad } from '../../../utils/afterLoad';

const LandingAnimation = dynamic(() => import('./LandingAnimation'), { ssr: false });

export default function DeferredLandingAnimation() {
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (prefersStaticScene()) return;
    return whenIdleAfterLoad(() => setIsStarted(true));
  }, []);

  return isStarted ? <LandingAnimation /> : null;
}
