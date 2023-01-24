import './App.css';
import { NavBarDiv } from './components/navbar/navbar.jsx';
import { Hero } from './components/hero/hero.jsx';
import { LeftBar } from './components/leftbar/leftbar.jsx';

function App() {
  return (
    <div className="App">
      <LeftBar />
      <NavBarDiv />
      <Hero />
    </div>
  );
}

export default App;
