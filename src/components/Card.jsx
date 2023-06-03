import PropTypes from 'prop-types';
import '../styles/projects.css';

export default function Card({
  img,
  title,
  urlLive,
  urlGithub,
  tech,
  techTwo,
  techThree,
  techFour,
}) {
  return (
    <>
      <article className="card">
        <header className="card__header">
          <h2 className="card__header-text">{title}</h2>
        </header>
        <a className="card__anchor" target="_bla" href={urlLive}>
          <img className="img__cards" src={img} alt="rock-paper-scissors" />
        </a>
        <h2 className="technologies">Technologies</h2>
        <ul className="tags">
          <a
            target="_blank"
            rel="noreferrer"
            href={urlGithub}
            className="tags__tech tags__tech--github"
          >
            {tech}
          </a>
          <li className="tags__tech">{techTwo}</li>
          <li className="tags__tech">{techThree}</li>
          <li className="tags__tech">{techFour}</li>
        </ul>
      </article>
    </>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tech: PropTypes.node.isRequired,
  techTwo: PropTypes.node.isRequired,
  techThree: PropTypes.node.isRequired,
  techFour: PropTypes.node.isRequired,
  urlLive: PropTypes.string.isRequired,
  urlGithub: PropTypes.string.isRequired,
};
