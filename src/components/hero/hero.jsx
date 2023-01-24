import React from 'react';
import './hero.css';
import { Link } from 'react-scroll';

export function Hero() {
  return (
    <section className="section" id="about">
      <div className="hero">
        <p className="hero-greeting">Hello, my name is</p>
        <h1 className="hero-name">Juan Sanchez</h1>
        <h2 className="hero-title">I create good quality projects the web.</h2>
        <p className="hero-description">
          I am a full-stack web developer with a passion for backend. Currently,
          I am building this portfolio website to showcase my projects and land
          my first job in this field.
        </p>
        <Link
          spy
          smooth
          offset={-70}
          duration={500}
          to="projects"
          className="link"
        >
          <button className="hero-button" type="button">
            See my projects!
          </button>
        </Link>
      </div>
    </section>
  );
}
