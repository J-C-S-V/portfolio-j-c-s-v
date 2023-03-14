import React, { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { LeftBar } from './components/leftbar/Leftbar';
import { Projects } from './components/projects/Projects';
import { Footer } from './components/footer/Footer';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Modal } from './components/portals/Modal.jsx';
import styled from 'styled-components';
import './App.css';

function App() {
  const [modal1, setModal] = useState(false);
  return (
    <div className="App" id="jump-home">
      <Navbar cambiarEstado={setModal} />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Footer />
      <LeftBar />
      {/* <Modal /> */}
      <Modal estado={modal1} cambiarEstado={setModal}>
        <Contenido>
          {/* <h1>Ventana modal</h1>
          <p>Reutilizable y con opciones de personalización</p> */}
          <svg
            id="close"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x "
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          <Boton onClick={() => setModal(!modal1)}>Home</Boton>
          <Boton onClick={() => setModal(!modal1)}>Projects</Boton>
          <Boton onClick={() => setModal(!modal1)}>About</Boton>
          <Boton onClick={() => setModal(!modal1)}>Contact</Boton>
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
    color: white;
    background-color: black;
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
