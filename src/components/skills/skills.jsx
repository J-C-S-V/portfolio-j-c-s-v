import React from 'react';
import './skills.css';

export function Skills() {
  return (
    <section className="skills">
      <header className="skills__header-container">
        <div className="skills__header">Skills</div>
        <span className="skills__line"></span>
      </header>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5000ca"
          fill-opacity="1"
          d="M0,160L1440,224L1440,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
