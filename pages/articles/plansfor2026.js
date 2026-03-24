import ArticleTemplate from './../../components/Templates/ArticleTemplate';
import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import ArticleBlock from './../../components/content/ArticleBlock/ArticleBlock';
import ExportedImage from "next-image-export-optimizer";
import babyPic from '../../public/images/articles/baby.jpg';
import snakePic from '../../public/images/articles/snake.jpg';
import styles from '../../components/Templates/BaseTemplate.module.scss';


const Article = () => {
  return (
    <ArticleTemplate useImage={true}>
      <ArticleBlock>
        Happy new year everyone!  Since our last update, we&apos;ve had a new addition to the Goodrich Games crew.  Our creature expert has produced her best work yet!<br /><br />
        <div className={styles.center + " " + styles.tCenter}>
          <ExportedImage
            src={babyPic}
            alt='Baby'
            width={0} height={500}
            sizes="100vw"
            style={{
              height: "auto",
              objectFit: "contain"
            }} />

        </div>
        <br />
        She&apos;s 6 months old now and has a lot to say.  It&apos;s been extremely rewarding becoming a parent.  My wife and I agree, 10/10 would have a child again.

        In gaming news, I&apos;m happy to announce that all scenarios are officially written and all originally planned art is complete or in progress.  Which means we are getting much closer to a launch date!            <br />
        <h2>When&apos;s the Kickstarter?</h2>
        If all goes well, Summer 2026.  However, since I have made the unusual promise that the game will be in a finished state when the Kickstarter begins, there&apos;s always a possibility an opportunity for improvement will come up during the editing or review phase.  The bright side is, the only potential delays post-Kickstarter will be production related.
        <br />
        <h2>Development Progress</h2>
        All scenarios are written. 2 are undergoing playtesting.<br />
        97% complete.<br />
        <br />
        240 Action card design, 40 per class. +2 expansions of 15 cards per class.<br />
        99.5% complete.<br />
        <br />
        138 Equipment cards.<br />
        99.5% complete.<br />
        <br />
        Art<br />
        98% complete.<br />
        <br />
        UI asset creation (tokens, reference cards, campaign tracking sheet, stickers, dials, boxes)<br />
        70% complete.<br />
        <br />
        Rulebook Editing<br />
        80% complete.<br />
        <br />
        Script printing workflow for Prototype<br />
        10% complete.<br />
        <br />
        Print Review Prototypes<br />
        10% complete.<br />
        <br />
        Campaign editing.<br />
        20% complete.<br />
        <br />
        Skirmish and PvP Alpha Playtests<br />
        80% complete.<br />
        <br />
        Script printing workflow for Production Manufacturer<br />
        5% complete.<br />
        <br />
        Minimizing the number of components to minimize your final cost.<br />
        40% complete.<br />
        <br />
        Develop Facebook Ads and refresh introduction newsletter<br />
        10% complete.<br />
        <br />
        Kickstarter Page Assets (Stills, GIFs)<br />
        20% complete.<br />
        <br />
        Kickstarter Tiers<br />
        90% complete.<br />
        <br />
        Finalize Stretch Goals<br />
        70% complete.<br />
        <br />
        Determine Ad Spend / Platform Split<br />
        50% complete.<br />
        <br />
        Skirmish and PvP Beta Playtests<br />
        0% complete.<br />
        <br />
        NPC skill refresh<br />
        20% complete.<br />
        <br />
                    <div className={styles.center + " " + styles.tCenter}>

        <h2>New Art</h2>
        <ExportedImage
          src={snakePic}
          alt='Crag Serpent'
          width={0} height={500}
          sizes="100vw"
          style={{
            height: "auto",
            objectFit: "contain"
          }} />
        <br />
        Crag Serpent by Amanda Brack<br />

        <em>A crafty scalin that prefers the dark underbelly of rocky outcroppings.  When the time is right, it will leap, bearing down on its prey with its full weight and an unhinged jaw.  If naught goes awry, and it rarely will...there won&apos;t be need for a second bite.</em>
</div><br />
        If you are interested in playing the alpha version of the Campaign, Skirmish, or PvP, we would be glad to set something up with you sooner.  Feel free to send us an email or message on the Discord server!<br />
        <br />
        Until next time,<br />
        Paul Goodrich<br /><br />
<div className={styles.center + " " + styles.tCenter}>
        <h2>Community</h2>
        <p>
          Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> to chat with the community or ask questions.<br />
          Follow the game on <a href="https://www.facebook.com/Mana-Source-102398542746103%C2%A0">Facebook</a>. <br />
        </p>
        </div>
        <br />
        <p><em>
          To receive this update sooner along with some additional insider details, sign up for the email newsletter below!
        </em></p>
        <EmailSignup ctaText="Start your adventure!" />
        <br />
      </ArticleBlock>
    </ArticleTemplate >
  )
}

export default Article


