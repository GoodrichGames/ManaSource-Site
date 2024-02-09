import Image from "next/image";
import ggLogo from '../public/images/GG-Logo-dark-bg.png';
import styles from '../components/Templates/BaseTemplate.module.scss';
import Button from "../components/content/Button/Button";
import EmailSignup from '../components/content/EmailSignup/EmailSignup';
import infoboxStyles from '../components/content/InfoBox/InfoBox.module.scss';
import YoutubeEmbed from "../components/content/YoutubeEmbed/YoutubeEmbed";
import arrowPic from '../public/icons/Arrow.png';
import agesPic from '../public/icons/ages.png';
import timePic from '../public/icons/hourglass.png';
import playersPic from '../public/icons/players.png';
import cavePic from '../public/images/cave.png';
import prefix from '../utils/prefix';
import NoNavTemplate from './../components/Templates/NoNavTemplate';
import ContentItem from './../components/content/ContentSection/ContentItem';
import ContentSection from './../components/content/ContentSection/ContentSection';
import InfoBox from './../components/content/InfoBox/InfoBox';

export default function Landing() {
  return (
    <NoNavTemplate>
      <h1 className={styles.logo + " " + styles.overlayText + " " + styles.tCenter}>
        Mana Source
      </h1>
      <div className={styles.heroImage}>
        <Image
          src={cavePic}
          alt='mana well in cave'
          height="950"
          priority
          style={{
            width: "100%",
            objectFit: "cover"
          }} />
        <a className={styles.scrollArrow + " " + styles.offset} href="#main">
          <Image
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
              <Image
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
              <Image
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
              <Image
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
            <div className={styles.maxW500}>
              <EmailSignup ctaText="Start your adventure!" />
            </div>
          </InfoBox>
        </div>
      </div>
      <div id="main"></div>
      <ContentSection>
        <ContentSection>
          <ContentItem classes={styles.tCenter + " " + styles.ruinsBg}>
            <InfoBox classes={styles.tCenter}>
              <br />
              <br />
              <br />
              <br />
              <h2>A discovery at an ancient vault has the potential to upend the nations...</h2>
              <br />
            </InfoBox>
            <br />
            <YoutubeEmbed videoId="h9tHSCE1T84" width="900" height="508" isAutoplay={false} controls={true} />
            {/* <YoutubeEmbed videoId="h9tHSCE1T84" width="1920" height="1080" isAutoplay={true} frameborder={false} controls={false} mute={true} showinfo={false} /> */}
            <br />
            <InfoBox classes={styles.tCenter} delay={2}>
              <h2 className={styles.tCenter + " " + styles.medWPadding}>
                <div className={styles.mB10}><span className={styles.fontArkhip}>Mana Source</span> is an adventure board game kickstarting in late 2024.</div>
              </h2>
              <div className={styles.maxW500 + " " + styles.center}>
                <EmailSignup ctaText="Start your adventure!" />
                or<br /><br />
                <p>Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> and <a href="https://www.facebook.com/Mana-Source-102398542746103%C2%A0">Facebook</a> to chat with the community. <br /></p>
              </div>
              <Button text='Discover More' classes={styles.center + ' ' + styles.twentyW} onClick={() => { window.location = prefix + '/' }} />
            </InfoBox>
          </ContentItem>
        </ContentSection>
        <br />
        <div className={styles.fullW + " " + styles.tCenter}>
          <Image
            src={ggLogo}
            alt='Goodrich Games Logo'
            width={0}
            height={100}
            style={{
              objectFit: "contain",
            }} />
        </div>
        <br />
      </ContentSection>
    </NoNavTemplate>
  );
}
