import React from 'react';
import './navbar.css';
export function Navbar() {
  return (
    <div className="navbar" id="nav-bar-id">
      <div className="one-half">
        <img
          className="pic-one"
          src={require('../../images/profile_pic1.jpg')}
          alt="Juan Sanchez's face"
        />
      </div>
      <div className="second-half">
        <ul className="container-anchor">
          <li>
            <a href="#jump-home" className="anchor-home">
              Home
            </a>
          </li>

          <li>
            <a href="#jump-projects" className="anchor-projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#jump-about" className="anchor-about">
              About
            </a>
          </li>
          <li>
            <a href="#jump-contact" className="anchor-contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
