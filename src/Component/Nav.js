import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="nav" id='page-top'>
               <a className="menu-toggle rounded" href="vnskill.com"><i className="fas fa-bars" /></a>
        <nav id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand"><a href="#page-top">Start Bootstrap</a></li>
            <li className="sidebar-nav-item"><a href="#page-top">Home</a></li>
            <li className="sidebar-nav-item"><a href="#about">About</a></li>
            <li className="sidebar-nav-item"><a href="#services">Services</a></li>
            <li className="sidebar-nav-item"><a href="#portfolio">Portfolio</a></li>
            <li className="sidebar-nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
            </div>
        );
    }
}

export default Nav;