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
        <div className="about__p-container">
          <p className="about__p about__p-1">
            I'm a music teacher who developed an interest in coding after seeing
            the positive impact it can have on others. I grew up around
            computers and had to choose between studying music or systems
            engineering, ultimately choosing music. 🎼
          </p>
          <p className="about__p about__p-img">
            I completed a 5-year music program and taught in schools for 3
            years, but now I want to change careers to become a successful web
            developer. 💻 <br />
            <br />
            My goal right now is to gain experience and knowledge to help other
            people and make this world a better place to live for everyone. 🌎
            <img
              className="about__img"
              src={require('../../images/profile_pic2.jpg')}
              alt="Juan Sanchez"
            />
          </p>
        </div>
      </div>
    </section>
  );
}
