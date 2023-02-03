import React from 'react';
import './about.css';

export function About() {
  return (
    <div className="big-div">
      {/* About text container */}
      <div className="about-text">
        <div className="about-text2">About</div>
        <div className="about-line"></div>
      </div>
      {/* Main container */}
      <div className="main-container-about">
        {/* Left container start*/}
        <div className="little-container-about-one">
          <p>
            I'm a musician who developed an interest in coding after seeing the
            positive impact it can have on others. I grew up around computers
            and had to choose between studying music or systems engineering,
            ultimately choosing music.
          </p>
          <p>
            I completed a 5-year music program and taught in schools for 3
            years, but now I want to switch careers to become a successful web
            developer.
          </p>
          <p>
            <strong>My goal</strong> right now is to gain experience and
            knowledge
            <strong> to help other people</strong> and make this world a better
            place to live for everyone.
          </p>
        </div>

        {/* Photo container */}
        <img
          className="img-about"
          src={require('../../images/profile_pic2.jpg')}
          alt="Juan Sanchez"
        />
      </div>
    </div>
  );
}
