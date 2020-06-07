import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component {
  activeClass = (link) => {
    const {path} = this.props;
    const linkPath = `${__PATH_PREFIX__}${link}`
    if (linkPath === path) {
      return ''
    }
    else {
      return 'notactive'
    }
  }
  render() {
    return (
      <div
        style={{
          margin: '0 0 9px 0'
        }}>
        <Link className={`nav ${this.activeClass('/')}`} to={`/`}>Home</Link>
        <Link className={`nav ${this.activeClass('/project/')}`} to={`/project/`}>Projects</Link>
        <Link className={`nav ${this.activeClass('/blog/')}`} to={`/blog/`}>Blog</Link>
        <span style={{float: 'right'}}>
          <a className={`icon`} href={`https://twitter.com`} target={'_blank'}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a className={`icon`} href={`https://facebook.com`} target={'_blank'}><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
          <a className={`icon`} href={`https://instagram.com`} target={'_blank'}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          <a className={`icon`} href={`https://linkedin.com`} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        </span>
      </div>
    )
  }
}

export default Nav
