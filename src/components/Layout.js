import React from 'react'

import { Helmet } from 'react-helmet'

import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
        <meta name="google-site-verification" content="3Pc3PsNa2zNY7a2gE0JISrDYD05voB4aCaCQZKmuCVA" />
        <title>Eri Schön Portfolio</title>
      </Helmet>
      
        { children }
    </React.Fragment>
  )
}

export default Layout