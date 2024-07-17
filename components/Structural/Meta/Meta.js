import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import meta from '../../../metadata/pagemeta'

const Meta = ({ name, description, image = meta.shareImage, isArticle }) => {
  const baseUri = 'https://www.manasourcegame.com'
  const router = useRouter()
  const link = baseUri + router.pathname

  const title = name;

  return <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="canonical" href={link} />
    <meta charSet="utf-8"></meta>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
    <meta name="description" content={description} />
    <meta name='application-name' content={title} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={link} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta property="og:title" content={title} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content={meta.name} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={link} />
    { isArticle && <meta property="og:type" content="article" /> }
  </Head>
}

export default Meta
