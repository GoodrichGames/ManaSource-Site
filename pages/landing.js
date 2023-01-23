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
        <br />
        <ContentItem title='About Mana Source'>
          <p>
            Mana Source is an upcoming competitive living card game (LCG) for 1-4 players.
            It focuses around arena-style combat to battle for control of Mana
            Wells scattered
            throughout the mysterious world of Kainan. It features five playable primary
            classes,
            one exclusively secondary class, and over 300 unique cards in the release set.
          </p>
          <p>Experiment, strategize, and mindgame to reduce your opponent&apos;s health to zero and
            win!</p>
          <br />
          <p>Playtime: 20-60 minutes</p>
          <p>Players: 1-4</p>
          <p>Ages: 8+</p>
        </ContentItem>
        <Container classes={styles.darkThinBorder}>
          <ExportedImage src={prefix + '/images/Exploring-cavern-ruins.webp'} alt='Exploring-cavern-ruins' width="100%" height="59%" layout="responsive" priority={true} />
        </Container>
        <ContentItem>
          <Container classes={styles.emphasisCtn + " " + styles.seventyW + " " + styles.center}>
            - Simultaneous turns for low downtime<br />
            - First of its kind update system using push notifications and sticker modifiers<br />
            - Easy for newcomers, depth for strategists<br />
            - Minimal Randomness, Maximum Options<br />
            - Story driven<br />
          </Container>
        </ContentItem>
        <ContentItem>
          Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> to chat with the community or ask questions.  Other Social Media is coming soon.
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
