import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/hero.css';

export default function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="hero" data-aos="fade-up" data-aos-duration="3000">
      <p className="hero__greeting elements">Hello, my name is</p>
      <h1 className="hero__name elements">Juan Sanchez</h1>
      <h2 className="h2 hero__title elements">
        <span className="h2__span">Excellence </span>
        as the cornerstone.
      </h2>
      <p className="hero__description elements">
        As a front-end web developer, I am thrilled to showcase my portfolio website through this
        platform and to demonstrate my skills that I&apos;ve acquired with the
        folowing projects. If you like what you see and
        have a project you need coded, don&apos;t hestiate to contact me. 😃✨💻
      </p>
    </section>
  );
}
