import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/skills.css';

export default function Skills() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="skills" data-aos="fade-up">
      <header className="about__header-container">
        <div className="about__header">Skills</div>
        <span className="about__line" />
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
