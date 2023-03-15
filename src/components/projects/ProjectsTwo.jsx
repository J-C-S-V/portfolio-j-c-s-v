import React from 'react';
import './projects.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiJavascript } from 'react-icons/si';
import { IoLogoCss3 } from 'react-icons/io';
import { FaBootstrap } from 'react-icons/fa';
export function ProjectsTwo() {
  return (
    <div className="projects" id="jump-projects">
      <section class="cards">
        <article class="card">
          <header class="card__header">
            <h2 className="card__header-text">Marketing agency</h2>
          </header>
          <a
            className="card__anchor"
            target="_bla"
            href="https://vermillion-gnome-154b58.netlify.app/"
          >
            <img
              className="img__cards"
              src={require('../../images/digital_marketing_agency.png')}
              alt="snake-game"
            />
          </a>
          <h2 className="technologies">Technologies</h2>
          <ul className="tags">
            <li className="tags__tech">
              <FaBootstrap />
            </li>
            <li className="tags__tech">
              <IoLogoCss3 />
            </li>
            <li className="tags__tech">
              <AiFillHtml5 className="tags_logo" />
            </li>
            <li className="tags__tech">
              <SiJavascript />
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}
