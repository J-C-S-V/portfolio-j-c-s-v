import React from 'react';
import './footer.css';

export function Footer() {
  return (
    <footer>
      <div className="main-container">
        {/* First container */}
        <div className="little-container-one little-containers">
          <div className="contact-text1 contact-text">Contact</div>
          <div className="line"></div>
        </div>

        {/* Second container */}
        <div className="little-container-two little-containers">
          <div className="contact-text2 contact-text">
            If you want to hire me:
          </div>
          <a className="anchor-say-hello" href="mailto:juansan1993@hotmail.com">
            Say Hello 👋
          </a>
        </div>

        {/* Third container */}
        <div className="little-container-three little-containers">
          Designed and built by <span>Juan Sanchez</span>
        </div>
      </div>
    </footer>
  );
}
