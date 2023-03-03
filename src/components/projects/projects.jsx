import React from 'react';
import './projects.css';

export function Projects() {
  return (
    <div className="projects-header">
      <div id="jump-projects" className="project-text">
        <div className="project-text2">Projects</div>
        <div className="project-line"></div>
      </div>
      <section class="card-list">
        <article class="card">
          <header class="card-header">
            <h2>Rock paper scissors</h2>
          </header>
          <a target="_bla" href="https://luxury-swan-136d4f.netlify.app/">
            <img
              className="img-cards"
              src={require('../../images/rock_paper_scissors_img.png')}
              alt="snake-game"
            />
          </a>
          <div className="technologies">Technologies</div>
          <div className="tags">
            <div className="tech" href="#">
              html
            </div>
            <div className="tech" href="#">
              css
            </div>
            <div className="tech" href="#">
              JS
            </div>
          </div>
        </article>

        <article class="card">
          <header class="card-header">
            <h2>Snake</h2>
          </header>
          <a target="_bla" href="https://hilarious-medovik-3cda2f.netlify.app/">
            <img
              className="img-cards"
              src={require('../../images/snake_game_img.png')}
              alt="snake-game"
            />
          </a>
          <div className="technologies">Technologies</div>
          <div className="tags">
            <div className="tech" href="#">
              html
            </div>
            <div className="tech" href="#">
              css
            </div>
            <div className="tech" href="#">
              JS
            </div>
          </div>
        </article>
        <article class="card">
          <header class="card-header">
            <h2>Clicks counter</h2>
          </header>
          <a
            target="_bla"
            href="https://incomparable-pothos-f8cec3.netlify.app/"
          >
            <img
              className="img-cards"
              src={require('../../images/clicks_counter_img.png')}
              alt="snake-game"
            />
          </a>
          <div className="technologies">Technologies</div>
          <div className="tags">
            <div className="tech" href="#">
              React
            </div>
            <div className="tech" href="#">
              Html
            </div>
            <div className="tech" href="#">
              css
            </div>
            <div className="tech" href="#">
              JS
            </div>
          </div>
        </article>
        <article class="card">
          <header class="card-header">
            <h2>Typing speed test</h2>
          </header>
          <a target="_bla" href="https://creative-entremet-225e0d.netlify.app/">
            <img
              className="img-cards"
              src={require('../../images/typing_speed_test_img.png')}
              alt="snake-game"
            />
          </a>
          <div className="technologies">Technologies</div>
          <div className="tags">
            <div className="tech" href="#">
              html
            </div>
            <div className="tech" href="#">
              css
            </div>
            <div className="tech" href="#">
              JS
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
