import React from 'react';
import './about.css';

export function About() {
  return (
    <section className="about" id="jump-about">
      <header className="about__header-container">
        <div className="about__header">About</div>
        <span className="about__line"></span>
      </header>
      <div className="about__container">
        <div className="about__p">
          <p>
            I'm a music teacher who developed an interest in coding after seeing
            the positive impact it can have on others. I grew up around
            computers and had to choose between studying music or systems
            engineering, ultimately choosing music. 🎼
          </p>
          <img
            className="about__img"
            src={require('../../images/profile_pic2.jpg')}
            alt="Juan Sanchez"
          />
          <p>
            I completed a 5-year music program and taught in schools for 3
            years, but now I want to change careers to become a successful web
            developer. 💻
          </p>
          <p>
            <strong className="about__strong">My goal</strong> right now is to
            gain experience and knowledge
            <strong className="about__strong"> to help other people</strong> and
            make this world a better place to live for everyone. 🌎
          </p>
        </div>
      </div>
    </section>
  );
}
