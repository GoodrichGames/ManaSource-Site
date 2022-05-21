import BaseLayout from '../components/Templates/BaseTemplate'
import PostList from '../components/content/ArticleList/ArticleList'

export default function News() {
  return (
    <BaseLayout title="News" description="Latest Mana Source updates, news, balance changes">
      <PostList category="all" />
    </BaseLayout>
  )
}
