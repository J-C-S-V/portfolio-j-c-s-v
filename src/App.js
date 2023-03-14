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
  const [modal1, setModal] = useState(true);

  return (
    <div className="App" id="jump-home">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Footer />
      <LeftBar />
      <Modal />
      {/* <Modal estado={modal1} cambiarEstado={setModal}>
        <Contenido>
          <h1>Ventana modal</h1>
          <p>Reutilizable y con opciones de personalización</p>
          <Boton onClick={() => setModal(!modal1)}>Dale!</Boton>
        </Contenido>
      </Modal> */}
    </div>
  );
}

export default App;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  text-align: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;

const Boton = styled.button`
  padding: 10px 20px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
`;
