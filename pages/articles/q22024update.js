import ArticleTemplate from './../../components/Templates/ArticleTemplate';
import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import ArticleBlock from './../../components/content/ArticleBlock/ArticleBlock';
import ExportedImage from "next-image-export-optimizer";
import hummingbearsPic from '../../public/images/articles/SaveTheHummingbears.png';
import styles from '../../components/Templates/BaseTemplate.module.scss';


const Article = () => {
  return (
    <ArticleTemplate useImage={true}>
      <ArticleBlock>
        Good afternoon!  Hope you&apos;re beating the summer heat with some excellent board gaming.
            <br /><br />
            Key Updates:
            <br /><br />
            - Campaign development is going very well.  I am writing at a steady pace and planning from the ending backward to ensure its going to end in a highly satisfying way.  I think we&apos;ve all seen far too many series where they &apos;Lost&apos; the plot.
            <br /><br />
            - We are planning to launch a public beta with a limited number of action cards and the first three scenarios available for free on Tabletop Simulator.  The alpha rulebook including PvP rules, the relevant art, and an editing pass on the first few scenarios is a necessary step to get this launched.  This may not make it in time for the end of Q3 but I&apos;ll let you know as soon as it&apos;s available.
            <br /><br />
            If you are interested in playing the alpha version of the campaign or PvP, we would be glad to set something up with you sooner.  Send us an email or message on the Discord server.
            <br /><br />
- Unfortunately we have realized a significant timeline issue that is going to prevent us from launching the Kickstarter by the end of the year.  Highly successful Kickstarters almost always launch with professional reviews.  These require manufactured prototypes to be sent out to reviewers months in advance.  So while I plan to complete the alpha version of the campaign by around the end of the year, the Kickstarter will have to launch a few months after in 2025.  More to come on that soon.
<br /><br />
- I will be at Dragoncon in Atlanta again this year.  Primarily to raise awareness of the poor plight of the Hummingbears.  Perhaps an upcoming t-shirt design?


            <br /><br />
            <div className={styles.center}>
              <ExportedImage
                src={hummingbearsPic}
                alt='Save the Hummingbears! text being eaten by a large Hummingbear'
                height="1"
                width="1"
                sizes="100vw"
                style={{
                  width: "50rem",
                  height: "auto",
                  objectFit: "contain"
                }} />
              
            </div>
            <br />
            
            <h4>Last few months of work included:</h4>
            - Scenario 9, 14, 15, 16 design.  This included bringing an exciting end to the second act and finalizing the direction of third and final act.<br />
            - Weekly new art.<br />
            - Logo tweaks.<br />
            - Rulebook creation.  This involved new UI element creation and a lot of revisiting how the rules are laid out.<br />
            - Skirmish (the replayable mode) ruleset.  I&apos;m leaning toward a progression-based system with increasingly challenging bosses.  One of my major focuses is making it easy to bring new players to the table who haven&apos;t played Mana Source before.<br />
            - New skill and equipment card designs.<br />
            - Playtesting for Scenario 1, 2, 14, 15, 16.  All are playtesting very well.<br />
            <br />

            <h2>Q3 2024 Goals</h2>
            - Complete development for Scenario 17, 18, 19.  Slightly rework scenario 20 which is already in early alpha.  This is probably the last scenario development update.  The campaign isn&apos;t &apos;complete&apos; at 20 but I want to leave the total number of scenarios beyond 20 a secret for release.
            <br /><br />
            - Finish the alpha version of the rulebook.  Glad to report our previous software issues have been corrected.
            <br /><br />
            - UI updates.  I&apos;m not fully satisfied with the enemy card iconography and layouts you may have seen in the How to Play video from late last year.  More to share on that soon.
            <br />
            <br />
            Until next time,<br />
            Paul Goodrich<br /><br />

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


