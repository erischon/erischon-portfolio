import React from "react"
import { Link } from "gatsby"

import "../assets/css/404.css"

const Error = () => {
  return (
      <main className="error-page">
        <section className="error-page__section">
          <h1>404</h1>
          <h3>Page not found</h3>
        </section>

        <Link to="/" className="button">Page d'accueil</Link>

      </main>
  )
}

export default Error
