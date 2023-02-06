import React from 'react';
import './hero.css';

export function Hero() {
  return (
    <section className="hero-section">
      <p className="hero-greeting elements-inside-section">Hello, my name is</p>
      <h1 className="hero-name elements-inside-section">Juan Sanchez</h1>
      <h2 className="hero-title elements-inside-section">
        I create <span> good quality</span> projects for the web.
      </h2>
      <p className="hero-description elements-inside-section">
        As a front-end web developer with a strong interest in the backend, I am
        excited to present my portfolio website. Through this platform, I aim to
        demonstrate my skills and secure my first opportunity as a web
        developer. 🤩
      </p>
    </section>
  );
}
