import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Tejan Adhakari"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `tejanadh`, `mythings`, `mechanical`]}
        />
        <img style={{ margin: 0 }} src="./me.jpg" alt="Gatsby Scene" />
        <h2>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h2>
        <p>Welcome to your new Gatsby website. You are on your home page.</p>
        <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p>
        <p>Now go build something great!</p>
      </Layout>
    )
  }
}

export default IndexPage
