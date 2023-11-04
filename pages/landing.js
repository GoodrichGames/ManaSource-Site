import ExportedImage from "next-image-export-optimizer";
import EmailSignup from '../components/content/EmailSignup/EmailSignup';
import ContentSection from './../components/content/ContentSection/ContentSection';
import ContentItem from './../components/content/ContentSection/ContentItem';
import styles from '../components/Templates/BaseTemplate.module.scss'
import prefix from '../utils/prefix';
import NoNavTemplate from './../components/Templates/NoNavTemplate';
import Button from "../components/content/Button/Button";
import Container from './../components/content/Container/Container';
import YoutubeEmbed from "../components/content/YoutubeEmbed/YoutubeEmbed";

export default function Landing() {
  return (
    <NoNavTemplate>
      <div className={styles.heroImage}>
        <ExportedImage src={prefix + '/images/featured-game.webp'} alt='mana well in cave' width="100%" height="100%" layout="responsive" objectFit="contain" priority={true} />
      </div>
      <ContentSection>
        <EmailSignup ctaText="Start your adventure!" />
        <YoutubeEmbed videoId="h9tHSCE1T84" width="960" height="540" isAutoplay={false} />
        <ContentItem>
        <h4>A discovery at an ancient vault has the potential to upend the nations...</h4>
          <p>
            <span className={styles.fontArkhip}>Mana Source</span> is an upcoming adventure board game.
            It focuses around arena-style combat you&apos;ll need to survive in the mysterious fantasy world of Kainan. It features five playable primary
            classes, one exclusively secondary class, and over 300 unique cards in the release set.
          </p><br />
          <p>Experiment, strategize, and mindgame to reduce your opponent&apos;s health to zero and
            win!</p>
          <br />
          <Container classes={styles.darkThinBorder + " " + styles.seventyW + " " + styles.center}>
            <ExportedImage src={prefix + '/images/Game-attributes.webp'} alt='1 - 4 players.  60 - 180 minutes Cooperative.  20 - 30 minutes Competitve.  Ages 13 and up.' width="100%" height="43%" layout="responsive" priority={true} />
          </Container><br />
          <Container classes={styles.flex}>
            <Container classes={styles.emphasisCtn + " " + styles.fourtyW + " " + styles.inline + " " + styles.mR10 + " " + styles.minHeight250 + " " + styles.vAlignTop}>
              <h4>Game Modes</h4>
              <p>Cooperative Campaign - 1-4 players</p>
              <p>Constructed - 1v1, 1v2, 2v2</p>
              <p>Draft - 1v1</p>
              <p>Limited - 1v1</p>
              <p>More to come!</p>
            </Container>
            <Container classes={styles.emphasisCtn + " " + styles.fourtyW + " " + styles.inline + " " + styles.minHeight250 + " " + styles.vAlignTop}>
              <h4>Features</h4>
              • Simultaneous turns for low downtime<br />
              • First of its kind update system using push notifications and sticker modifiers<br />
              • Easy for newcomers, depth for strategists<br />
              • Minimal Randomness, every action counts<br />
              • Story-driven content<br />
            </Container>
          </Container>
        </ContentItem>
        <EmailSignup ctaText="Start your adventure!" />
        <Container classes={styles.darkThinBorder}>
          <ExportedImage src={prefix + '/images/Exploring-cavern-ruins.webp'} alt='Exploring-cavern-ruins' width="100%" height="59%" layout="responsive" priority={true} />
        </Container>
        <ContentItem>
          Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> to chat with the community or ask questions. Follow us on <a href="https://www.facebook.com/Mana-Source-102398542746103%C2%A0">Facebook</a>. <br />
        </ContentItem>
        <EmailSignup ctaText="Start your adventure!" />
        <br />
        <Button text='Learn More' classes={styles.center + ' ' + styles.fiftyW} onClick={() => { window.location = prefix + '/' }} />
        <ExportedImage src={prefix + '/images/GG-Logo-dark-bg.webp'} alt='Goodrich Games Logo' width="100%" height="10%" layout="responsive" objectFit="contain" priority={true} />
        <br />
      </ContentSection>
    </NoNavTemplate>
  )
}
