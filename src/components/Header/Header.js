import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <header className="s-header">
  <div className="row s-header__nav-wrap">
    <nav className="s-header__nav">
      <ul>
        <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
        <li><a className="smoothscroll" href="#about">About</a></li>
        <li><a className="smoothscroll" href="#resume">Resume</a></li>
        <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
        <li><a className="smoothscroll" href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div> 
  <a className="s-header__menu-toggle" href="#0" title="Menu">
    <span className="s-header__menu-icon" />
  </a>
</header>

      </React.Fragment>
    );
  }
}