import React from "react"
import Layout from "../components/Layout"

import Header from "../components/Header"
import Home from "../components/Home"
import About from "../components/About"
import Skills from "../components/Skills"
import Work from "../components/Work/Work"
import Testimonial from "../components/Testimonial"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


const IndexPage = () => {
  return (
    <Layout>
    
        <Header />
        
        <main className="main">
            <Home />
            <Services />
            <Work />
            <Testimonial />
            <About />
            <Skills />
            <Contact />
        </main>

        <Footer />

    </Layout>
  )
}

export default IndexPage
