import { useRouter } from 'next/router'
import posts from '../../metadata/articlemeta'
import navStyles from '../Structural/Navigation/Navigation.module.scss'
import BaseLayout from './BaseTemplate'
import styles from './BaseTemplate.module.scss'

const ArticleTemplate = ({ children, useImage }) => {
  const router = useRouter()
  const postData = posts.find(post => post.link === router.pathname)

  return <BaseLayout title={postData.title} image={useImage && postData.image} isArticle={true} classes={navStyles.article}>
    <section>
      {children}
    </section>
  </BaseLayout>
}

export default ArticleTemplate;
