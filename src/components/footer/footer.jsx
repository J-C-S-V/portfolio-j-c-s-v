import React from 'react';
import './footer.css';

export function Footer() {
  return (
    <footer>
      <div className="main-container">
        <div className="contact-text1 contact-text">Contact</div>
        <div className="little-container">
          <div className="contact-text2 contact-text">
            If you want to hire me:
          </div>
          <a
            className="say-hello contact-text"
            href="mailto:juansan1993@hotmail.com"
          >
            Say Hello 👋
          </a>
        </div>

        <div className="contact-text3 contact-text">
          Designed and built by Juan Sanchez
        </div>
      </div>
    </footer>
  );
}
