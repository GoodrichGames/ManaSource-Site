import { useConsent } from './ConsentProvider';
import styles from './ConsentProvider.module.scss';

const ConsentSettingsButton = () => {
  const { openPrivacyChoices } = useConsent();

  return (
    <button className={styles.settingsButton} onClick={openPrivacyChoices} type="button">
      Privacy Choices
    </button>
  );
};

export default ConsentSettingsButton;
