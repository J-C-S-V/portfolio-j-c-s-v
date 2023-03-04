import React from 'react';
import './footer.css';

export function Footer() {
  return (
    <footer>
      <section className="contact" id="jump-contact">
        <header className="contact__header-container">
          <div className="contact__header">Contact</div>
          <span className="contact__line"></span>
        </header>

        <div className="little-container-two containers">
          <div className="contact-text2 contact-text">
            If you want to hire me:
          </div>
          <a className="anchor-say-hello" href="mailto:juansan1993@hotmail.com">
            Say Hello 👋
          </a>
        </div>

        <div className="little-container-three containers">
          Designed and built by <span>Juan Sanchez</span>
        </div>
      </section>
    </footer>
  );
}
