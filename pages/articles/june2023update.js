import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import ArticleTemplate from './../../components/Templates/ArticleTemplate';
import ExportedImage from 'next-image-export-optimizer';
import prefix from '../../utils/prefix';

const Article = () => {
  return <ArticleTemplate useImage={true}>
    <div>
      <ul>
        <li>
          <h3>May / June Update</h3>
          <div>
            Lot of good work came from this two month period but I also made a major mistake when it came to the time estimate of Scenario 8.  It&apos;s a good scenario now that it&apos;s complete, but it took much longer to put together than I originally planned for.  I&apos;ll talk about further it in the design corner below if you&apos;re interested.
            <br />
            <h4>On Publishing</h4>
            I am leaning heavily toward a Kickstarter at this point in time rather than finding a publisher.  The primary reason is to retain creative control over the campaign.  I&apos;ve been working on this now for over 6 years and it would be difficult to turn that over to someone else.
            <br /><br />
            This does mean a few things, alpha visual design becomes more important than it has been previously and there is more work for me personally to decide between a wide range of product choices.  The bright side is the game may release sooner than through a publisher and with more content included in the base game.
            <br /><br />

            Last 2 months included:<br />
            - New Action Card and card back designs, game board design (3 iterations).
            - Project timeline and task tracking via Jira.  Aiming for a Summer 2024 Kickstarter.<br />
            - NPC deck rework, Illusionist primary rework, round steps rework.<br />
            - Rulebook updates (ongoing).<br />
            - You can now follow us on Board Game Geek !<br />
            - Scenario 8, 9 design.  Outlining the rest of the story.<br />
            - Playtesting for Scenario 4, 5, 8, new components.<br />
            - Scenarios 1, 2, 3, 4, 5, 6, 7, 8, 18 out of 21~ are playtest complete and fairly stable.
            <br />
            <br />
            Preview of the new Action Card design (not final).<br /><br/>
            <ExportedImage src={prefix + '/images/cards/W-Focused-Shot.webp'} alt='Focused Shot - a Warden skill card' width="100%" height="50%" layout="responsive" objectFit="contain" priority={true} />
            <br/>
            These are the cards that will make up your hand.  Focused Shot is a 2 Mana attack card with a recharge of 3.<br />
            While it deals above average damage, there&apos;s a high risk if the opponent is not Stunned or otherwise occupied.<br />
            <br />
            New round reference card design.  Featuring art by the talented Nele Diel of course.<br /><br/>
            <ExportedImage src={prefix + '/images/cards/Round-Reference-Card.webp'} alt='Round reference steps' width="100%" height="50%" layout="responsive" objectFit="contain" priority={true} />
            <h4>July / August Goals</h4>
            - Complete development for Scenario 9, 10, 11.
            <br />
            - Obtain component quotes from manufacturers.  My preferred goal is to offer different entry price points with some creative discounts through digital experiences.
            <br />
            - Obtain art quotes from design firms.
            <br />
            - Streamline out-of-the-box player experience in advance of 1-2 blind playtests.
            <br /><br/>
            Thank you for your support! <br />
            <br />
            Until next time, <br />
            Paul Goodrich <br />
            <h4>Design Corner</h4>
            This section is a behind the scenes look at some aspect of the design or release process that is on my mind.  Hopefully this helps a future designer someday.  Today&apos;s topic is Estimations.
            <br /><br />
            Estimations are notoriously difficult to do correctly, even across different industries.  Why is that?
            <br />
            You can often divide tasks into 4 categories of knowledge.
            <br /><br />
            1. What you know.  The time to accomplish this task is well understood.  You are able to draw on past experience.
            <br /><br />
            Example: Writing a scenario with 5000-7000 words takes around 40 hours.
            <br /><br />
            2. What you don&apos;t know you know.  The task is easier to accomplish than you expected.  This rarely happens but helps make up for a small amount of extra time spent on #3 and #4.
            <br /><br />
            Example: You&apos;re able to streamline one of the locations in a scenario because of other decisions you made along the way.  Great!
            <br /><br />
            3. What you know you don&apos;t know.  The task is complex or the solution largely unknown.  Estimates for this category of task vary and can come in way under or over budget depending on the actual time spent.
            <br /><br />
            Example: Often scenario mechanics and bonus designs fall into this category.  Balancing numbers should be tight for a scenario to feel appropriately challenging but not overly punishing.
            <br /><br />
            4. What you don&apos;t know you don&apos;t know.  The most dangerous category as it is not captured in an estimate at all.  The way you plan for this category is reasonable additional buffer time beyond the tasked estimate.  This may range from 20-100% buffer time depending on your familiarity with the task and its complexity.  This category should become smaller over time as you gain more experience in the tasks and estimations.
            <br /><br />
            Example: Necessary narrative clues and exposition, puzzles, and a growing party size contribute to longer narratives per location than expected.  You write twice as much as normal for scenario 8.
            <br />
            <h4>Community</h4>
            Feel free to email us directly at <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me.</a>

            <p>
              Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> to chat with the community or ask questions.<br />
              Follow the game on <a href="https://boardgamegeek.com/boardgame/391828/mana-source">Board Game Geek</a> and <a href="https://www.facebook.com/Mana-Source-102398542746103%C2%A0">Facebook</a>. <br />
            </p>
            <br />
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


