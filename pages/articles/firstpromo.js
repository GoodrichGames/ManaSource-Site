
import ArticleTemplate from './../../components/Templates/ArticleTemplate';
import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import YoutubeEmbed from './../../components/content/YoutubeEmbed/YoutubeEmbed';
import ArticleBlock from './../../components/content/ArticleBlock/ArticleBlock';

const Article = () => {
    return (
    <ArticleTemplate useImage={true}>
      <ArticleBlock>
          <div>
            <p>
              Today we released a new teaser trailer and I&apos;m pretty excited with how it turned out.  You can check it out below!
            </p>
            <br />
            <YoutubeEmbed videoId="h9tHSCE1T84" width="900" height="508" isAutoplay={false} />
            <br />
            <p>
              <b>Actively seeking a publisher! Contact me at <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me</a>.</b>
            </p>
            <EmailSignup ctaText="Start your adventure!"/>
          </div>
      </ArticleBlock>
    </ArticleTemplate >
    )
}

export default Article
