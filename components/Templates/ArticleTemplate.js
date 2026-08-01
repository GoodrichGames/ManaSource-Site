import { useRouter } from 'next/router'
import posts from '../../metadata/articlemeta'
import navStyles from '../Structural/Navigation/Navigation.module.scss'
import BaseLayout from './BaseTemplate'
import styles from './BaseTemplate.module.scss'
import { getArticleSchema, getBreadcrumbSchema } from '../../metadata/structureddata'

const ArticleTemplate = ({ children, useImage, title, date, description }) => {
  const router = useRouter()
  const postData = posts.find(post => post.link === router.pathname)
  const articleTitle = title || postData?.title
  const articleDate = date || postData?.date
  const articleDescription = description || postData?.description
  const articleImage = useImage && postData?.image
  const articleLink = postData?.link || router.pathname
  const articleSchema = getArticleSchema({
    title: articleTitle,
    description: articleDescription,
    image: articleImage,
    link: articleLink,
    date: articleDate,
    categories: postData?.categories,
  })
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'News', url: '/news' },
    { name: articleTitle, url: articleLink },
  ])

  return <BaseLayout
    title={articleTitle}
    date={articleDate}
    description={articleDescription}
    image={articleImage}
    isArticle={true}
    classes={navStyles.article}
  >
    <script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema),
      }}
    />
    <script
      id="breadcrumbs-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
    <section>
      {children}
    </section>
  </BaseLayout>
}

export default ArticleTemplate;
