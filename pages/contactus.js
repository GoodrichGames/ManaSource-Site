import styles from '../components/Templates/BaseTemplate.module.scss';
import ContentSection from '../components/content/ContentSection/ContentSection';
import InfoBox from '../components/content/InfoBox/InfoBox';
import BaseTemplate from './../components/Templates/BaseTemplate';
import ContentItem from './../components/content/ContentSection/ContentItem';

export default function ContactUs() {
  return (
    <BaseTemplate title="Contact Us" description="Contact Goodrich Games">
      <ContentSection>
        <span className="spacer5" aria-hidden="true"></span>
        <ContentItem>
          <h1 className={styles.logo + " " + styles.tCenter}>Contact Us</h1>
        </ContentItem>
        <span className="spacer2" aria-hidden="true"></span>
      </ContentSection>
      <ContentSection>
        <ContentItem classes={styles.tCenter + " " + styles.timbatiaBg + " " + styles.fullW}>
          <InfoBox classes={styles.fullW}>
            <div>
              <span className="spacer1" aria-hidden="true"></span>
              For business inquiries contact us at <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me</a>.<br /><br />
              <p>
                Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> to chat with us directly!
              </p>
              <span className="spacer2" aria-hidden="true"></span>
            </div>
          </InfoBox>
        </ContentItem>
      </ContentSection>
    </BaseTemplate>
  )
}
