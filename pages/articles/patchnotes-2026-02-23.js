import ArticleTemplate from './../../components/Templates/ArticleTemplate';
import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import PatchRecord from './../../components/content/PatchRecord/PatchRecord';
import patchData from '../../metadata/patchdata';
import ArticleBlock from './../../components/content/ArticleBlock/ArticleBlock';

const Article = () => {
  const id = 'patchnotes-2026-02-23';
  const record = patchData.find(p => p.id === id) || { entries: [], previous: [] };

  return <ArticleTemplate useImage={false} title={record.title} date={record.date} isArticle={true}>
    <ArticleBlock>
      <h1>{record.title}</h1>
      <div>
        <p>These patchnotes cover balance updates. They indicate which actions you should update with the included sticker sheets and which actions have previously received updates.</p>

        <h2>Overview</h2>
        <p>We are shipping small balance adjustments to improve gameplay clarity and reduce unhealthy loops. Changes affect action costs, effects, and recharge values. Follow the instructions in the <strong>Actions To Update</strong> section to update your physical cards or reference sheets.</p>

        <h2>Actions To Update</h2>
        <ul>
          {record.entries.map(entry => (
            <li key={entry.actionId}>
              <strong>{entry.name}</strong> — <PatchRecord changes={entry.changes} inline={true} />.
              <br />{entry.notes}
            </li>
          ))}
        </ul>

        <h2>How to Apply These Changes</h2>
        <ol>
          <li>Locate the action card.</li>
          <li>Replace the Cost / Effect / Recharge numbers with the new values shown above using the sticker sheet.</li>
        </ol>

        <h2>Community & Feedback</h2>
        <p>Join the Discord to discuss changes and submit playtest feedback. We will monitor balance analytics and may issue follow-up patchnotes indicating further changes.</p>

        <br />
        <EmailSignup ctaText="Stay informed" />
      </div>
    </ArticleBlock>
  </ArticleTemplate>
}

export default Article
