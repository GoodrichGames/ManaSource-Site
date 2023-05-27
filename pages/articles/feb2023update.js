import EmailSignup from '../../components/content/EmailSignup/EmailSignup';
import ArticleTemplate from '../../components/Templates/ArticleTemplate';

const Article = () => {
  return <ArticleTemplate useImage={true}>
    <div>
      <ul>
        <li>
          <h3>February Update</h3>
          <div>
            <p>
              Short but important update this time.
            </p>
            <br />
            <p>
              I did get a chance to meet with a publisher and received some excellent feedback.  The biggest takeaway I had was on high projected cost of the project, particularly upfront costs on art.  So I do need to spend some significant time this month on core changes.
            </p><br />
            <p>
              The good news is that it will not heavily impact existing scenarios and that the core gameplay seems well positioned overall for the industry.
            </p><br />
            <p>
              The less good news is that I will need to spend a few weeks refactoring and rewriting some of the rulebook, skills, components, etc.  This means that I expect to complete 1 scenario during February instead of 2.
            </p>
            <p>
              I have also received feedback twice now from folks in the industry that they feel the name Mana Source is too generic.  While I think some of the best board games in the industry have generic names, I have taken this to heart and you may see a name change coming in the next few months.
            </p><br />
            <p>
              Last month included:<br />
              - Playtesting for Scenario 4, 5 and NPC characters.  Early feedback on these scenarios is very good.<br />

              - Scenarios 1, 2, 3, 4, 7, 18 out of 21~ are playtest complete and fairly stable.  5 will require some minor changes to make it stable.<br />

              - Facebook page setup. Follow it and share with friends at will!  <a href="https://www.facebook.com/Mana-Source-102398542746103">Official Facebook page</a>.  The newsletter is still the fastest way to receive updates.
            </p>
            <h4>February</h4>
            <p>
              Goals for this month<br />
              - Core system changes, rulebook updates, campaign management tools.<br />

              - Complete development for Scenario 6.<br />

              - Schedule publisher meeting(s) once publisher feedback is addressed.<br />
            </p><br />
            <p>
              Until next time,<br />
              Paul Goodrich
            </p><br />
            
            Feel free to email us directly at goodrichgames@pm.me.<br />
            <p>
              Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> to chat with the community or ask questions.<br />
              Follow the game on <a href="https://www.facebook.com/Mana-Source-102398542746103%C2%A0">Facebook</a> <br />
            </p>
           
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
