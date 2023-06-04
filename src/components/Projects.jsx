import { useEffect } from 'react';
import { GrGithub, GrReactjs } from 'react-icons/gr';
// import { AiFillHtml5 } from 'react-icons/ai';
import {
  SiJavascript,
  SiRedux,
  SiJest,
  SiWebpack,
} from 'react-icons/si';
import { IoLogoCss3 } from 'react-icons/io';
import { FaBootstrap, FaSass } from 'react-icons/fa';
import aos from 'aos';
import spaceTravelersHub from '../assets/images/space_travelers_hub.jpg';
import mathMagicians from '../assets/images/math_magicians.jpg';
import toDoList from '../assets/images/to_do_list.jpg';
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
          img={spaceTravelersHub}
          title="Space traveler's hub"
          urlLive="https://space-travelers-hub-project.netlify.app/"
          urlGithub="https://github.com/J-C-S-V/spacex-project"
          tech={<GrGithub />}
          techTwo={<GrReactjs />}
          techThree={<SiRedux />}
          techFour={<FaBootstrap />}
        />
        <Card
          img={mathMagicians}
          title="Math magicians"
          urlLive="https://math-magicians-site.netlify.app/"
          urlGithub="https://github.com/J-C-S-V/math-magicians"
          tech={<GrGithub />}
          techTwo={<GrReactjs />}
          techThree={<FaSass />}
          techFour={<SiJest />}
        />
        <Card
          img={toDoList}
          title="To do list"
          urlLive="https://astonishing-stroopwafel-dc8220.netlify.app/"
          urlGithub="https://github.com/J-C-S-V/webpack-to-do-list"
          tech={<GrGithub />}
          techTwo={<SiJavascript />}
          techThree={<IoLogoCss3 />}
          techFour={<SiWebpack />}
        />
      </section>
    </div>
  );
}
