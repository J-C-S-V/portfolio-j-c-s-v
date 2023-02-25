import React from 'react';
import './navbar.css';
export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__photo">
        <img
          className="navbar__img"
          src={require('../../images/profile_pic1.jpg')}
          alt="Juan Sanchez's face"
        />
      </div>
      <div className="navbar__list">
        <ul className="navbar__ul">
          <li className="navbar__li">
            <a href="#jump-home" className="navbar__anchor">
              Home
            </a>
          </li>

          <li className="navbar__li">
            <a href="#jump-projects" className="navbar__anchor">
              Projects
            </a>
          </li>
          <li className="navbar__li">
            <a href="#jump-about" className="navbar__anchor">
              About
            </a>
          </li>
          <li className="navbar__li">
            <a href="#jump-contact" className="navbar__anchor">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
