import ArticleTemplate from './../../components/Templates/ArticleTemplate';
import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import ExportedImage from "next-image-export-optimizer";
import noAIPic from '../../public/icons/NoAI.png';
import wildwoodPic from '../../public/images/articles/Wildwood-Behemoth.jpg';
import styles from '../../components/Templates/BaseTemplate.module.scss';


const Article = () => {
  return <ArticleTemplate useImage={true}>
    <div>
      <ul>
        <li>
          <h3></h3>
          <div className={styles.maxW960 + " " + styles.center}>
            Happy spring everyone!  I&apos;ve decided to keep the updates fairly short until we get closer to kickstarter launch.  Development is on track so we&apos;ll see how the rest of 2024 progresses.
            <br /><br />
            I&apos;ve completely redesigned the game&apos;s website, check it out and bookmark it as this will be used for a lot to come!
            <br /><br />
            <h2>Goodrich Games Statement on the Industry Use of AI</h2>
            With the advent of generative machine learning models (popularly called AI) - there&apos;s a lot of concern in the board game community about publishers not disclosing its use or where the training data is coming from.

I&apos;m proud to commit to no AI usage in .  All art and writing will be human-created.
            <br /><br />
            <div className={styles.thirdW + " " + styles.maxW500 + " " + styles.tCenter + " " + styles.center}>
              <ExportedImage
                src={noAIPic}
                alt='No AI'
                height="1"
                width="1"
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
            <h2>Art Update</h2>
            My favorite part of this year so far has been the art.  Nele is working very diligently and I&apos;m happy to share one of the enemies you may fight early on in the campaign.  Let us know what you think!
            <br />
            <br />
            <div className={styles.thirdW + " " + styles.center + " " + styles.tCenter}>
            <ExportedImage
                src={wildwoodPic}
                alt='Giant bark filled creature stomping through the woods surrounded by fireflies.'
                width={0} height={500}
                priority={true}
                sizes="100vw"
                style={{
                  objectFit: "contain",
                }} />
            <br />
            <i>The Wildwood Behemoth by Nele Diel</i>
            </div>
            <br />
            <h4>Last few months of work included:</h4>
            - Scenario 12, 13, 14, 15 design.  Though these are taking a while to write, it&apos;ll be worth it!<br />
            - Weekly new art.<br />
            - Website redesign.<br />
            - Balance pass on Knight skills and new skill design.<br />
            - New equipment card designs (up to almost 100 now) and balancing.<br />
            - Playtesting for Scenario 10, 11, 12, 13.<br />
            <br />

            <h2>Q2 2024 Goals</h2>
            - Complete development for Scenario 14, 15, 16.
            <br /><br />
            - Start laying out the rulebook and scenario book.  Progress on releasing the scenarios online for free has stalled due to difficulties with the software we were using.  I plan to revisit this in Q2 as I want first impressions to be strong, even in alpha.
            <br /><br />
            - Additional equipment development.  These enable different playstyles in the PvE campaign and will likely act as power-ups in the replayable mode.
            <br />
            <br />
            Until next time,<br />
            Paul Goodrich<br /><br />

            <p><em>
              To receive this update sooner along with some additional insider details, sign up for the email newsletter below!
            </em></p>
            <EmailSignup ctaText="Start your adventure!" />
            <br />
          </div>
        </li>
      </ul>
    </div>
  </ArticleTemplate >
}

export default Article


