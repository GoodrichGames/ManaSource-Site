import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import ArticleTemplate from './../../components/Templates/ArticleTemplate';
import ExportedImage from 'next-image-export-optimizer';
import prefix from '../../utils/prefix';
import ContentSection from '../../components/content/ContentSection/ContentSection';
import ContentItem from './../../components/content/ContentSection/ContentItem';
import Container from './../../components/content/Container/Container';
import styles from '../../components/Templates/BaseTemplate.module.scss'

const Article = () => {
  return <ArticleTemplate useImage={true}>
    <div>
      <ul>
        <li>
          <h3>End of 2023 Update</h3>
          <div>
            What a year!  12 story-focused scenarios completed.  That&apos;s about 75,000 words in addition to the scenario, skill, equipment, and enemy design.  I feel very positive about where development is at.  Doubling the amount of detail in each scenario and pivoting to crowdfunding to ensure a memorable experience was worth it.
            <br /><br />
            With a manufacturing quote in-hand, I feel more confident in stating publicly the base game with 20 scenarios, replayable PvE and PvP modes, and 240 player skills is targeted for a $60-70 price range for the Kickstarter.  Let&apos;s hope the materials, shipping, etc stay consistently priced over the next year to make that happen.
            <br /><br />
            In addition, I&apos;m pleased to announce the wonderful Nele Diel will produce the majority of art for Mana Source.  Very excited to share more of that with you soon.
            <br /><br />
            Finally, I&apos;ve released a gameplay basics overview.  This video covers everything you need to know to start playing Mana Source and does not contain any story or challenge spoilers.  My hope is that you find the system easy to learn.  It&apos;s important to note that these are just the basics, much of the meat of the game is in skill execution, building out your character, managing aggro, solving puzzles, and so on.  Let us know what you&apos;re looking forward to or want to know more about on our Discord.
            <br/><br/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jnfqC_cbxvg?si=A45uegKEV9bfFeHT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br /><br />
            If you have not yet, it would help us out quite a bit if you can follow and wishlist us on <a href="https://boardgamegeek.com/boardgame/391828/mana-source">Board Game Geek.</a>
            <br />
            <h5>Last 2 months of work included</h5>
            - Major balance pass on all skills - these are close to release ready.  Playtesting will follow to confirm. <br />
            - Scenario 11, 12, 13 design.  We&apos;re getting to the meat of the campaign with a ramp up in difficulty and unique mechanics per scenario. <br />
            - New equipment card designs (15~) and balancing. <br />
            - Obtained production and marketing quotes. <br />
            - Kickstarter planning. <br />
            - Gameplay video. <br />
            - Playtesting for Scenario 1, 6, 8, 9, 10, 11. 10 and 11 required some minor revisions I am testing now. <br />
            <br />

            <h4>Early 2024</h4>
            - Complete development for Scenario 13, 14.
            <br /><br />
            - Make early campaign gameplay available publicly on Tabletop simulator for free.
            <br /><br />
            - Additional equipment development.  Over 80 items are designed so far and currently undergoing playtesting.
            <br /><br />
            I hope you&apos;re able to enjoy some quality time with your family and friends during this season.  Sharing love is one of the most important things we can do.  Thank you for your support and see you in the next year!
            <br />
            <br />
            Until next time,<br />
            Paul Goodrich<br /><br />

            <p><em>
              To receive this update sooner along with some additional insider details, sign up for the email newsletter below!
            </em></p>
            <EmailSignup ctaText="Start your adventure!" />
          </div>
        </li>
      </ul>
    </div>
  </ArticleTemplate >
}

export default Article


