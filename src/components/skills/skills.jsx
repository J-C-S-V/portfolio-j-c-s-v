import React from 'react';
import './skills.css';

export function Skills() {
  return (
    <section className="skills">
      <header className="skills__header-container">
        <div className="skills__header">Skills</div>
        <span className="skills__line"></span>
      </header>
      <section className="skills__soft-hard">
        <article className="skills__soft">
          <h2>Soft skills</h2>
          <br />
          <ul className="skills_ul">
            <li className="skills__li">Assertive communication</li>
            <li className="skills__li">Time management</li>
            <li className="skills__li">Problem-solving</li>
            <li className="skills__li">Adaptability</li>
            <li className="skills__li">Collaboration</li>
          </ul>
        </article>
        <article className="skills__hard">
          <h2>Hard skills</h2>
          <br />
          <ul className="skills__li">
            <li className="skills__li">Reactjs</li>
            <li className="skills__li">JavaScript ES6</li>
            <li className="skills__li">CSS3</li>
            <li className="skills__li">SASS</li>
            <li className="skills__li">HTML5</li>
          </ul>
        </article>
      </section>
    </section>
  );
}

{
  /* <svg
  className="skills__svg"
  fill="#da2d6d"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 500 550"
>
  <path
    fill="#480aab"
    fill-opacity="1"
    d="M501.01,555.66 C449.66,524.85 478.99,209.04 510.60,620.90 L0.45,549.74 L499.88,-1.46 Z"
  ></path>
</svg> */
}
