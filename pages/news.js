import BaseLayout from '../components/Templates/BaseTemplate'
import PostList from '../components/content/ArticleList/ArticleList'
import ContentSection from './../components/content/ContentSection/ContentSection';
import ContentItem from './../components/content/ContentSection/ContentItem';

export default function News() {
  return (
    <BaseLayout title="News" description="Latest Mana Source updates, news, balance changes">
      <ContentSection>
        <ContentItem>
          <PostList category="all" />
        </ContentItem>
      </ContentSection>
    </BaseLayout>
  )
}
