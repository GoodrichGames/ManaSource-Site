// import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import BaseLayout from '../components/Templates/BaseTemplate';
import styles from '../components/Templates/BaseTemplate.module.scss';
import ArticleList from '../components/content/ArticleList/ArticleList';
import ContentItem from '../components/content/ContentSection/ContentItem';
import infoboxStyles from '../components/content/InfoBox/InfoBox.module.scss';
import meta from '../metadata/pagemeta';
import arrowPic from '../public/icons/Arrow.png';
import agesPic from '../public/icons/ages.png';
import timePic from '../public/icons/hourglass.png';
import playersPic from '../public/icons/players.png';
import paulPic from '../public/images/PaulProfile.jpg';
import nelePic from '../public/images/NeleProfile.jpg';
import sandiPic from '../public/images/SandiProfile.jpg';
import logo from '../public/images/ManaSourceHLogo.png'
import cavePic from '../public/images/cave.png';
import noAIPic from '../public/icons/NoAI.png';
import ContentSection from './../components/content/ContentSection/ContentSection';
import EmailSignup from './../components/content/EmailSignup/EmailSignup';
import InfoBox from './../components/content/InfoBox/InfoBox';
import YoutubeEmbed from './../components/content/YoutubeEmbed/YoutubeEmbed';

export default function Home() {
  return (
    <BaseLayout title={meta.name} description={meta.description} classes={[]} >
      <div className={styles.logo + " " + styles.tCenter + " " + styles.overlayText}>
        <ExportedImage src={logo}
          alt='Mana Source logo'
          height="89"
          priority
          style={{
            width: "auto",
            maxWidth: "100%",
            objectFit: "contain"
          }} />
        <h1 className="hidden">
          Mana Source
        </h1>
      </div>
      <div className={styles.heroImage}>
        <ExportedImage
          src={cavePic}
          alt='mana well in cave'
          height="990"
          priority
          placeholder="blur"
          style={{
            width: "100%",
            objectFit: "cover",
            display: "block",
          }} />
        <a className={styles.scrollArrow + " " + styles.offset} href="#main">
          <ExportedImage
            src={arrowPic}
            alt='down arrow'
            height="1"
            width="1"
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain"
            }} />
        </a>
        <div className={styles.dH0}>
          <InfoBox classes={infoboxStyles.offset}>
            <div className={styles.tCenter + " " + styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " " + styles.lMH50}>
              <ExportedImage
                src={agesPic}
                alt='ages'
                styles={{ objectFit: "contain" }}
                height="50"
                priority
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} /><br />
              <p><strong>Ages</strong></p>
              <p>13+</p>
            </div>
            <div className={styles.tCenter + " " + styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " " + styles.lMH50}>
              <ExportedImage
                src={playersPic}
                alt='players'
                height="50"
                priority
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} /><br />
              <p><strong>Players</strong></p>
              <p>1-4</p>
            </div>
            <div className={styles.tCenter + " " + styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " " + styles.lMH50}>
              <ExportedImage
                src={timePic}
                alt='time to play'
                height="50"
                priority
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} /><br />
              <div className={styles.fourtyFiveW + " " + styles.inline}>
                <strong>PvE</strong>
                <p>60-180<br />
                  min</p>
              </div>
              <div className={styles.fourtyFiveW + " " + styles.inline}>
                <strong>PvP</strong>
                <p>20-30<br />
                  min</p>
              </div>
            </div>
            <br />
            <br />
            <p className={styles.fontPhilosopher}>
              <em>
                For thousands of years nations have fought for <strong>mana wells</strong>, which are now essential to modern life. <br />
                Each nation has unique weapons, talents, and battlefield-warping effects to emerge victorious.<br />
                But be careful, each opponent may have a few tricks they&apos;ve picked up from another nation...
              </em>
            </p>
          </InfoBox>
        </div>
      </div>
      <div id="main"></div>
      <ContentSection>
        <ContentItem classes={styles.tCenter + " " + styles.ruinsBg}>
          <InfoBox classes={styles.tCenter}>
            <br />
            <br />
            <br />
            <br />
            <h2>A discovery at an ancient vault may be the last hope of a people driven underground...</h2>
            <br />
          </InfoBox>
          <br />
          <YoutubeEmbed videoId="h9tHSCE1T84" width="900" height="508" isAutoplay={false} controls={true} />
          {/* <YoutubeEmbed videoId="h9tHSCE1T84" width="1920" height="1080" isAutoplay={true} frameborder={false} controls={false} mute={true} showinfo={false} /> */}
          <br />
          <InfoBox classes={styles.tCenter} delay={2}>
            <h2 className={styles.tCenter + " " + styles.medWPadding}>
              <div className={styles.mB10}><span className={styles.fontArkhip}>Mana Source</span> is an adventure board game with deadly adversaries.</div>
              <div>You&apos;ll need to rely on your wits to survive.</div>
            </h2>
            <a className={styles.scrollArrow} href="#signup">
              <ExportedImage
                src={arrowPic}
                alt='down arrow'
                height="1"
                width="1"
                priority
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} />
            </a>
            <br />
            <br />
            <br />
          </InfoBox>
          <div id="signup"></div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <InfoBox classes={styles.tCenter}>
            <div className={styles.medWPadding}>
              <div className={styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " "}>
                <h4>Don&apos;t wait for your turn to play!</h4>
                Simultaneous turns keep everyone focused on the action.
              </div>
              <div className={styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " "}>
                <h4>Spend less time learning, more time playing!</h4>
                <p><strong>Choose</strong> 2 of 6 classes.</p><br />
                <p><strong>Construct</strong> a hand of 10 cards</p><br />
                <p><strong>Gain an edge</strong> over the competition!</p><br />
              </div>
              <div className={styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " "}>
                <h4>3 Gamemodes</h4>
                <p><strong>Adventure</strong> through 20 story-rich scenarios,</p><br />
                <p><strong>Skirmish</strong> in a series of encounters, and</p><br />
                <p><strong>Clash</strong> competitively with 240 skills.</p><br />
              </div>
            </div>
            <br /><br />
            <h4>You can <Link href='/resources'>learn the basics</Link> in 15 minutes.</h4>
            <br /><br />
            <div className={styles.thirdW + " " + styles.inline + " " + styles.maxW500}>
              <EmailSignup ctaText="Start your adventure!" />
            </div>
            <div className={styles.thirdW + " " + styles.inline + " " + styles.maxW500}>
              <ExportedImage
                src={noAIPic}
                alt='No AI'
                height="1"
                width="1"
                priority
                sizes="100vw"
                style={{
                  width: "7rem",
                  height: "auto",
                  objectFit: "contain"
                }} />
              <div>
                <div><em>We&apos;re committed to art for humans by humans.</em></div>
              </div>
            </div>
            <a className={styles.scrollArrow} href="#about">
              <ExportedImage
                src={arrowPic}
                alt='down arrow'
                height="1"
                width="1"
                priority
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} />
            </a>
          </InfoBox>
        </ContentItem>
      </ContentSection>
      <div id="about"></div>
      <ContentSection>
        <h3 className={styles.tCenter}>Meet the Team</h3>
        <ContentItem classes={styles.timbatiaBg + " " + styles.fullW}>
          <InfoBox classes={styles.maxW960 + " " + styles.tCenter + " " + styles.center + " " + styles.flex}>
            <ExportedImage
              src={paulPic}
              alt='Paul profile picture'
              width={200}
              height={0}
              priority
              className={styles.inline}
              style={{
                maxWidth: "100%",
                height: "auto",
              }} />
            <div className={styles.inline + " " + styles.mL20 + " " + styles.vAlignTop + " " + styles.tLeft + " " + styles.md50}>
              <p><strong>Paul Goodrich</strong></p>
              <p className={styles.mb1}><i>Lead Designer</i></p>
              <p className={styles.mb1}>
                Paul graduated from North Carolina State University with a Bachelor&apos;s degree in Computer Science and concentration in game design.  He has a long history of competitive gaming, including professionally as the support and jungler for Team C in the MOBA Infinite Crisis, Masters in Overwatch pre-OWL, and Diamond 1 in League of Legends in S3.
              </p>
            </div>
          </InfoBox>
          <br />
          <InfoBox classes={styles.maxW960 + " " + styles.mLauto + " " + styles.tCenter + " " + styles.center}>
            <div className={styles.vAlignTop + " " + styles.md50 + " " + styles.mR20 + " " + styles.tLeft}>
              <p><strong>Nele Diel</strong></p>
              <p className={styles.mb1}><i>Lead Artist</i></p>
              <p className={styles.mb1}>
                Nele is a full-time freelance illustrator living in Wiesbaden, Germany.  She graduated with a degree in Communication Design in 2016.  Since then she has produced art for several board games, including for the The Lord of the Rings,
                Arkham Horror, and Legend of the Five Rings trading card games. </p><p>
                She also enjoys working on interior art for books as well as cover illustrations for books and music albums.  We&apos;re honored to have her produce art for <span className={styles.fontArkhip}>Mana Source</span>.  You can find more of her art or request commissions on on <a href="https://nelediel.com/">https://nelediel.com/</a>.
              </p>
            </div>
            <ExportedImage
              src={nelePic}
              alt='Nele profile picture'
              width={200}
              height={0}
              priority
              className={styles.inline + " " + styles.tRight}
              style={{
                maxWidth: "100%",
              }} />
          </InfoBox>
          <br />
          <InfoBox classes={styles.maxW960 + " " + styles.tCenter + " " + styles.center + " " + styles.flex}>
            <ExportedImage
              src={sandiPic}
              alt='Sandi profile picture'
              width={200}
              height={0}
              priority
              className={styles.inline}
              style={{
                maxWidth: "100%",
                height: "auto",
              }} />
            <div className={styles.inline + " " + styles.mL20 + " " + styles.vAlignTop + " " + styles.tLeft + " " + styles.md50}>
              <p><strong>Sandi Goodrich</strong></p>
              <p className={styles.mb1}><i>Creature Concepts</i></p>
              <p className={styles.mb1}>
                Sandi Goodrich is the wife of Paul Goodrich and resident knower of all trivia.  In her spare time she enjoys crocheting, cooking delicious meals, exploring Hyrule, and playing games with Paul.  Her favorite games include Cubitos, Super Motherload, Argent the Consortium, Aeon&apos;s End, and <span className={styles.fontArkhip}>Mana Source</span>.
              </p>
            </div>
            <a className={styles.scrollArrow} href="#news">
              <ExportedImage
                src={arrowPic}
                alt='down arrow'
                height="1"
                width="1"
                priority
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} />
            </a>
          </InfoBox>
        </ContentItem>
      </ContentSection >
      <div id="news"></div>
      <ContentSection>
        <h3 className={styles.tCenter}>Latest Articles</h3>
        <ContentItem classes={styles.tCenter + " " + styles.golemBg + " " + styles.fullW}>
          <InfoBox classes={styles.mLauto + " " + styles.maxW960}>
            <ArticleList category="all" max="5" />
            <Link href="/news"><h4>View All</h4></Link>
            <br />
          </InfoBox>
        </ContentItem>
      </ContentSection>
    </BaseLayout >
  );
}
