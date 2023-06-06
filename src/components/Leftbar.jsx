import '../styles/leftbar.css';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

export default function LeftBar() {
  return (
    <div className="left-bar">
      <a
        className="left-bar__anchor"
        title="LinkedIn"
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/sanchez-juan-carlos/"
      >
        <AiFillLinkedin />
      </a>
      <a
        className="left-bar__anchor"
        title="GitHub"
        rel="noreferrer"
        target="_blank"
        href="https://github.com/J-C-S-V"
      >
        <AiFillGithub />
      </a>
      <a
        className="left-bar__anchor"
        title="Twitter"
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/juansan0"
      >
        <AiOutlineTwitter />
      </a>
    </div>
  );
}
