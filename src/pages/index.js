import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Manoj Chapagain"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `manoj`, `mythings`, `computer`, `web-developer`]}
        />
        <img style={{ margin: 0 }} src="./me.jpg" alt="Gatsby Scene" />
        <h2>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h2>
        <p>I am a full stack web developer.</p>
        <p>
        I'm passionate about the technology -- not a specific framework or language. I think, 
          it's about adaption and what works best for the project. I'm open to learning any stack if its works.
        </p>
        <p>Currently, I am open for new challenges. Here is my <a target="_blank" href="./ResumeDocs.pdf">Resume</a>. Lets build something together!</p>
      </Layout>
    )
  }
}

export default IndexPage
