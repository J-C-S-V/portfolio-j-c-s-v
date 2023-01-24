import React from 'react';
import './hero.css';

export function Hero() {
  return (
    <section>
      <p className="hero-greeting elements-inside-section">Hello, my name is</p>
      <h1 className="hero-name elements-inside-section">Juan Sanchez</h1>
      <h2 className="hero-title elements-inside-section">
        I create good quality projects for the web.
      </h2>
      <p className="hero-description elements-inside-section">
        I am a full-stack web developer with a passion for backend. Currently, I
        am building this portfolio website to showcase my projects and land my
        first job as a web developer 🤩
      </p>

      <button className="hero-button elements-inside-section" type="button">
        See my projects
      </button>
    </section>
  );
}
