import React from 'react';
import './projects.css';
import { GrGithub } from 'react-icons/gr';
import { GrReactjs } from 'react-icons/gr';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiJavascript } from 'react-icons/si';
import { IoLogoCss3 } from 'react-icons/io';
export function Projects() {
  return (
    <div className="projects" id="jump-projects">
      <header className="about__header-container">
        <div className="about__header">Projects</div>
        <span className="about__line"></span>
      </header>

      <section class="cards">
        <article class="card">
          <header class="card__header">
            <h2 className="card__header-text">Rock paper scissors</h2>
          </header>
          <a
            className="card__anchor"
            target="_bla"
            href="https://luxury-swan-136d4f.netlify.app/"
          >
            <img
              className="img__cards"
              src={require('../../images/rock_paper_scissors_img.png')}
              alt="rock-paper-scissors"
            />
          </a>
          <h2 className="technologies">Technologies</h2>
          <ul className="tags">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/J-C-S-V/Rock-Paper-Scissors"
              className="tags__tech tags__tech--github"
            >
              <GrGithub />
            </a>
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
        <article class="card">
          <header class="card__header">
            <h2 className="card__header-text">Snake game</h2>
          </header>
          <a
            className="card__anchor"
            target="_bla"
            href="https://hilarious-medovik-3cda2f.netlify.app/"
          >
            <img
              className="img__cards"
              src={require('../../images/snake_game_img.png')}
              alt="snake-game"
            />
          </a>
          <h2 className="technologies">Technologies</h2>
          <ul className="tags">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/J-C-S-V/snake_game"
              className="tags__tech tags__tech--github"
            >
              <GrGithub />
            </a>
            <li className="tags__tech">
              <IoLogoCss3 />
            </li>
            <li className="tags__tech">
              <AiFillHtml5 />
            </li>
            <li className="tags__tech">
              <SiJavascript />
            </li>
          </ul>
        </article>
        <article class="card">
          <header class="card__header">
            <h2 className="card__header-text">Clicks counter</h2>
          </header>
          <a
            className="card__anchor"
            target="_bla"
            href="https://incomparable-pothos-f8cec3.netlify.app/"
          >
            <img
              className="img__cards"
              src={require('../../images/clicks_counter_img.png')}
              alt="snake-game"
            />
          </a>
          <h2 className="technologies">Technologies</h2>
          <ul className="tags">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/J-C-S-V/clicks_counter"
              className="tags__tech tags__tech--github"
            >
              <GrGithub />
            </a>
            <li className="tags__tech">
              <GrReactjs />
            </li>
            <li className="tags__tech">
              <AiFillHtml5 />
            </li>
            <li className="tags__tech">
              <SiJavascript />
            </li>
            {/* <li className="tags__tech">
              <IoLogoCss3 />
            </li> */}
          </ul>
        </article>
      </section>
    </div>
  );
}
