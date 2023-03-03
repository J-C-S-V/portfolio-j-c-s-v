import React from 'react';
import './projects.css';
import { GrGithub } from 'react-icons/gr';
import { GrReactjs } from 'react-icons/gr';
import { TiHtml5 } from 'react-icons/ti';
import { SiJavascript } from 'react-icons/si';
export function Projects() {
  return (
    <div className="projects">
      <div className="project__header-container">
        <div className="project__header">Projects</div>
        <span className="project__line"></span>
      </div>
      <section class="cards">
        <article class="card">
          <header class="card__header">
            <h2 className="card__header-text">Rock paper scissors</h2>
          </header>
          <a target="_bla" href="https://luxury-swan-136d4f.netlify.app/">
            <img
              className="img__cards"
              src={require('../../images/rock_paper_scissors_img.png')}
              alt="snake-game"
            />
          </a>
          <h2 className="technologies">Technologies</h2>
          <ul className="tags">
            <li className="tech">
              <GrGithub />
            </li>
            <li className="tech">
              <GrReactjs />
            </li>
            <li className="tech">
              <TiHtml5 />
            </li>
            <li className="tech">
              <SiJavascript />
            </li>
          </ul>
        </article>

        <article class="card">
          <header class="card__header">
            <h2>Snake</h2>
          </header>
          <a target="_bla" href="https://hilarious-medovik-3cda2f.netlify.app/">
            <img
              className="img__cards"
              src={require('../../images/snake_game_img.png')}
              alt="snake-game"
            />
          </a>
          <h2 className="technologies">Technologies</h2>
          <ul className="tags">
            <li className="tech">html</li>
            <li className="tech">css</li>
            <li className="tech">JS</li>
          </ul>
        </article>
        <article class="card">
          <header class="card__header">
            <h2>Clicks counter</h2>
          </header>
          <a
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
            <li className="tech">html</li>
            <li className="tech">css</li>
            <li className="tech">JS</li>
          </ul>
        </article>
        <article class="card">
          <header class="card__header">
            <h2>Typing speed test</h2>
          </header>
          <a target="_bla" href="https://creative-entremet-225e0d.netlify.app/">
            <img
              className="img__cards"
              src={require('../../images/typing_speed_test_img.png')}
              alt="snake-game"
            />
          </a>
          <h2 className="technologies">Technologies</h2>
          <ul className="tags">
            <li className="tech">html</li>
            <li className="tech">css</li>
            <li className="tech">JS</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
