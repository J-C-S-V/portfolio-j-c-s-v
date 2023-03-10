import React from 'react';
import './hero.css';

export function Hero() {
  return (
    <section className="hero">
      <p className="hero__greeting elements">Hello, my name is</p>
      <h1 className="hero__name elements">Juan Sanchez</h1>
      <h2 className="h2 hero__title elements">
        I create <span className="h2__span"> good quality</span> projects for
        the web.
      </h2>
      <p className="hero__description elements">
        As a front-end web developer With a strong interest in both front-end
        and backend, I am thrilled to showcase my portfolio website. Through
        this platform, I aim to demonstrate my skills. 😃✨💻
      </p>
    </section>
  );
}
