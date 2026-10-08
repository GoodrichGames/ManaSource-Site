import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { SIGNUP_EVENT, trackEvent } from '../../../utils/analytics';
import styles from './EmailSignup.module.scss';
import SignupForm from './SignupForm';

const BURST_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

const signupUrl ='https://github.us10.list-manage.com/subscribe/post?u=a2c1595175259c6cf93c9b708&amp;id=70002bf500';

// Reports a completed subscription to analytics exactly once, even though Mailchimp's
// success status survives re-renders.
const SignupTracker = ({ status, location }) => {
  const router = useRouter();
  const hasTracked = useRef(false);

  useEffect(() => {
    if (status !== 'success' || hasTracked.current) return;

    hasTracked.current = true;
    trackEvent(SIGNUP_EVENT, {
      page_path: router.asPath,
      form_location: location || router.pathname,
    });
  }, [status, location, router.asPath, router.pathname]);

  return null;
};

const EmailSignup = (props) => {
  return (
    <MailchimpSubscribe
      url={signupUrl}
      render={({ subscribe, status }) => (
        <div>
          <SignupTracker status={status} location={props.location} />
          {status !== 'success' && <SignupForm
            ctaText={props.ctaText}
            status={status}
            onValidated={formData => subscribe(formData)}
          />}
          {status === 'success' && <div className={styles.subscribed}>
            <div className={styles.burst} aria-hidden="true">
              {BURST_ANGLES.map((angle, index) => (
                <span key={angle} style={{ '--angle': `${angle}deg`, '--distance': index % 2 ? '70px' : '105px' }} />
              ))}
            </div>
            <div className={styles.subscribedMsg} role="status">
              Thank you!  We&apos;ll be in touch soon!  Keep an eye out for our Kickstarter page!
            </div>
          </div>}
        </div>
      )}>
    </MailchimpSubscribe>
  )
}

export default EmailSignup;
