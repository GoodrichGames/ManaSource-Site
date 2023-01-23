import ExportedImage from "next-image-export-optimizer";
import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import ArticleTemplate from './../../components/Templates/ArticleTemplate';
import prefix from '../../utils/prefix';

const Article = () => {
  return <ArticleTemplate useImage={true}>
    <div>
      <ul>
        <li>
          <h3>January 2023 Update</h3>
          <div>
            <p>
              Happy new year everyone!
            </p>
            <p>
              I hope you had a relaxing and warm Christmas, Hanukkah, or other holiday you celebrate with friends and family.<br /><br />
              December included:<br />
              - Playtesting for Scenario 3 and NPC characters.  NPC characters are featured prominently in the story and optional as party members.  They are primarily used as party members for Solo players, to avoid having to actively manage multiple characters like other PvE games do, but can also be used for 2 or 3 player counts.  I am still playtesting the amount of flexibility and management for these characters to feel like they act on their own, but not in an unhelpful or time consuming way.
              <br />
              - Scenario 4 development.  Scenarios 1, 2, 3, 7, 18 out of 21~ are playtest complete and fairly stable.  I am aiming to develop at least 1 scenario every 2 weeks without additional support.
              <br />
              - New Art including the piece below.
            </p>
            <br />
            <ExportedImage src={prefix + '/images/timbatia-small.webp'} alt='Large tree growing out of rock under the moonlight' width="100%" height="50%" layout="responsive" objectFit="contain" priority={true} />
            <br />
            <p><em>
              The very top of the Warden city of Timbatia.  Most of the tree extends underground into a vast cavern where it is interwoven with homes, businesses, and a mana well at the base.  The Timbati and growing influx of refugees settle for crowding, few food options, and dim lighting over being hunted down by Knight factions in their endless wars.
            </em></p><br />
            <p>
              January is publisher contact month.  It&apos;s really starting to feel like the culmination of about 6 years of effort.  So far, I have 1 meeting scheduled the week of the 23rd so a large part of this month is sending emails and making sure I have all my Wrelkras in a row.  Hoping for more meetings scheduled soon.
              <br /><br />
              Once I start initial publisher conversations and ideally get a commitment, I will know much more what is finalized versus still in progress. Until then, names, designs, images, and plans are all subject to drastic change.  I.e. I want to preview classes, abilities, skills, etc with you but much needs to wait.
              <br /><br />
              <p>
                <u>Goals for this month</u>
                <br />- Complete development for Scenarios 4 and 5.
                <br />- Set up and attend publisher meetings.  This feedback will determine so much of our next steps and focus.
                <br />- Take questions from the community and get some more details on the website that I feel able to share.
              </p>
              Thank you all for being a part of this game and process.  I&apos;m really excited about bringing it to you, in whatever form it takes.
              <br /><br />
              Until next time,<br />
              <em>Paul Goodrich</em>
            </p>
            <br />
            <p>
              Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> to chat with the community or ask questions.  Other Social Media is coming soon. <br />
              <b>Actively seeking a publisher! Contact me at <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me</a>.</b>
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
