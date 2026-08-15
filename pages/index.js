// import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import BaseLayout from '../components/Templates/BaseTemplate';
import styles from '../components/Templates/BaseTemplate.module.scss';
import ArticleList from '../components/content/ArticleList/ArticleList';
import ContentItem from '../components/content/ContentSection/ContentItem';
import infoboxStyles from '../components/content/InfoBox/InfoBox.module.scss';
import meta from '../metadata/pagemeta';
import gameSchema from '../metadata/gameschema';
import arrowPic from '../public/icons/Arrow.png';
import agesPic from '../public/icons/ages.png';
import timePic from '../public/icons/hourglass.png';
import playersPic from '../public/icons/players.png';
import paulPic from '../public/images/PaulProfile.jpg';
import nelePic from '../public/images/NeleProfile.jpg';
import sandiPic from '../public/images/SandiProfile.jpg';
import amandaPic from '../public/images/AmandaProfile.jpg';
import angeloPic from '../public/images/AngeloProfile.jpg';
import oliviaPic from '../public/images/OliviaProfile.jpg';
import logo from '../public/images/ManaSourceLogoV2.png'
import cavePic from '../public/images/cave.png';
import noAIPic from '../public/icons/NoAI.png';
import bggIcon from '../public/icons/BGG.svg';
import fbIcon from '../public/icons/Facebook.svg';
import xIcon from '../public/icons/X.svg';
import discordIcon from '../public/icons/Discord.svg';
import ContentSection from './../components/content/ContentSection/ContentSection';
import EmailSignup from './../components/content/EmailSignup/EmailSignup';
import InfoBox from './../components/content/InfoBox/InfoBox';
import HoverReveal from '../components/content/HoverReveal/HoverReveal';
import YoutubeEmbed from './../components/content/YoutubeEmbed/YoutubeEmbed';
import dynamic from 'next/dynamic'

const LandingAnimation = dynamic(() => import('../components/content/LandingAnimation/LandingAnimation'), { ssr: false })

export default function Home() {
  return (
    <BaseLayout title={meta.name} description={meta.description} classes={[]} >
      <script
        id="game-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gameSchema),
        }}
      />
      <LandingAnimation />
      <div className={styles.logo + " " + styles.tCenter + " " + styles.overlayText}>
        <ExportedImage src={logo}
          alt='Mana Source logo'
          height={250}
          width={0}
          preload={true}
          loading="eager"
          fetchPriority="high"
          style={{
            width: "auto",
            maxWidth: "100%",
            height: "auto",
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
          preload={true}
          placeholder="blur"
          style={{
            height: "100vh",
            width: "100%",
            objectFit: "cover",
            display: "block",
          }} />
        <a className={styles.scrollArrow + " " + styles.offset + " " + styles.glow} href="#main">
          <ExportedImage
            src={arrowPic}
            alt='down arrow'
            height="1"
            width="1"
            preload={true}
            unoptimized={true}
            sizes="20px"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain"
            }} />
        </a>
        <div className={styles.dH0}>
          <InfoBox classes={infoboxStyles.offset + " " + infoboxStyles.overlay}>
            <div className={styles.tCenter + " " + styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " " + styles.lMH50}>
              <ExportedImage
                src={agesPic}
                alt='ages'
                height="50"
                preload={true}
                unoptimized={true}
                sizes="128px"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} /><br />
              <p><strong>Ages</strong></p>
              <p>13+</p>
            </div>
            <div className={styles.tCenter + " " + styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " " + styles.lMH50}>
              <ExportedImage
                src={playersPic}
                alt='players'
                height="50"
                preload={true}
                unoptimized={true}
                sizes="128px"
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
                preload={true}
                unoptimized={true}
                sizes="128px"
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
            <h2>A discovery at an ancient vault may be the last hope of a people driven underground...</h2>
            <br />
          </InfoBox>
          <br />
          <YoutubeEmbed videoId="h9tHSCE1T84" width="900" height="508" isAutoplay={false} controls={true} />
          {/* <YoutubeEmbed videoId="h9tHSCE1T84" width="1920" height="1080" isAutoplay={true} frameborder={false} controls={false} mute={true} showinfo={false} /> */}
          <br />
          <InfoBox classes={styles.tCenter} delay={2}>
            <h2 className={styles.tCenter + " " + styles.medWPadding}>
              <div className={styles.mB10}><span className={styles.fontArkhip}>Mana Source</span> is an adventure board game with a story-driven campaign, dual-class character building, and simultaneous turns coming to Kickstarter in 2026.</div>
              <div>You&apos;ll need to work together if you&apos;re going to survive.</div>
            </h2>
            <a className={styles.scrollArrow + " " + styles.glow} href="#signup">
              <ExportedImage
                src={arrowPic}
                alt='down arrow'
                height="1"
                width="1"
                unoptimized={true}
                sizes="20px"
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
            <div className={styles.thirdW + " " + styles.inline + " " + styles.maxW500}>
              <EmailSignup ctaText="Start your adventure!" />
            </div>
            <div className={styles.thirdW + " " + styles.inline + " " + styles.maxW500}>
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
            <div className={styles.tCenter + " " + styles.maxW960 + " " + styles.center}>
              <a className={styles.scrollArrow + " " + styles.glow} href="#learnmore">
                <ExportedImage
                  src={arrowPic}
                  alt='down arrow'
                  height="1"
                  width="1"
                  preload={true}
                  unoptimized={true}
                  sizes="20px"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain"
                  }} />
              </a>
            </div>
          </InfoBox>
        </ContentItem>
      </ContentSection>
      <div id="learnmore"></div>
      <ContentSection>
        <h3 className={styles.tCenter}>About Mana Source</h3>
        <ContentItem classes={styles.fullW + " " + styles.flex + " " + styles.minHeight700}>
          <ContentItem classes={styles.redSkyBg + " " + styles.bgCover + " " + styles.fullW}>
            <HoverReveal title="Gameplay">
              <div>
                Combat in <span className={styles.fontArkhip}>Mana Source</span> is highly interactive and euro-inspired.  Players must rely on planning and dynamic execution to win.
                <br />
                <br />
                In the Campaign, a streamlined <strong>solo mode</strong> ensures that you can focus on playing your character. Every action is balanced for head-to-head competitive play.
              </div>
            </HoverReveal>
          </ContentItem>
          <ContentItem classes={styles.highlandsBg + " " + styles.bgCover + " " + styles.fullW}>
            <HoverReveal title="Setting">
              <div>
                <strong><span className={styles.fontArkhip}>Mana Source</span></strong>&nbsp; is a thrilling high-fantasy adventure set in a world where nation has ravaged nation following the onset of a mechanical revolution. Join a scrappy group on the outskirts of civilization. As you venture out, you&apos;ll have to explore, solve puzzles, and defeat deadly adversaries if you&apos;re going to survive.
              </div>
            </HoverReveal>
          </ContentItem>
          <ContentItem classes={styles.cultistsBg + " " + styles.bgCover + " " + styles.fullW}>
            <HoverReveal title="Design Philosophy">
              <div className={styles.tLeft}>
                <strong>Light on Core Rules:</strong>  You shouldn&apos;t have to spend hours teaching a game before you can play.
                <br />
                <br />
                <strong>Gradually build complexity:</strong>  Each class begins with low complexity actions in order to make getting started easy. Over the course of the campaign, players unlock new actions, gather resources, and complete challenges that add layers of strategy.  Discover new combos while adapting to every unique encounter thrown your way!
                <br />
                <br />
                <strong>Story is a Feature not a Flavor:</strong> Many board games contain only a light, loosely connected narrative. In <span className={styles.fontArkhip}>Mana Source</span>&nbsp; the story, characters, and various twists are a focal point. The story favors a tight, high-quality narrative of over 140,000 words across 20+ scenarios that you&apos;ll remember for years to come.
              </div>
            </HoverReveal>
          </ContentItem>
        </ContentItem>
        <br />
        <a className={styles.scrollArrow + " " + styles.glow} href="#about">
          <ExportedImage
            src={arrowPic}
            alt='down arrow'
            height="1"
            width="1"
            unoptimized={true}
            sizes="20px"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain"
            }} />
        </a>
        <br />
        <br />
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
          <br />
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
          <br />
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
          <br />
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
          <br />
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
          <br />
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
          <br />
          <a className={styles.scrollArrow + " " + styles.glow} href="#news">
            <ExportedImage
              src={arrowPic}
              alt='down arrow'
              height="1"
              width="1"
              unoptimized={true}
              sizes="20px"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain"
              }} />
          </a>
          <br /><br />
        </ContentItem>
      </ContentSection >
      <div id="news"></div>
      <ContentSection>
        <ContentItem classes={styles.tCenter}>
          <br />
          <br />
          <h2 className={styles.tCenter + " " + styles.medWPadding}>
            <div className={styles.mB10}><span className={styles.fontArkhip}>Mana Source</span> is coming to Kickstarter in 2026.</div>
          </h2>
          <div className={styles.maxW500 + " " + styles.center}>
            <EmailSignup ctaText="Start your adventure!" />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              <a href="https://boardgamegeek.com/boardgame/391828/mana-source" target="_blank" rel="noopener noreferrer" title="BoardGameGeek" style={{ display: 'inline-block', color: '#1ac7fc', transition: 'opacity 0.3s' }}>
                <ExportedImage
                  src={bggIcon}
                  alt='Follow on BoardGameGeek'
                  width={80}
                  height={40}
                  unoptimized={true}
                  style={{
                    width: '80px',
                    height: '40px',
                    objectFit: 'contain'
                  }}
                />
              </a>
              <a href="https://discord.com/invite/drQDa7MQ3e" target="_blank" rel="noopener noreferrer" title="Discord" style={{ display: 'inline-block', color: '#1ac7fc', transition: 'opacity 0.3s' }}>
                <ExportedImage
                  src={discordIcon}
                  alt='Chat on Discord'
                  width={40}
                  height={40}
                  unoptimized={true}
                  style={{
                    width: '40px',
                    height: '40px',
                    objectFit: 'contain'
                  }}
                />
              </a>
              <a href="https://www.facebook.com/Mana-Source-102398542746103" target="_blank" rel="noopener noreferrer" title="Facebook" style={{ display: 'inline-block', color: '#1ac7fc', transition: 'opacity 0.3s' }}>
                <ExportedImage
                  src={fbIcon}
                  alt='Follow on Facebook'
                  width={40}
                  height={40}
                  unoptimized={true}
                  style={{
                    width: '40px',
                    height: '40px',
                    objectFit: 'contain'
                  }}
                />
              </a>
              <a href="https://x.com/ManaSourceGame" target="_blank" rel="noopener noreferrer" title="X" style={{ display: 'inline-block', color: '#1ac7fc', transition: 'opacity 0.3s' }}>
                <ExportedImage
                  src={xIcon}
                  alt='Follow on X'
                  width={40}
                  height={40}
                  unoptimized={true}
                  style={{
                    width: '40px',
                    height: '40px',
                    objectFit: 'contain'
                  }}
                />
              </a>
            </div>
            <br />
            <br />
          </div>
        </ContentItem>
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
