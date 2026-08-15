import styles from './EmailSignup.module.scss';
import { useId, useState } from 'react';

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const SignupForm = ({ ctaText, status, onValidated }) => {
  const [email, setEmail] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const emailErrorId = useId();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    setShowEmailError(false);
  };

  const onBlurEmail = (event) => {
    setShowEmailError(!isValidEmail(event.target.value));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setShowEmailError(true);
      return;
    }

    onValidated({ EMAIL: email });
  };

  return (
    <form className={styles.emailSignup} onSubmit={onSubmitHandler} noValidate aria-busy={status === 'sending'}>
      <h2>Sign up for updates</h2>
      <div className={styles.emailFieldGroup}>
        <label>
          Email Address <span className={styles.asterisk}>*</span>
          <input
            type="email"
            name="EMAIL"
            className={styles.email}
            value={email}
            onChange={onChangeEmail}
            onBlur={onBlurEmail}
            aria-describedby={showEmailError ? emailErrorId : undefined}
            aria-invalid={showEmailError}
            required
          />
        </label>
      </div>
      {showEmailError && <div id={emailErrorId} className={styles.errorBlock} role="alert">
        Enter a valid email address and try again.
      </div>}
      {status === 'error' && <div className={styles.errorBlock} role="alert" aria-live="assertive">
        An error occurred in submission, please try again later.
      </div>}
      <div className={styles.notName} aria-hidden="true">
        <input type="text" name="b_a2c1595175259c6cf93c9b708_70002bf500" tabIndex="-1" defaultValue="" />
      </div>
      <div className={styles.optionalParent}>
        <div className={styles.foot}>
          <input
            type="submit"
            value={status === 'sending' ? 'Submitting…' : ctaText}
            name="subscribe"
            className={styles.button}
            disabled={status === 'sending'}
          />
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
