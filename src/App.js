import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { LeftBar } from './components/leftbar/Leftbar';
import { Projects } from './components/projects/Projects';
import { Footer } from './components/footer/Footer';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Modal } from './components/portals/Modal.jsx';

function App() {
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
    </div>
  );
}

export default App;
