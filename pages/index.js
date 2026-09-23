// import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import BaseLayout from '../components/Templates/BaseTemplate';
import styles from '../components/Templates/BaseTemplate.module.scss';
import ArticleList from '../components/content/ArticleList/ArticleList';
import ContentItem from '../components/content/ContentSection/ContentItem';
import meta from '../metadata/pagemeta';
import paulPic from '../public/images/PaulProfile.jpg';
import nelePic from '../public/images/NeleProfile.jpg';
import sandiPic from '../public/images/SandiProfile.jpg';
import amandaPic from '../public/images/AmandaProfile.jpg';
import angeloPic from '../public/images/AngeloProfile.jpg';
import oliviaPic from '../public/images/OliviaProfile.jpg';
import noAIPic from '../public/icons/NoAI.png';
import GameSchema from '../components/content/GameSchema/GameSchema';
import Hero from '../components/content/Hero/Hero';
import ScrollArrow from '../components/content/ScrollArrow/ScrollArrow';
import SocialLinks from '../components/content/SocialLinks/SocialLinks';
import AboutPanels from '../components/content/AboutPanels/AboutPanels';
import ContentSection from './../components/content/ContentSection/ContentSection';
import EmailSignup from './../components/content/EmailSignup/EmailSignup';
import InfoBox from './../components/content/InfoBox/InfoBox';
import YoutubeEmbed from './../components/content/YoutubeEmbed/YoutubeEmbed';
import dynamic from 'next/dynamic'

const LandingAnimation = dynamic(() => import('../components/content/LandingAnimation/LandingAnimation'), { ssr: false })

export default function Home() {
  return (
    <BaseLayout title={meta.name} description={meta.description} classes={[]} >
      <GameSchema />
      <LandingAnimation />
      <Hero overlayClasses={styles.heroOverlay} />
      <div id="main"></div>
      <ContentSection>
        <ContentItem classes={styles.tCenter + " " + styles.ruinsBg}>
          <InfoBox classes={styles.tCenter}>
            <span className="spacer3" aria-hidden="true"></span>
            <h2>A discovery at an ancient vault may be the last hope of a people driven underground...</h2>
            <span className="spacer1" aria-hidden="true"></span>
          </InfoBox>
          <span className="spacer1" aria-hidden="true"></span>
          <YoutubeEmbed videoId="h9tHSCE1T84" width="900" height="508" isAutoplay={false} controls={true} />
          {/* <YoutubeEmbed videoId="h9tHSCE1T84" width="1920" height="1080" isAutoplay={true} frameborder={false} controls={false} mute={true} showinfo={false} /> */}
          <span className="spacer1" aria-hidden="true"></span>
          <InfoBox classes={styles.tCenter} delay={2}>
            <h2 className={styles.tCenter + " " + styles.medWPadding}>
              <div className={styles.mB10}><span className={styles.fontArkhip}>Mana Source</span> is an adventure board game with a story-driven campaign, dual-class character building, and simultaneous turns coming to Kickstarter in early 2027.</div>
              <div>You&apos;ll need to work together if you&apos;re going to survive.</div>
            </h2>
            <ScrollArrow href="#signup" classes={styles.sectionArrow} />
            <span className="spacer3" aria-hidden="true"></span>
          </InfoBox>
          <div id="signup"></div>
          <div className={styles.signupSpacing} aria-hidden="true"></div>
          <InfoBox classes={styles.tCenter}>
            <div className={styles.medWPadding}>
              <div className={styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " "}>
                <h4>Don&apos;t wait for your turn to play!</h4>
                <strong>Simultaneous turns</strong> keep everyone focused on the action.<br />
                <br />
                Players must <strong>coordinate</strong> their abilities to overcome challenges and defeat deadly adversaries.
              </div>
              <div className={styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " "}>
                <h4>Spend less time learning, more time playing!</h4>
                <h4>You can <Link href='/resources'>learn the basics</Link> in 15 minutes.</h4>
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
            <div className={styles.signupFeatures}>
              <div className={styles.thirdW + " " + styles.inline + " " + styles.maxW500 + " " + styles.signupFeature}>
                <EmailSignup ctaText="Start your adventure!" />
              </div>
              <div className={styles.thirdW + " " + styles.inline + " " + styles.maxW500 + " " + styles.signupFeature}>
                <ExportedImage
                  src={noAIPic}
                  alt='No AI art'
                  height={0}
                  width={0}
                  sizes="128px"
                  unoptimized={true}
                  style={{
                    width: "7rem",
                    height: "auto",
                    objectFit: "contain"
                  }} />
                <div>
                  <div><em>We&apos;re committed to art for humans by humans.<br /><br />The Mana Source board game contains<br />zero AI-generated art, cards, or writing.</em></div>
                </div>
              </div>
            </div>
            <div className={styles.tCenter + " " + styles.maxW960 + " " + styles.center}>
              <ScrollArrow href="#learnmore" classes={styles.sectionArrow} preload={true} />
            </div>
          </InfoBox>
        </ContentItem>
      </ContentSection>
      <div id="learnmore"></div>
      <ContentSection>
        <h3 className={styles.tCenter}>About Mana Source</h3>
        <AboutPanels />
        <span className="spacer1" aria-hidden="true"></span>
        <ScrollArrow href="#about" classes={styles.sectionArrow} />
        <span className="spacer2" aria-hidden="true"></span>
      </ContentSection >
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
          <span className="spacer1" aria-hidden="true"></span>
          <InfoBox classes={styles.maxW960 + " " + styles.mLauto + " " + styles.tCenter + " " + styles.center}>
            <div className={styles.vAlignTop + " " + styles.md50 + " " + styles.mR20 + " " + styles.tLeft}>
              <p><strong>Nele Diel</strong></p>
              <p className={styles.mb1}><i>Lead Artist</i></p>
              <p className={styles.mb1}>
                Nele is a full-time freelance illustrator living in Wiesbaden, Germany.  She graduated with a degree in Communication Design in 2016.  Since then she has produced art for several board games, including for the The Lord of the Rings,
                Arkham Horror, and Legend of the Five Rings trading card games. </p><p>
                She also enjoys working on interior art for books as well as cover illustrations for books and music albums.  You can find more of her art and request commissions on <a href="https://nelediel.com/">https://nelediel.com/</a>.
              </p>
            </div>
            <ExportedImage
              src={nelePic}
              alt='Nele profile picture'
              width={200}
              height={0}
              className={styles.inline + " " + styles.tRight}
              style={{
                maxWidth: "100%",
              }} />
          </InfoBox>
          <span className="spacer1" aria-hidden="true"></span>
          <InfoBox classes={styles.maxW960 + " " + styles.mLauto + " " + styles.tCenter + " " + styles.center}>
            <ExportedImage
              src={amandaPic}
              alt='Amanda profile picture'
              width={200}
              height={0}
              className={styles.inline + " " + styles.tRight}
              style={{
                maxWidth: "100%",
              }} />
            <div className={styles.inline + " " + styles.mL20 + " " + styles.vAlignTop + " " + styles.tLeft + " " + styles.md50}>
              <p><strong>Amanda Brack</strong></p>
              <p className={styles.mb1}><i>Lead Artist</i></p>
              <p className={styles.mb1}>
                Amanda Brack is NYC based digital freelance illustrator. Growing up hearing folktales by the fire and discovering the magic in hidden corners of the New England coast, she has a deep passion for fantasy and storytelling.
              </p><p>She has worked on a wide range of projects including character designs, private commissions, book covers, children&apos;s books, coloring books, and more.  You can find more of her art and request commissions on <a href="https://www.amandabrack.art/">https://www.amandabrack.art/</a>.
              </p>
            </div>
          </InfoBox>
          <span className="spacer1" aria-hidden="true"></span>
          <InfoBox classes={styles.maxW960 + " " + styles.tCenter + " " + styles.center + " " + styles.flex}>

            <div className={styles.vAlignTop + " " + styles.md50 + " " + styles.mR20 + " " + styles.tLeft}>
              <p><strong>Sandi Goodrich</strong></p>
              <p className={styles.mb1}><i>Creature Concepts</i></p>
              <p className={styles.mb1}>
                Sandi Goodrich is the wife of Paul Goodrich and resident knower of all trivia.  In her spare time she enjoys crocheting, cooking delicious meals, exploring Hyrule, and playing games with Paul.  Her favorite games include Cubitos, Super Motherload, Argent the Consortium, Aeon&apos;s End, and <span className={styles.fontArkhip}>Mana Source</span>.
              </p>
            </div>
            <ExportedImage
              src={sandiPic}
              alt='Sandi profile picture'
              width={200}
              height={0}
              className={styles.inline}
              style={{
                maxWidth: "100%",
                height: "auto",
              }} />
          </InfoBox>
          <span className="spacer1" aria-hidden="true"></span>
          <InfoBox classes={styles.maxW960 + " " + styles.mLauto + " " + styles.tCenter + " " + styles.center}>
            <ExportedImage
              src={angeloPic}
              alt='Angelo profile picture'
              width={200}
              height={0}
              className={styles.inline + " " + styles.tRight}
              style={{
                maxWidth: "100%",
              }} />
            <div className={styles.inline + " " + styles.mL20 + " " + styles.vAlignTop + " " + styles.tLeft + " " + styles.md50}>
              <p><strong>Angelo Adonis Chavez</strong></p>
              <p className={styles.mb1}><i>Character and Environment Artist</i></p>
              <p className={styles.mb1}>
                Angelo Chavez is a freelance illustrator and concept artist based in the Philippines. He enjoys working on fantasy illustrations and has done work for card and board games.
              </p><p>You can find more of his art and request commissions on <a href="https://www.artstation.com/bradixr">https://www.artstation.com/bradixr</a>.
              </p>
            </div>
          </InfoBox>
          <span className="spacer1" aria-hidden="true"></span>
          <InfoBox classes={styles.maxW960 + " " + styles.tCenter + " " + styles.center + " " + styles.flex}>
            <div className={styles.vAlignTop + " " + styles.md50 + " " + styles.mR20 + " " + styles.tLeft}>
              <p><strong>Olivia Hintz</strong></p>
              <p className={styles.mb1}><i>Character and Environment Artist</i></p>
              <p className={styles.mb1}>
                Olivia Hintz is a fantasy illustrator and freelance artist known for her story-driven artwork. A classically trained painter, she earned her BFA from Purchase College&apos;s Conservatory of Fine Art. After graduation, she transitioned into digital illustration driven by her passion for storytelling, worldbuilding and immersive fantasy scenes.
              </p><p>You can find more of her art and request commissions on <a href="https://www.oliviahintz.com/">https://www.oliviahintz.com/</a>.
              </p>
            </div>
            <ExportedImage
              src={oliviaPic}
              alt='Olivia profile picture'
              width={200}
              height={0}
              className={styles.inline + " " + styles.tRight}
              style={{
                maxWidth: "100%",
              }} />
          </InfoBox>
          <span className="spacer1" aria-hidden="true"></span>
          <ScrollArrow href="#news" classes={styles.sectionArrow} />
          <br /><br />
        </ContentItem>
      </ContentSection >
      <div id="news"></div>
      <ContentSection>
        <ContentItem classes={styles.tCenter}>
          <span className="spacer2" aria-hidden="true"></span>
          <h2 className={styles.tCenter + " " + styles.medWPadding}>
            <div className={styles.mB10}><span className={styles.fontArkhip}>Mana Source</span> is coming to Kickstarter in early 2027.</div>
          </h2>
          <div className={styles.maxW500 + " " + styles.center}>
            <EmailSignup ctaText="Start your adventure!" />
            <SocialLinks />
            <span className="spacer2" aria-hidden="true"></span>
          </div>
        </ContentItem>
        <h3 className={styles.tCenter}>Latest Articles</h3>
        <ContentItem classes={styles.tCenter + " " + styles.golemBg + " " + styles.fullW}>
          <InfoBox classes={styles.mLauto + " " + styles.maxW960}>
            <ArticleList category="all" max="5" />
            <Link href="/news"><h4>View All</h4></Link>
            <span className="spacer1" aria-hidden="true"></span>
          </InfoBox>
        </ContentItem>
      </ContentSection>
    </BaseLayout >
  );
}
