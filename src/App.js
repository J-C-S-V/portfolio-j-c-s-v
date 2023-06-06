import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeftBar from './components/Leftbar';
import Projects from './components/Projects';
import ProjectsTwo from './components/ProjectsTwo';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [modal1, setModal] = useState(false);
  return (
    <div className="App" id="jump-home">
      <Navbar changeState={setModal} />
      <Hero />
      <Projects />
      <ProjectsTwo />
      <About />
      <Skills />
      <Footer />
      <LeftBar />
      <Modal state={modal1} changeState={setModal}>
        <Contenido>
          <svg
            onClick={() => setModal(!modal1)}
            id="close"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x "
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          <Boton onClick={() => setModal(!modal1)}>Home</Boton>
          <Boton
            onClick={() => {
              setModal(!modal1);
              window.location.href = '#jump-projects';
            }}
          >
            Projects
          </Boton>
          <Boton
            onClick={() => {
              setModal(!modal1);
              window.location.href = '#jump-about';
            }}
          >
            About
          </Boton>
          <Boton
            onClick={() => {
              setModal(!modal1);
              window.location.href = '#jump-contact';
            }}
          >
            Contact
          </Boton>
        </Contenido>
      </Modal>
    </div>
  );
}

export default App;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  width: 200%;
  color: #000;
  svg {
    color: black;
    align-self: flex-end;
    margin: 0 -10px 4px 0;
    width: 2rem;
    height: 1.3rem;
  }
`;

const Boton = styled.button`
  padding: 10px 20px;
  background: var(--black-bg-color);
  color: #fff;
  border: none;
  border-bottom: 3px solid white;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-align: left;

  // transition: all 0.3s ease;
`;
