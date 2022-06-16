import styles from './EmailSignup.module.scss';
import { useState, useRef } from 'react';

const isValidEmail = (email) => {
  const emailRegex = /[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return emailRegex.test(email);
}

const SignupForm = ({ ctaText, status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const submissionErrorBlock = useRef();
  const invalidEmailErrorBlock = useRef();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    if (!event.target.value || isValidEmail(event.target.value)) {
      invalidEmailErrorBlock.current.classList.add(styles.hidden);
    }
  }

  const onBlurEmail = (event) => {
    if (event.target.value && !isValidEmail(event.target.value)) {
      invalidEmailErrorBlock.current.classList.remove(styles.hidden);
    }
  }

  const onSubmitHandler = () => {
    if (!isValidEmail(email)) return;

    onValidated({
      EMAIL: email,
    });
  }

  return (
    <div className={styles.emailSignup}>
      <h2>Sign up for updates</h2>
      <div className={styles.emailFieldGroup}>
        <label htmlFor="mce-EMAIL">Email Address  <span className={styles.asterisk}>*</span>
        </label>
        <input type="email" name="EMAIL" className={styles.required + " " + styles.email} value={email} onChange={onChangeEmail} onBlur={onBlurEmail} />
      </div>
      <div ref={invalidEmailErrorBlock} className={styles.errorBlock + ' ' + styles.hidden}>
        You have entered an invalid email address.  Please check your entry and try again.
      </div>
      {status === 'error' && <div ref={submissionErrorBlock} className={styles.errorBlock + ' ' + styles.hidden}>
        An error occurred in submission, please try again later.
      </div>}
      <div className={styles.notName} aria-hidden="true">
        <input type="text" name="b_a2c1595175259c6cf93c9b708_70002bf500" tabIndex="-1" defaultValue="" />
      </div>
      <div className={styles.optionalParent}>
        <div className={styles.foot}>
          <input type="submit" value={ctaText} name="subscribe" className={styles.button} onClick={onSubmitHandler} />
        </div>
      </div>
    </div>
  )
}

export default SignupForm;
