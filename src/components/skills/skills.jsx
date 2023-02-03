import React from 'react';
import './skills.css';

export function Skills() {
  return (
    <div className="skills-main-container">
      <div className="skills-heading">
        <div className="skills-text">Skills</div>
        <div className="skills-line"></div>
      </div>

      <ul className="skills-list">
        <li>
          <a rel="noreferrer" target="_blank" href="https://www.w3.org/html/">
            HTML
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          >
            Javascript
          </a>
        </li>
        <li>
          <a rel="noreferrer" target="_blank" href="https://reactjs.org/">
            Reactjs
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.w3.org/Style/CSS/"
          >
            CSS3
          </a>
        </li>
        <li>
          <a rel="noreferrer" target="_blank" href="https://git-scm.com/">
            Git/GitHub
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://code.visualstudio.com/"
          >
            VSCode
          </a>
        </li>
      </ul>
    </div>
  );
}
