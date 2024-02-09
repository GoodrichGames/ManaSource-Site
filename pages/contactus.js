import styles from '../components/Templates/BaseTemplate.module.scss';
import ContentSection from '../components/content/ContentSection/ContentSection';
import InfoBox from '../components/content/InfoBox/InfoBox';
import BaseTemplate from './../components/Templates/BaseTemplate';
import ContentItem from './../components/content/ContentSection/ContentItem';

export default function ContactUs() {
  return (
    <BaseTemplate title="Contact Us" description="Contact Goodrich Games">
      <ContentSection>
        <br />
        <br />
        <br />
        <br />
        <br />
        <ContentItem>
          <h1 className={styles.logo + " " + styles.tCenter}>Contact Us</h1>
        </ContentItem>
        <br />
        <br />
      </ContentSection>
      <ContentSection>
        <ContentItem classes={styles.tCenter + " " + styles.timbatiaBg + " " + styles.fullW}>
          <InfoBox classes={styles.fullW}>
            <br />
            <br />
            For business inquires contact us at <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me</a>.<br /><br />
            <p>
              Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> to chat with us directly!
            </p>
            <br />
            <br />
          </InfoBox>
        </ContentItem>
      </ContentSection>
    </BaseTemplate>
  )
}
