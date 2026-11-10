import { GoogleAnalytics } from '@next/third-parties/google';
import Link from 'next/link';
import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { fetchPriorConsentRequirement } from '../../../utils/privacyConsent';
import { clearMetaPixelCookies, isMetaPixelConfigured } from '../../../utils/metaPixel';
import MetaPixel from './MetaPixel';
import styles from './ConsentProvider.module.scss';

const STORAGE_KEY = 'mana-source-privacy-consent-v1';
const REGION_LOOKUP_TIMEOUT_MS = 3000;
const ASK_DELAY_MS = 5000;
const ALLOWED_CHOICES = new Set(['accepted', 'rejected']);
const ConsentContext = createContext({
  isResolved: false,
  optionalContentAllowed: false,
  openPrivacyChoices: () => {},
  optionalContentInView: () => {},
});

const readStoredChoice = () => {
  try {
    const choice = window.localStorage.getItem(STORAGE_KEY);
    return ALLOWED_CHOICES.has(choice) ? choice : null;
  } catch (_) {
    return null;
  }
};

const storeChoice = (choice) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch (_) {
    // The in-memory choice still applies for this visit when storage is unavailable.
  }
};

const clearAnalyticsCookies = () => {
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    if (!name.startsWith('_ga')) return;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
  });
};

export const useConsent = () => useContext(ConsentContext);

const ConsentProvider = ({ children }) => {
  const [choice, setChoice] = useState(null);
  const [isResolved, setIsResolved] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isAskPending, setIsAskPending] = useState(false);
  const [isOpenedByVisitor, setIsOpenedByVisitor] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const regionLookupController = new AbortController();
    const regionLookupTimer = window.setTimeout(
      () => regionLookupController.abort(),
      REGION_LOOKUP_TIMEOUT_MS,
    );
    let isActive = true;

    const initializeConsent = async () => {
      const storedChoice = readStoredChoice();

      if (storedChoice) {
        window.clearTimeout(regionLookupTimer);
        if (isActive) {
          setChoice(storedChoice);
          setIsResolved(true);
        }
        return;
      }

      let consentRequired = true;
      try {
        consentRequired = await fetchPriorConsentRequirement(regionLookupController.signal);
      } catch (_) {
        // A missing, failed, or unrecognized region must not enable optional services silently.
      }
      window.clearTimeout(regionLookupTimer);

      if (!isActive) return;

      if (consentRequired) setIsAskPending(true);
      else setChoice('accepted');

      setIsResolved(true);
    };

    initializeConsent();

    return () => {
      isActive = false;
      window.clearTimeout(regionLookupTimer);
      regionLookupController.abort();
    };
  }, []);

  const ask = () => {
    setIsAskPending(false);
    setIsBannerOpen(true);
  };

  useEffect(() => {
    if (!isAskPending) return;
    const timer = window.setTimeout(ask, ASK_DELAY_MS);
    window.addEventListener('scroll', ask, { once: true, passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', ask);
    };
  }, [isAskPending]);

  useEffect(() => {
    if (isBannerOpen && isOpenedByVisitor) dialogRef.current?.focus();
  }, [isBannerOpen, isOpenedByVisitor]);

  const optionalContentAllowed = choice === 'accepted';

  const closeBanner = () => {
    setIsBannerOpen(false);
    setIsOpenedByVisitor(false);
  };

  const acceptOptionalServices = () => {
    storeChoice('accepted');
    setChoice('accepted');
    closeBanner();
  };

  const rejectOptionalServices = () => {
    const optionalScriptWasLoaded = typeof window.gtag === 'function' || typeof window.fbq === 'function';

    storeChoice('rejected');
    setChoice('rejected');
    closeBanner();
    clearAnalyticsCookies();
    clearMetaPixelCookies();

    // Reloading removes a script that was loaded before a visitor withdrew consent.
    if (optionalScriptWasLoaded) window.location.reload();
  };

  const contextValue = useMemo(() => ({
    isResolved,
    optionalContentAllowed,
    openPrivacyChoices: () => {
      setIsAskPending(false);
      setIsOpenedByVisitor(true);
      setIsBannerOpen(true);
    },
    optionalContentInView: () => {
      if (isAskPending) ask();
    },
  }), [isResolved, optionalContentAllowed, isAskPending]);

  return (
    <ConsentContext.Provider value={contextValue}>
      {children}
      {optionalContentAllowed && <GoogleAnalytics gaId="G-Q13V1EJW9Q" />}
      {optionalContentAllowed && <MetaPixel />}
      {isBannerOpen && (
        <div className={styles.dock}>
          <section
            aria-labelledby="privacy-choice-title"
            aria-describedby="privacy-choice-description"
            className={styles.banner}
            ref={dialogRef}
            role="dialog"
            tabIndex={-1}
          >
            <h2 id="privacy-choice-title">Your privacy choices</h2>
            <p id="privacy-choice-description">
              We use Google Analytics to understand site visits and YouTube to show videos
              {isMetaPixelConfigured
                ? ', and the Meta pixel to measure whether our Facebook and Instagram ads bring people here'
                : ''}
              . These optional services may store cookies and receive information about your visit.
              You can accept them or continue without them.
            </p>
            <p><Link href="/privacy" onClick={closeBanner}>Read the Privacy Policy</Link></p>
            <div className={styles.actions}>
              <button className={styles.rejectButton} onClick={rejectOptionalServices} type="button">
                Reject optional services
              </button>
              <button className={styles.acceptButton} onClick={acceptOptionalServices} type="button">
                Accept optional services
              </button>
            </div>
          </section>
        </div>
      )}
    </ConsentContext.Provider>
  );
};

export default ConsentProvider;
