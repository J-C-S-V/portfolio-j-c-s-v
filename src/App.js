import './App.css';
import { NavBarDiv } from './components/navbar/navbar.jsx';
import { Hero } from './components/hero/hero.jsx';
import { LeftBar } from './components/leftbar/leftbar.jsx';
import { Projects } from './components/projects/projects.jsx';
import { Footer } from './components/footer/footer.jsx';
import { About } from './components/about/about.jsx';
import { Skills } from './components/skills/skills.jsx';

function App() {
  return (
    <div className="App">
      <NavBarDiv />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Footer />
      <LeftBar />
    </div>
  );
}

export default App;
