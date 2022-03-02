import React from 'react'

import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

import "../assets/css/main.css"


const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />

    
        <script src={withPrefix("/js/main.js")} />    
      </Helmet>
      
        { children }
    </React.Fragment>
  )
}

export default Layout