import BaseTemplate from './../components/Templates/BaseTemplate';
import styles from '../components/Templates/BaseTemplate.module.scss'
import ContentSection from '../components/content/ContentSection/ContentSection';
import ContentItem from '../components/content/ContentSection/ContentItem';
import Container from './../components/content/Container/Container';
import EmailSignup from './../components/content/EmailSignup/EmailSignup';
import Image from "next/image";
import prefix from '../utils/prefix';
import cavernRuins from '../public/images/Exploring-cavern-ruins.png'
import agesPic from '../public/icons/ages.png'
import hourglassPic from '../public/icons/hourglass.png'
import playersPic from '../public/icons/players.png'
import paulPic from '../public/images/PaulProfile.JPG'

export default function About() {
  return (
    <BaseTemplate title="About" date="" description="About Mana Source and Goodrich Games">
      <ContentSection>
        <ContentItem title='About Mana Source'>
          <Container classes={styles.darkThinBorder}>
            <Image
              src={cavernRuins}
              alt='Exploring-cavern-ruins'
              width={0}
              height={0}
              priority={true}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                height: "auto"
              }} />
          </Container>
          <br />
          <h4>A discovery at an ancient vault has the potential to upend the nations...</h4>
          <p>
            <span className={styles.fontArkhip}>Mana Source</span> is an upcoming adventure board game.
            It focuses around arena-style combat you&apos;ll need to survive in the mysterious fantasy world of Kainan. It features five playable primary
            classes,
            one exclusively secondary class, and over 300 unique cards in the release set.
          </p><br />
          <p>Experiment, strategize, and mindgame to reduce your opponent&apos;s health to zero and
            win!</p>
          <br />
          <Container classes={styles.darkThinBorder + " " + styles.seventyW + " " + styles.center}>
            <Image
              src={agesPic}
              width={0}
              height={0}
              alt="Ages"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxWidth: "100%",
                height: "auto"
              }} /><p>Ages: 13+</p>
            {/* <Image src={prefix + '/images/Game-attributes.webp'} alt='1 - 4 players.  60 - 180 minutes Cooperative.  20 - 30 minutes Competitve.  Ages 13 and up.' width={0} height="43%" layout="responsive" priority={true} /> */}
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
              • All human-made art and text<br />
            </Container>
          </Container>
        </ContentItem>
        <EmailSignup ctaText="Start your adventure!" />
        <br />
        <ContentItem title='About Goodrich Games'>
          <div>
          <Image
            src={paulPic}
            alt='Paul Profile picture'
            width={200}
            height={0}
            priority
            className={styles.inline}
            style={{
              maxWidth: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto"
            }} />
          <div className={styles.inline + " " + styles.mL20}>
          <p><strong>Paul Goodrich</strong></p>
          <p className={styles.mb1}><i>Principal Owner / Lead Designer</i></p>
          <p className={styles.mb1}>
            Web Technical Architect by day, game designer by night.
          </p>
          </div>
          </div>
          <h4>Education</h4>
          <p className={styles.mb1}>
            Paul graduated from North Carolina State University in 2013 with a Bachelor&apos;s degree in Computer Science.<br />
            He has designed and produced 5 video games <em>(Sunken, Defector, Space Invaders remake, Asteroids 3D remake, Estate of Hell)</em> and 1 board game <em>(Conquest)</em>.
          </p>
          <h4>Video Game experience</h4>
          <p className={styles.mb1}>
            • Former professional support and jungler for Team C in the MOBA Infinite Crisis.<br />
            • Masters in Overwatch pre-OWL<br />
            • Diamond 1 in League of Legends in S3.<br />
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
            Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> to chat with the community or ask questions.  Follow us on <a href="https://www.facebook.com/Mana-Source-102398542746103%C2%A0">Facebook</a>. <br />
          </p><br />
          <p>
            If you have suggestions on balance changes or other improvements, please
            visit the <a href="https://github.com/GoodrichGames/ManaSource-Site/issues">Mana Source
              Github</a> and create an issue!
          </p>
        </ContentItem>
      </ContentSection>
    </BaseTemplate >
  );
}
