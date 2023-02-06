import React from 'react';
import './skills.css';
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { FaGitAlt } from 'react-icons/fa';
import { SiVisualstudio } from 'react-icons/si';
import { TiHtml5 } from 'react-icons/ti';

export function Skills() {
  return (
    <div className="skills-main-container">
      <div className="skills-heading">
        <div className="skills-text">Skills</div>
        <div className="skills-line"></div>
      </div>
      <div className="skills-container">
        <ul className="skills-list">
          <li>
            <a rel="noreferrer" target="_blank" href="https://www.w3.org/html/">
              <TiHtml5 />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >
              <SiJavascript />
            </a>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="https://reactjs.org/">
              <FaReact />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.w3.org/Style/CSS/"
            >
              <DiCss3 />
            </a>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="https://git-scm.com/">
              <FaGitAlt />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://code.visualstudio.com/"
            >
              <SiVisualstudio />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
