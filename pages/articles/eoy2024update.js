import ArticleTemplate from './../../components/Templates/ArticleTemplate';
import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import ArticleBlock from './../../components/content/ArticleBlock/ArticleBlock';
import ExportedImage from "next-image-export-optimizer";
import captainPic from '../../public/images/articles/TidestrikerCaptain.jpg';
import styles from '../../components/Templates/BaseTemplate.module.scss';


const Article = () => {
  return (
    <ArticleTemplate useImage={true}>
      <ArticleBlock>
            Happy new year everyone!  Let&apos;s jump into the updates.
            <br />
            <br />
            While it was my original intention to launch the Kickstarter at the end of the year, some development has taken longer than expected as the scope of the core product has increased.  Thus we had two choices, either to complete development after the campaign as many Kickstarter projects do, or to delay the campaign launch.
            <br />
            <br />
            Thankfully, since this is a indie project, we have the capability to delay.  We&apos;ll continue to send regular updates but the campaign launch date will not be announced until development (gameplay, art, playtesting) is fully complete.  We really appreciate your understanding here!
            <br />
            <br />
            What are some of the delays on our end?<br />
            - Due to scheduling conflicts, campaign playtesting is progressing slower than I would like.
            <br />
            - We decided that a polished rulebook and beta scenarios are very important for first impressions. The expanded rulebook is over 30 pages.  Much of the work has been ensuring players can learn and reference rules quickly.  After another round of edits these should be ready to release publicly.
            <br />
            - More in-depth skirmish rules and progression than originally planned.
            <br />
            - Bringing on new artists to speed up art production.  I&apos;m happy to announce one of these artists is <a href="https://www.amandabrack.art/">Amanda Brack!</a>  She&apos;ll be working on character art like the Tidestriker Captain you&apos;ll encounter early on in the campaign.
            <br /><br />
            <div className={styles.center + " " + styles.tCenter}>
              <ExportedImage
                src={captainPic}
                alt='Tidestriker Captain'
                width={0} height={500}
                sizes="100vw"
                style={{
                  height: "auto",
                  objectFit: "contain"
                }} />

            </div>
            <br />
            The other good news is that we&apos;ve expanded the amount of content included in the game with no additional cost!  We hope you enjoy the additional scenarios and the introduction of a new mechanic: <b>Attributes.</b>
            <br />
            <br />
            Attributes are behavior modifiers applied to enemies that may change your strategy in combat.  For example, an enemy with the Assassin attribute always targets the party member with the lowest health instead of following the regular aggro rules.  Shut down this enemy before it&apos;s too late!
            <br />
            <br />
            Or perhaps the enemy gains the <em>Focused attribute - When this entity is not targeted in a round, its action(s) deal +damage.</em>  Don&apos;t make the mistake of leaving this enemy alone or relying on overly defensive actions!
            <br />
            <br />
            If you are interested in playing the alpha version of the campaign or PvP, we would be glad to set something up with you sooner.  Send us an email or message on the Discord server.
            <br />
            <br />
            <h2>Q1 2025 Goals</h2>
            -  Complete campaign development and continue editing process.
            <br />
            - Release the public beta including rulebook.
            <br />
            - Finalize art schedule (we&apos;re about 70% complete on planned art).
            <br />
            - Campaign book layout design and editing.
            <br />
            Until next time,<br />
            Paul Goodrich<br /><br />

            <h4>Community</h4>
            <p>
              Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> to chat with the community or ask questions.<br />
              Follow the game on <a href="https://www.facebook.com/Mana-Source-102398542746103%C2%A0">Facebook</a>. <br />
            </p>
            <p><em>
              To receive this update sooner along with some additional insider details, sign up for the email newsletter below!
            </em></p>
            <br />
            <EmailSignup ctaText="Start your adventure!" />
            <br />
      </ArticleBlock>
    </ArticleTemplate >
  )
}

export default Article


