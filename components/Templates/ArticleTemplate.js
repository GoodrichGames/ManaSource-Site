import { useRouter } from 'next/router'
import React from 'react'
import posts from '../../metadata/articlemeta'
import BaseLayout from './BaseTemplate'
import navStyles from '../Structural/Navigation/Navigation.module.scss'

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
