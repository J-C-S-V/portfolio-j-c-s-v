import React from 'react';
import './navbar.css';

export function Navbar({ cambiarEstado }) {
  return (
    <div className="navbar">
      <div className="navbar-img-container">
        <img
          className="navbar-img-container__img"
          src={require('../../images/profile_pic1.jpg')}
          alt="Juan Sanchez's face"
          title="Thank you for visiting my website 🤓"
        />
        <span className="navbar-img-container__name">Juan Sanchez</span>
        <div className="spans" onClick={() => cambiarEstado(true)}>
          <span className="spans__unit"></span>
          <span className="spans__unit"></span>
          <span className="spans__unit"></span>
          <span className="spans__unit"></span>
        </div>
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
