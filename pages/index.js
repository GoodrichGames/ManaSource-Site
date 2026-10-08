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
import BrandName from '../components/content/BrandName/BrandName';
import AboutPanels from '../components/content/AboutPanels/AboutPanels';
import Descent from '../components/content/Descent/Descent';
import SectionArt from '../components/content/SectionArt/SectionArt';
import SectionHeading from '../components/content/SectionHeading/SectionHeading';
import ClassHand from '../components/content/ClassHand/ClassHand';
import TurnRound from '../components/content/TurnRound/TurnRound';
import LearnToPlay from '../components/content/LearnToPlay/LearnToPlay';
import cavePic from '../public/images/cave.png';
import { useRef } from 'react';
import ContentSection from './../components/content/ContentSection/ContentSection';
import EmailSignup from './../components/content/EmailSignup/EmailSignup';
import InfoBox from './../components/content/InfoBox/InfoBox';
import YoutubeEmbed from './../components/content/YoutubeEmbed/YoutubeEmbed';
import dynamic from 'next/dynamic'

const LandingAnimation = dynamic(() => import('../components/content/LandingAnimation/LandingAnimation'), { ssr: false })

export default function Home() {
  const ruinsWindowRef = useRef(null);

  return (
    <BaseLayout title={meta.name} description={meta.description} classes={styles.layered} >
      <GameSchema />
      <LandingAnimation />
      <Descent />
      <Hero overlayClasses={styles.heroOverlay} />
      <div id="main"></div>
      <ContentSection>
        <ContentItem classes={styles.tCenter + " " + styles.artSection + " " + styles.ruinsSection}>
          <SectionArt classes={styles.ruinsArt} anchorRef={ruinsWindowRef}>
            <div className={styles.torchFlame}></div>
          </SectionArt>
          <h2 className={styles.ruinsHook}>A discovery at an ancient vault may be the last hope of a people driven underground...</h2>
          <div className={styles.trailer}>
            <YoutubeEmbed videoId="h9tHSCE1T84" width="900" height="508" isAutoplay={false} controls={true} coverImage={cavePic} />
          </div>
          {/* <YoutubeEmbed videoId="h9tHSCE1T84" width="1920" height="1080" isAutoplay={true} frameborder={false} controls={false} mute={true} showinfo={false} /> */}
          <h2 className={styles.ruinsPitch}>
            <span className={styles.ruinsPitchLine}><BrandName large /> is an adventure board game with a story-driven campaign, dual-class character building, and simultaneous turns coming to Kickstarter in early 2027.</span>
            <span className={styles.ruinsCall}>You&apos;ll need to work together if you&apos;re going to survive.</span>
          </h2>
          <ScrollArrow href="#signup" classes={styles.sectionArrow} />
          <div id="signup" className={styles.anchorTarget}></div>
          <div ref={ruinsWindowRef} className={styles.ruinsWindow} aria-hidden="true"></div>
          <InfoBox variant="banner" classes={styles.tCenter}>
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
            <TurnRound />
            <LearnToPlay />
            <h4 className={styles.groupTitle}>Classes</h4>
            <ClassHand />
            <div className={styles.maxW500 + " " + styles.center}>
              <EmailSignup ctaText="Start your adventure!" />
            </div>
            <div className={styles.tCenter + " " + styles.maxW960 + " " + styles.center}>
              <ScrollArrow href="#learnmore" classes={styles.sectionArrow} preload={true} />
            </div>
          </InfoBox>
        </ContentItem>
      </ContentSection>
      <div id="learnmore" className={styles.anchorTarget}></div>
      <ContentSection>
        <SectionHeading>About Mana Source</SectionHeading>
        <AboutPanels />
        <span className="spacer1" aria-hidden="true"></span>
        <ScrollArrow href="#about" classes={styles.sectionArrow} />
        <span className="spacer2" aria-hidden="true"></span>
      </ContentSection >
      <div id="about" className={styles.anchorTarget}></div>
      <ContentSection>
        <SectionHeading>Meet the Team</SectionHeading>
        <ContentItem classes={styles.artSection + " " + styles.fullW}>
          <SectionArt classes={styles.moonlightArt} parallax={360} zoom={0.2} />
          <span className="spacer1" aria-hidden="true"></span>
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
                Sandi Goodrich is the wife of Paul Goodrich and resident knower of all trivia.  In her spare time she enjoys crocheting, cooking delicious meals, exploring Hyrule, and playing games with Paul.  Her favorite games include Cubitos, Super Motherload, Argent the Consortium, Aeon&apos;s End, and <BrandName />.
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
      <div id="news" className={styles.anchorTarget}></div>
      <ContentSection>
        <ContentItem classes={styles.tCenter}>
          <span className="spacer2" aria-hidden="true"></span>
          <h2 className={styles.tCenter + " " + styles.medWPadding}>
            <div className={styles.mB10}><BrandName /> is coming to Kickstarter in early 2027.</div>
          </h2>
          <div className={styles.maxW500 + " " + styles.center}>
            <EmailSignup ctaText="Start your adventure!" />
            <SocialLinks />
            <span className="spacer2" aria-hidden="true"></span>
          </div>
        </ContentItem>
        <SectionHeading>Latest Articles</SectionHeading>
        <ContentItem classes={styles.tCenter + " " + styles.artSection + " " + styles.fullW}>
          <SectionArt classes={styles.golemArt} parallax={0} zoom={0} />
          <span className="spacer2" aria-hidden="true"></span>
          <InfoBox classes={styles.mLauto + " " + styles.maxW960}>
            <ArticleList category="all" max="5" shortImages={true} />
            <Link href="/news"><h4 className={styles.viewAll}>View All</h4></Link>
          </InfoBox>
          <span className="spacer4" aria-hidden="true"></span>
        </ContentItem>
      </ContentSection>
    </BaseLayout >
  );
}
