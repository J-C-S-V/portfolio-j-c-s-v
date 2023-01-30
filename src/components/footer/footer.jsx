import React from 'react';
import './footer.css';

export function Footer() {
  return (
    <footer>
      <div className="main-container">
        <div className="little-container-one">
          <div className="contact-text1 contact-text">Contact</div>
          <div className="line"></div>
        </div>
        <div className="little-container-two">
          <div className="contact-text2 contact-text">
            If you want to hire me:
          </div>
          <a className="anchor-say-hello" href="mailto:juansan1993@hotmail.com">
            Say Hello 👋
          </a>
        </div>

        <div className="little-container-three">
          Designed and built by <span>Juan Sanchez</span>
        </div>
      </div>
    </footer>
  );
}
