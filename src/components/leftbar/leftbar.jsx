import React from 'react';
import './leftbar.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

export function LeftBar() {
  return (
    <div className="left-bar">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/juan-carlos-sanchez-vargas-a308b014b/"
      >
        <AiFillLinkedin />
      </a>
      <a rel="noreferrer" target="_blank" href="https://github.com/J-C-S-V">
        <AiFillGithub />
      </a>
      <a rel="noreferrer" target="_blank" href="https://twitter.com/juansan0">
        <AiOutlineTwitter />
      </a>
    </div>
  );
}
