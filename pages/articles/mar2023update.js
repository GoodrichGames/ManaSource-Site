import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import ArticleTemplate from './../../components/Templates/ArticleTemplate';

const Article = () => {
  return <ArticleTemplate useImage={true}>
    <div>
      <ul>
        <li>
          <h3>March / April Update</h3>
          <div>
            <p>
              It&apos;s been a busy March, hope everyone is well!  Importantly, I ask that you share the teaser trailer with your friends who might like the game and ask them to sign up for the newsletter.  That is the best thing you can do to help this game come to market.  Appreciate it!  Onto the update!
            </p><br />
            <p>
              This time I&apos;m combining the March and April updates as there is more than I thought to re-work.  The good news is I have streamlined my card prototyping workflow so future balancing and card creation will be much faster than before.  I also had some broader playtesting this month I wasn&apos;t planning on, which was well received, but did require some additional balancing to smooth out the difficulty curve between scenarios.  I don&apos;t have any plans for a easier or harder difficulty tiers at the moment but if there&apos;s interest for that it&apos;s something I can look into.
            </p><br />
            <p>
              PvE scenarios are currently averaging about 2 hours of playtime each, which I feel is about optimal for a session.  As players learn the game this may drop to closer to 90 minutes.  So if you only ever played the PvE campaign with the current content, I would expect about 20-30 hours of playtime.  More if you play PvP or the replayable PvE modes.
            </p><br />
            <p>
              Last month included:<br />
              - First pass on rules, cards, components rework.
              <br />
              - Prototypes on campaign management tooling.
              <br />
              - Scenario 6 design.  This is less than my planned 2 due to higher per scenario word counts but it&apos;s been worth it to deliver high quality, engaging content.
              <br />
              - Playtesting for Scenario 3, 6, new components, and NPC characters.  Early feedback on scenario 6 was very good and possibly the best writing I&apos;ve done so far.
              <br />
              - Scenarios 1, 2, 3, 4, 5, 6, 7, 18 out of 21~ are playtest complete and fairly stable.
            </p><br />
            <h4>April</h4>
            <b>Goals for this month</b><br />
            - Schedule additional publisher meeting(s).  This is my top priority for this month.  If I wait too long, I may potentially write too much that may have to later majorly change.
            <br />
            - Continued core system changes, rulebook updates, campaign management tools.  Streamline out-of-the-box player experience.
            <br />
            - Complete development for Scenario 8.  My internal goal is still to complete 2 but realistically I think it will be one again this month, maybe 1.5.
            <br />
            <p>
              I&apos;ve included another Design Corner section below if you&apos;re interested.  Thank you for your support!
            </p><br />
            Until next time, <br />
            Paul Goodrich <br />
            <br />
            <h4>Design Corner</h4>
            This section is a behind the scenes look at some aspect of the design or release process that is on my mind.  Hopefully this helps a future designer someday.  Today&apos;s topic is Scenario design.
            <br /><br />
            I have some rules for myself when it comes to scenarios.  Many games are wildly successful without following any of these rules, but I&apos;m setting out to create something different.  For example, Gloomhaven focuses more on mechanics than story content.  Don&apos;t get me wrong, I love Gloomhaven, it&apos;s one of my favorite board games at over 500 hours played.  But I would describe the story more as light theming and some interesting decision making rather than compelling.  Out of all the characters in Gloomhaven, I remember our player characters, Hale, and Jekserra.  The character development of the NPCs was very limited.  The gameplay carried the game.<br /><br />I want Mana Source to not just have fun gameplay, but create engaging characters, places, and mechanics you&apos;ll be thinking about for years to come.
            <br /><br />
            Player actions and dialog must:<br />
            - Allow for a variety of backgrounds someone has created for their character.<br />
            - Allow for at least 2 significant choices, as long as those choices wouldn&apos;t completely derail the campaign.<br />
            <br />
            Characters must:<br />
            - Grow and change over the course of the campaign.<br />
            - Interact with each other, not just with the player.<br />
            - Comment, interject, make jokes, tease.  They should feel like real people with flaws, not props or means to an end.<br />
            - Allow the player characters agency.<br />
            <br />
            Scenarios must be:<br />
            - Unique.<br />
            - Progress the story.<br />
            - Feature different mechanics.<br />
            - Highlight the strengths of different party members.<br />
            - Feature a reason to replay the scenario and present some kind of optional additional challenge.<br />
            <br />
            Scenario 6 ended up at around 7000 words of total text.  So the text alone ends up about 20-24 hours for me to write spread across 2-4 hour blocks.  The remaining mechanic design, balancing, playtesting, etc takes roughly 15 hours additional for a first draft.
            <br />
            <br />
            Feel free to email us directly at <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me.</a>

            <p>
              Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> to chat with the community or ask questions.<br />
              Follow the game on <a href="https://www.facebook.com/Mana-Source-102398542746103%C2%A0">Facebook</a>. <br />
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
