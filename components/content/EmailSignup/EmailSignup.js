
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styles from './EmailSignup.module.scss';
import SignupForm from './SignupForm';

const signupUrl = 'https://github.us10.list-manage.com/subscribe/post?u=a2c1595175259c6cf93c9b708&amp;id=70002bf500';

const EmailSignup = (props) => {
  return (
    <MailchimpSubscribe
      url={signupUrl}
      render={({ subscribe, status, message }) => (
        <div>
          {status !== 'success' && <SignupForm
            ctaText={props.ctaText}
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />}
          {status === 'success' && <div className={styles.subscribedMsg}>
            Thank you!  We&apos;ll be in touch soon!  Keep an eye out for our Kickstarter page!
          </div>}
        </div>
      )}>
    </MailchimpSubscribe>
  )
}

export default EmailSignup;
