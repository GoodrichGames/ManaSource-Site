import { useRouter } from 'next/router'
import React from 'react'
import posts from '../../metadata/articlemeta'
import styles from './ArticleTemplate.module.scss'
import BaseLayout from './BaseTemplate'

const ArticleTemplate = ({ children, useImage }) => {
  const router = useRouter()
  const postData = posts.find(post => post.link === router.pathname)

  return <BaseLayout title={postData.title} image={useImage && postData.image} isArticle={true}>
    <section>
      {children}
    </section>
  </BaseLayout>
}

export default ArticleTemplate;
