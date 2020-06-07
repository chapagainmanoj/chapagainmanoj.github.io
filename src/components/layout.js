import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Nav from '../components/nav'

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  getPath = (path) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const projectPath = `${__PATH_PREFIX__}/project/`
    switch (path) {
      case rootPath:
        return `/`
      case blogPath:
        return `/blog/`
      case projectPath:
        return `/project/`
      default:
        return `/`
    }
  }
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const projectPath = `${__PATH_PREFIX__}/project/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath || location.pathname === projectPath) {
      header = (
        <h2
          style={{
            ...scale(1),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={this.getPath(location.pathname)}
          >
            {title}
          </Link>
        </h2>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <Nav path={location.pathname} />
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()} Tejan, Built with
          {` `}
          Gatsby & Netlify
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
