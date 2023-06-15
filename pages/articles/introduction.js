
import ArticleTemplate from './../../components/Templates/ArticleTemplate';
import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import YoutubeEmbed from './../../components/content/YoutubeEmbed/YoutubeEmbed';

const Article = () => {
  return <ArticleTemplate useImage={true}>
    <div>
      <ul>
        <li>
          <h3>About Mana Source</h3>
          <div>
            <p>
              Mana Source is an upcoming competitive living card game (LCG) for 1-4 players.
              It
              focuses around arena-style combat to battle for control of Mana
              Wells scattered
              throughout the mysterious world of Kainan. It features five playable primary
              classes,
              one exclusively secondary class, and over 300 unique cards in the release set.
            </p>
            <p>Experiment, strategize, and mindgame to reduce your opponent&apos;s health to zero and
              win!</p>
            <br />
            <p>Playtime: 20-60 minutes</p>
            <p>Players: 1-4</p>
            <p>Ages: 13+</p>
            <br />
            <YoutubeEmbed videoId="h9tHSCE1T84" width="900" height="508" isAutoplay={false} />
            <br />
            <p>
              <b>Actively seeking a publisher! Contact me at <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me</a>.</b>
            </p>
            <EmailSignup ctaText="Start your adventure!"/>
          </div>
        </li>
      </ul>
    </div>
  </ArticleTemplate >
}

export default Article
