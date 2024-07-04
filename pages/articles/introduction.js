
import ArticleTemplate from './../../components/Templates/ArticleTemplate';
import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import YoutubeEmbed from './../../components/content/YoutubeEmbed/YoutubeEmbed';
import Link from 'next/link';

const Article = () => {
  return <ArticleTemplate useImage={true}>
    <div>
      <ul>
        <li>
          <h3>About Mana Source</h3>
          <div>
            <p>
              Mana Source is an upcoming adventure board game for 1-4 players.
              You&apos;ll need to rely on your wits to survive.  It features five playable primary
              classes, one exclusively secondary class, and over 280 unique action cards in the release set.
            </p><br />
            <p>Experiment, strategize, and mindgame to reduce your opponent&apos;s health to zero and
              win!</p>
            <br />
            Visit our <Link href='/'>homepage</Link> page to learn more.
            <br /><br />
            <YoutubeEmbed videoId="h9tHSCE1T84" width="900" height="508" isAutoplay={false} />
            <br />
            <EmailSignup ctaText="Start your adventure!"/>
          </div>
        </li>
      </ul>
    </div>
  </ArticleTemplate >
}

export default Article
