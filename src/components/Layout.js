import React from 'react'

import { Helmet } from 'react-helmet'

import "../assets/css/main.css"


const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />

        <script src="../assets/js/scrollreveal.min.js" />       
        <script src="../assets/js/swiper-bundle.min.js" />
        <script src="../assets/js/mixitup.min.js" />       
        <script src="../assets/js/main.js" />       
      </Helmet>
      
        { children }
    </React.Fragment>
  )
}

export default Layout