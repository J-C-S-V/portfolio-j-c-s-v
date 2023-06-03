import { useEffect } from 'react';
import { GrGithub, GrReactjs } from 'react-icons/gr';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiJavascript } from 'react-icons/si';
import { IoLogoCss3 } from 'react-icons/io';
import aos from 'aos';
import rockPaperScissors from '../assets/images/rock_paper_scissors_img.png';
import snakeGame from '../assets/images/snake_game_img.png';
import clicksCounter from '../assets/images/clicks_counter_img.png';
import Card from './Card';
import '../styles/projects.css';

export default function Projects() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" className="projects" id="jump-projects">
      <header className="about__header-container">
        <div className="about__header">Projects</div>
        <span className="about__line" />
      </header>

      <section className="cards">
        <Card
          img={rockPaperScissors}
          title="Rock paper scissors"
          urlLive="https://luxury-swan-136d4f.netlify.app/"
          urlGithub="https://github.com/J-C-S-V/Rock-Paper-Scissors"
          tech={<GrGithub />}
          techTwo={<IoLogoCss3 />}
          techThree={<AiFillHtml5 />}
          techFour={<SiJavascript />}
        />
        <Card
          img={snakeGame}
          title="Snake game"
          urlLive="https://hilarious-medovik-3cda2f.netlify.app/"
          urlGithub="https://github.com/J-C-S-V/snake_game"
          tech={<GrGithub />}
          techTwo={<IoLogoCss3 />}
          techThree={<AiFillHtml5 />}
          techFour={<SiJavascript />}
        />
        <Card
          img={clicksCounter}
          title="Clicks counter"
          urlLive="https://incomparable-pothos-f8cec3.netlify.app/"
          urlGithub="https://github.com/J-C-S-V/clicks_counter"
          tech={<GrGithub />}
          techTwo={<GrReactjs />}
          techThree={<AiFillHtml5 />}
          techFour={<SiJavascript />}
        />
      </section>
    </div>
  );
}
