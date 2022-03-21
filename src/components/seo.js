import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, author, keywords, siteUrl, twitterusername }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    defaultAuthor,
    defaultKeywords,
    defaultSiteUrl,
    defaultTwitter,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author: author || defaultAuthor,
    url: `${siteUrl}${pathname}`,
    keywords: keywords || defaultKeywords,
  }

  return (
    <Helmet title={seo.title} titleTemplate={defaultTitle}>
        <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
        <meta name="google-site-verification" content="3Pc3PsNa2zNY7a2gE0JISrDYD05voB4aCaCQZKmuCVA" />

        <meta name="description" content={seo.description} />
        <meta name="author" content={seo.author} />
        <meta name="keywords" content={seo.keywords} />

        <meta property="og:type" content="article" />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
            <meta property="og:description" content={seo.description} />
        )}

        <meta name="twitter:card" content="summary_large_image" />
        {defaultTwitter && (
            <meta name="twitter:creator" content={defaultTwitter} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
            <meta name="twitter:description" content={seo.description} />
        )}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  keywords: PropTypes.string,
  siteUrl: PropTypes.string,
  twitterUsername: PropTypes.string,
}

SEO.defaultProps = {
    title: null,
    description: null,
    author: null,
    keywords: null,
    siteUrl: null,
    twitterUsername: null,
}

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultAuthor: author
        defaultKeywords: keywords
        defaultSiteUrl: siteUrl
        defaultTwitter: twitterUsername
      }
    }
  }
`
