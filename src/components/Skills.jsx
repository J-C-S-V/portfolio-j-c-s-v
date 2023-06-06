import { useEffect } from 'react';
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiJest,
  SiWebpack,
  SiBootstrap,
  SiFigma,
  SiSass,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiWordpress,
} from 'react-icons/si';
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
        <article className="skills__ul-soft">
          <h2 className="skills__h2">Soft skills</h2>
          <ul className="skills_ul-soft">
            <li className="skills__li">👨🏿‍🤝‍👨🏿 Assertive communication</li>
            <li className="skills__li">⏲ Time management</li>
            <li className="skills__li">🧠 Problem-solving</li>
            <li className="skills__li">💼 Adaptability</li>
            <li className="skills__li">🤝 Collaboration</li>
          </ul>
        </article>
        <article className="skills__hard">
          <h2 className="skills__h2">Hard skills</h2>
          <ul className="skills__ul-hard">
            <li><SiJavascript title="JavaScript" className="skills__li-hard" /></li>
            <li><SiReact title="React" className="skills__li-hard" /></li>
            <li><SiRedux title="Redux" className="skills__li-hard" /></li>
            <li><SiJest title="Jest" className="skills__li-hard" /></li>
            <li><SiWebpack title="Webpack" className="skills__li-hard" /></li>
            <li><SiBootstrap title="Bootstrap" className="skills__li-hard" /></li>
            <li><SiFigma title="Figma" className="skills__li-hard" /></li>
            <li><SiSass title="Sass" className="skills__li-hard" /></li>
            <li><SiHtml5 title="HTML5" className="skills__li-hard" /></li>
            <li><SiCss3 title="CSS3" className="skills__li-hard" /></li>
            <li><SiPostgresql title="PostgreSQL" className="skills__li-hard" /></li>
            <li><SiWordpress title="WordPress" className="skills__li-hard" /></li>
          </ul>
        </article>
      </section>
    </section>
  );
}
