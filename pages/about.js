import BaseTemplate from './../components/Templates/BaseTemplate';
import styles from '../components/Templates/BaseTemplate.module.scss'
import ContentSection from '../components/content/ContentSection/ContentSection';
import ContentItem from '../components/content/ContentSection/ContentItem';
import Container from './../components/content/Container/Container';
import EmailSignup from './../components/content/EmailSignup/EmailSignup';
import ExportedImage from "next-image-export-optimizer";
import prefix from '../utils/prefix';

export default function About() {
  return (
    <BaseTemplate title="About" date="" description="About Mana Source and Goodrich Games">
      <ContentSection>
        <ContentItem title='About Mana Source'>
          <p>
            Mana Source is an upcoming adventure card game.
            It focuses around arena-style combat to battle for control of Mana
            Wells scattered
            throughout the mysterious world of Kainan. It features five playable primary
            classes,
            one exclusively secondary class, and over 300 unique cards in the release set.
          </p><br />
          <p>Experiment, strategize, and mindgame to reduce your opponent&apos;s health to zero and
            win!</p>
          <br />
          <Container classes={styles.flex}>
          <Container classes={styles.emphasisCtn + " " + styles.fourtyW + " " + styles.inline + " " + styles.mR10 + " " + styles.minHeight250 + " " + styles.vAlignTop}>
            <u>Game Modes</u>
            <p>Cooperative Campaign - 1-4 players</p>
            <p>Constructed - 1v1, 1v2, 2v2</p>
            <p>Draft - 1v1</p>
            <p>Limited - 1v1</p>
          </Container>
          <Container classes={styles.emphasisCtn + " " + styles.fourtyW + " " + styles.inline + " " + styles.minHeight250 + " " + styles.vAlignTop}>
            - Simultaneous turns for low downtime<br />
            - First of its kind update system using push notifications and sticker modifiers<br />
            - Easy for newcomers, depth for strategists<br />
            - Minimal Randomness, Maximum Options<br />
            - Story driven<br />
          </Container></Container><br />
          <Container classes={styles.darkThinBorder + " " + styles.seventyW + " " + styles.center}>
              <ExportedImage src={prefix + '/images/Game-attributes.webp'} alt='1 - 4 players.  60 - 180 minutes Cooperative.  20 - 30 minutes Competitve.  Ages 13 and up.' width="100%" height="48%" layout="responsive" priority={true} />
            </Container>
        </ContentItem>
        <EmailSignup ctaText="Start your adventure!" />
        <Container classes={styles.darkThinBorder}>
          <ExportedImage src={prefix + '/images/Exploring-cavern-ruins.webp'} alt='Exploring-cavern-ruins' width="100%" height="59%" layout="responsive" priority={true} />
        </Container>
        <br />
        <ContentItem title='About Goodrich Games'>
          <ExportedImage src={prefix + '/images/PaulProfile.webp'} alt='Paul Profile picture' width="200%" height="200%" priority={true} />
          <p>Paul Goodrich</p>
          <p className={styles.mb1}><i>Principal Owner / Lead Designer</i></p>
          <p className={styles.mb1}>
            Web Technical Architect by day, game designer by night.
          </p>
          <p><u>Education</u></p>
          <p className={styles.mb1}>
            Paul graduated from North Carolina State University in 2013 with a Bachelor&apos;s degree in Computer Science.<br />
            He designed and produced 5 video games <em>(Sunken, Defector, Space Invaders remake, Asteroids remake, Estate of Hell)</em><br />
            and 1 board game <em>(Conquest)</em> as part of the program.
          </p>
          <p><u>Video Game experience</u></p>
          <p className={styles.mb1}>
            Former professional support and jungler for Team C in the MOBA Infinite Crisis, Masters
            in Overwatch pre-OWL, and Diamond 1 in League of Legends in S3.
          </p>
        </ContentItem>
      </ContentSection>
      <ContentSection>
        <ContentItem title='Artist Credits'>
          <p><em>Mana Well in Cavern - <a href='https://nelediel.com/' target='_blank' rel='noreferrer'>Nele Diel</a></em></p>
          <p><em>Exploring Cavern Ruins - <a href='https://nelediel.com/' target='_blank' rel='noreferrer'>Nele Diel</a></em></p>
          <p><em>Timbatia in Moonlight - <a href='https://nelediel.com/' target='_blank' rel='noreferrer'>Nele Diel</a></em></p>
        </ContentItem>
      </ContentSection>
      <ContentSection>
        <ContentItem title='Be Part of Our Community!'>
          <EmailSignup ctaText="Start your adventure!" />
          <p>
            Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> to chat with the community or ask questions.  Other Social Media is coming soon.
          </p><br />
          <p>
            If you have suggestions on balance changes or other improvements, please
            visit the <a href="https://github.com/GoodrichGames/ManaSource-Site/issues">Mana Source
              Github</a> and create an issue!
          </p>
        </ContentItem>
      </ContentSection>
    </BaseTemplate >
  )
}
