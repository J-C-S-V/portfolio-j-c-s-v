import './App.css';
import { NavBarDiv } from './components/navbar/navbar.jsx';
import { Hero } from './components/hero/hero.jsx';
import { LeftBar } from './components/leftbar/leftbar.jsx';
import { Projects } from './components/projects/projects.jsx';

function App() {
  return (
    <div className="App">
      <LeftBar />
      <NavBarDiv />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
