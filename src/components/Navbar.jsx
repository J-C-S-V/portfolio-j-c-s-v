import '../styles/navbar.css';
import PropTypes from 'prop-types';
import Logo from '../assets/images/logo.jpg';

export default function Navbar({ changeState }) {
  return (
    <nav className="navbar">
      <div className="navbar-img-container">
        <img
          className="navbar-img-container__img"
          src={Logo}
          alt="logo"
          title="Thank you for visiting my website 🤓"
        />
        {/* <span className="navbar-img-container__name">Juan Sanchez</span> */}
        <span
          type="button"
          className="spans"
          onClick={() => changeState(true)}
          onKeyDown={() => changeState(true)}
          role="button"
          tabIndex={0}
        >
          <span className="spans__unit" />
          <span className="spans__unit" />
          <span className="spans__unit" />
          <span className="spans__unit" />
        </span>
      </div>
      <div className="navbar__list">
        <ul className="navbar__ul">
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
            <a href="#jump-skills" className="navbar__anchor">
              Skills
            </a>
          </li>
          <li className="navbar__li">
            <a href="#jump-contact" className="navbar__anchor">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  changeState: PropTypes.func.isRequired,
};
