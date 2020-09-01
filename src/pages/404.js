import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import '../assets/styles/pageNotFound.css'
import { Link } from 'gatsby'
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={{ marginTop: 200 }}>Page Not Found </h1>
    <section className="error-container">
      <span className="four">
        <span className="screen-reader-text">4</span>
      </span>
      <span className="zero">
        <span className="screen-reader-text">0</span>
      </span>
      <span className="four">
        <span className="screen-reader-text">4</span>
      </span>
    </section>
    <div className="link-container">
      <Link to="/">Back to Home</Link>
    </div>
  </Layout>
)

export default NotFoundPage
