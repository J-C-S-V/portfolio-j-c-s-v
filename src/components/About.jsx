import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/about.css';
import profilePicTwo from '../assets/images/profile_pic2.png';

export default function About() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="about" id="jump-about">
      <header className="about__header-container">
        <div className="about__header">About</div>
        <span className="about__line" />
      </header>
      <div className="about__container" data-aos="fade-up">
        <div className="about__p-container">
          <p className="about__p about__p-1" data-aos="fade-right">
            I&apos;m a music teacher who developed an interest in coding after
            seeing the positive impact it can have on others. I grew up around
            computers and had to choose between studying music or systems
            engineering, ultimately choosing music. 🎼
          </p>
          <p className="about__p about__p-img" data-aos="fade-right">
            I completed a 5-year music program and taught in schools for 3
            years, but now I want to change careers to become a successful web
            developer. 💻
            <br />
            <br />
            My goal right now is to gain experience and knowledge to help other
            people and make this world a better place to live for everyone. 🌎
            <img
              data-aos="fade-right"
              className="about__img"
              src={profilePicTwo}
              alt="Juan Sanchez"
            />
          </p>
        </div>
      </div>
    </section>
  );
}
