import React from 'react';
import './about.css';

export function About() {
  return (
    <div className="main-container-about">
      <div className="little-container-about-one">
        <p>
          Hello! My name is <strong>Juan Sanchez</strong>, I'm a musician that
          started to love coding once I saw the good things we can do to others
          with it. I was always sorounded by computers in my childhood and
          teens, then I had to decide to study something between
          <strong> music and system's engineering</strong>, I chose music, It
          was a beautiful journey, I finished my 5 years career and worked on it
          for 3 years teaching in schools.
          <strong>
            Now I have decided to change careers to achieve what is pending in
            my journey.
          </strong>
        </p>
        <p>
          My goal right now is to gain experience and knowledge
          <strong> to help other people</strong> and make this world a better
          place to live for everyone
        </p>
        <p>
          Here are some few technologies and languages I&apos;ve been using:
        </p>
        <ul className="about-list">
          <li>HTML</li>
          <li>Javascript</li>
          <li>Reactjs</li>
          <li>CSS3</li>
          <li>Git/GitHub</li>
          <li>VSCode</li>
        </ul>
      </div>
      {/* <div className="little container-about two"></div>
      <div className="little container-about three"></div>
      <div className="little container-about four"></div> */}

      <img
        className="img-about"
        src={require('../../images/profile_pic2.jpg')}
        alt="Juan Sanchez"
      />
    </div>
  );
}
