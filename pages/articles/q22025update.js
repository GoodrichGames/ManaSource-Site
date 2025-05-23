import ArticleTemplate from './../../components/Templates/ArticleTemplate';
import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import ExportedImage from "next-image-export-optimizer";
import andresPic from '../../public/images/articles/20SmallRes.jpg';
import rulebookToC from '../../public/images/articles/RulebookTOC.PNG';
import rulebookOnePic from '../../public/images/articles/Rulebookpreview.PNG';
import rulebookTwoPic from '../../public/images/articles/Rulebookpreview2.PNG';
import campaignPreviewOnePic from '../../public/images/articles/CampaignBookPreview.PNG';
import playerBoxPic from '../../public/images/articles/PlayerBoxPic.jpg';
import styles from '../../components/Templates/BaseTemplate.module.scss';


const Article = () => {
  return <ArticleTemplate useImage={true}>
    <div>
      <ul>
        <li>
          <h3></h3>
          <div className={styles.maxW960 + " " + styles.center}>
            As many of you have heard by now, the U.S. administration has implemented tariffs on China as well as a number of other countries.  Everyone can breathe a sigh of relief as I finally have some information and it&apos;s not as bad as you might think!
            <br /><br />
            <h4>Tariffs</h4>
            1. Our manufacturing partner has the ability to manufacture the game from either China or Vietnam.  If tariffs on board games get as high as they did again on China, we will look to manufacture in Vietnam in order to minimize the cost passed on to you.  At this time there is manufacturer in the U.S. with a reasonable cost for high quality mass production.
            <br />
            <br />
            2. We have a few benefits as an indie company versus the big brand companies.  We primarily relies on Kickstarter and direct sales.  There is no retail middle-man that we have to share revenue with.  Further, since this initial run is a passion product, we&apos;re not looking for a % return on investment, but to put the product in your hands.
            <br />
            <br />
            3. Due to the ongoing volatility of the situation, the campaign manager will separately require a tariff cost at the time of import, in the same way that our EU friends often require a VAT payment at the time of their import.  To give you an idea of how swingy it has been, this could range between $2 - $25 (Vietnam & highest China tariff that was in effect).  This will be charged at cost only and I will keep you updated on how we&apos;re looking.
            <br />
            <br />
            4. Thank you for your patience as I waited for more information before sending this update!
            <br />
            <br />
            <h4>Rulebook Preview</h4>
            The rulebook is around 80% complete.  The main items delaying public release are the creation of UI assets for secondary components and additional Skirmish playtesting.  Once we release it publicly, it inevitably becomes a reflection of the final project in some people&apos;s minds, even if there are a lot of changes still to be made.
            <br /><br />
            <div className={styles.center + " " + styles.tCenter}>
<ExportedImage
                src={rulebookToC}
                alt='Rulebook table of contents page'
                width={0} height={500}
                sizes="100vw"
                style={{
                  height: "auto",
                  objectFit: "contain"
                }} />

            </div>
            <br />
            It is currently 42 pages, covering the 3 game modes, with very large text.  We would like to shrink down the text and asset size to save you money on printing.  For example, we will likely condense these 4 pages to 3 pages.
            <br />
            <br />
            <ExportedImage
                src={rulebookOnePic}
                alt='Rulebook title page'
                width={0} height={500}
                sizes="100vw"
                style={{
                  height: "auto",
                  objectFit: "contain"
                }} />

              <ExportedImage
                src={rulebookTwoPic}
                alt='Rulebook page 2'
                width={0} height={500}
                sizes="100vw"
                style={{
                  height: "auto",
                  objectFit: "contain"
                }} />
            <br />
            <br />
            I&apos;m also including a bonus preview of the inside of the Adventure Book which is over 125,000 words and 200 pages so far!  That&apos;s about as long as a modern fantasy novel.  I love our art alongside the scenario text!
             <br />
             <br />
             <div className={styles.center + " " + styles.tCenter}>
             <ExportedImage
                src={campaignPreviewOnePic}
                alt='Campaign book preview page'
                width={0} height={500}
                sizes="100vw"
                style={{
                  height: "auto",
                  objectFit: "contain"
                }} />
                </div>
                <br />
            If you are interested in playing the alpha version of the campaign or PvP, we would be glad to set something up with you sooner.  Send us an email or message on the Discord server.
            <br />
            <br />
            <div className={styles.center + " " + styles.tCenter}>
              <h4>New Art</h4>

              <ExportedImage
                src={andresPic}
                alt='Andres Elya'
                width={0} height={500}
                sizes="100vw"
                style={{
                  height: "auto",
                  objectFit: "contain"
                }} />
              <br />
              <em>Andres Elya - Warden of Timbatia by <a href="amandabrack.art">Amanda Brack</a></em>
            </div>
            <br />
            One of your several companions on the sprawling journey above ground.  Andres has the ability to influence flora, pheromones, and by extension, animal behavior.  Wardens specialize in a mixture of action types, keeping their opponents guessing as to what comes next.
            <br />
            <br />
            <h4>Development Progress</h4>
            20+ scenarios written and playtested.  The end is in sight!<br/>
            240 Action Cards, 40 per class. 99% complete.<br/>
            129 Equipment pieces.<br/>
            Finalized art schedule.<br/>
            UI asset creation for the rulebook and adventure book.  The colors and typography will become more consistent as these elements are finalized.<br/>
            Minimizing the number of components to minimize your final cost.<br/>
            Skirmish playtesting is under way.<br/>

            <div className={styles.center + " " + styles.tCenter}>
              <ExportedImage
                src={playerBoxPic}
                alt='Example of a player box containing a large golem.'
                width={0} height={500}
                sizes="100vw"
                style={{
                  height: "auto",
                  objectFit: "contain"
                }} />
              <em>Personally I&apos;m looking forward to these sweet player boxes in person.</em>
            </div>
            <br />
            <h2>Q3 2025 Goals</h2>
            -   Continue editing process.
            <br />
            - Release the public beta including rulebook (this is waiting on editing).
            <br />
            - Complete all initial UI Assets.
            <br />
            - Kickstarter planning.
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
          </div>
        </li>
      </ul>
    </div>
  </ArticleTemplate >
}

export default Article


