import React from 'react';
import './hero.css';

export function Hero() {
  return (
    <section>
      <p className="hero-greeting elements-inside-section">Hello, my name is</p>
      <h1 className="hero-name elements-inside-section">Juan Sanchez</h1>
      <h2 className="hero-title elements-inside-section">
        I create <span> good quality</span> projects for the web.
      </h2>
      <p className="hero-description elements-inside-section">
        I am a front-end web developer with a passion for backend. Currently, I
        am building this portfolio website to showcase my projects and land my
        first job as a web developer 🤩
      </p>

      <div className="hero-div elements-inside-section">
        <div className="My projects"> My projects</div>
        <div className="line-hero"></div>
      </div>
    </section>
  );
}
