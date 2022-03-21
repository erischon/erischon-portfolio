import React from 'react'

import SEO from "./seo"
import { Helmet } from 'react-helmet'

import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <SEO />
        { children }
    </React.Fragment>
  )
}

export default Layout