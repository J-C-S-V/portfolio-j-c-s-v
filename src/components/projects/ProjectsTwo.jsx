import React from 'react';
import './projects.css';
import { GrGithub } from 'react-icons/gr';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiJavascript } from 'react-icons/si';
import { IoLogoCss3 } from 'react-icons/io';
import { FaBootstrap } from 'react-icons/fa';
import digitalMarketingAgency from '../../images/digital_marketing_agency.png';
import theEthicsOfAIConference from '../../images/the_ethics_of_ai_conference.png';
import typingSpeedTest from '../../images/typing_speed_test_img.png';

export default function ProjectsTwo() {
  return (
    <div className="projects" id="jump-projects">
      <header className="about__header-container">
        <div className="about__header">Projects</div>
        <span className="about__line" />
      </header>
      <section className="cards">
        <article className="card">
          <header className="card__header">
            <h2 className="card__header-text">The ethics of AI</h2>
          </header>
          <a
            className="card__anchor"
            target="_bla"
            href="https://j-c-s-v.github.io/The-Ethics-of-AI-conference/index.html"
          >
            <img
              className="img__cards"
              src={theEthicsOfAIConference}
              alt="the ethics of AI conference"
            />
          </a>
          <h2 className="technologies">Technologies</h2>
          <ul className="tags">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/J-C-S-V/The-Ethics-of-AI-conference"
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
        <article className="card">
          <header className="card__header">
            <h2 className="card__header-text">Marketing agency</h2>
          </header>
          <a
            className="card__anchor"
            target="_bla"
            href="https://vermillion-gnome-154b58.netlify.app/"
          >
            <img
              className="img__cards"
              src={digitalMarketingAgency}
              alt="marketing agency"
            />
          </a>
          <h2 className="technologies">Technologies</h2>
          <ul className="tags">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/J-C-S-V/bootstrap_project"
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
              <FaBootstrap />
            </li>
          </ul>
        </article>
        <article className="card">
          <header className="card__header">
            <h2 className="card__header-text">Typing speed test</h2>
          </header>
          <a
            className="card__anchor"
            target="_bla"
            href="https://creative-entremet-225e0d.netlify.app/"
          >
            <img
              className="img__cards"
              src={typingSpeedTest}
              alt="snake-game"
            />
          </a>
          <h2 className="technologies">Technologies</h2>
          <ul className="tags">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/J-C-S-V/typing_speed_test"
              className="tags__tech tags__tech--github"
            >
              <GrGithub />
            </a>

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
