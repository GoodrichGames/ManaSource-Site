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
          <Container classes={styles.emphasisCtn + " " + styles.seventyW + " " + styles.center}>
            - Simultaneous turns for low downtime<br />
            - First of its kind update system using push notifications and sticker modifiers<br />
            - Easy for newcomers, depth for strategists<br />
            - Minimal Randomness, Maximum Options<br />
            - Story driven<br />
          </Container>
          <br />
          <p>Playtime: 20-60 minutes</p>
          <p>Players: 1-4</p>
          <p>Ages: 8+</p>
          <br />
        </ContentItem>
        <Container classes={styles.darkThinBorder}>
          <ExportedImage src={prefix + '/images/Exploring-cavern-ruins.webp'} alt='Exploring-cavern-ruins' width="100%" height="59%" layout="responsive" priority={true} />
        </Container>
        <EmailSignup ctaText="Start your adventure!" />
        <ContentItem>
          <u>Game Modes</u>
          <p>Cooperative Campaign - 1-4 players</p>
          <p>Constructed - 1v1, 1v2, 2v2</p>
          <p>Draft - 1v1</p>
          <p>Limited - 1v1</p>
          <br />
          <p>
            <b>Actively seeking a publisher! Contact us at <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me</a>.</b>
          </p>
        </ContentItem>
        <ContentItem title='About Goodrich Games'>
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
          <ExportedImage src={prefix + '/images/GG-Logo-dark-bg.webp'} alt='Goodrich Games Logo' width="100%" height="10%" layout="responsive" objectFit="contain" priority={true} />
        </ContentItem>
      </ContentSection>
      <ContentSection>
        <ContentItem title='Artist Credits'>
          <p><em>Mana Well in Cavern - <a href='https://nelediel.com/' target='_blank' rel='noreferrer'>Nele Diel</a></em></p>
          <p><em>Exploring-cavern-ruins - <a href='https://nelediel.com/' target='_blank' rel='noreferrer'>Nele Diel</a></em></p>
        </ContentItem>
      </ContentSection>
      <ContentSection>
        <ContentItem title='Be Part of Our Community!'>
          <EmailSignup ctaText="Start your adventure!" />
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
