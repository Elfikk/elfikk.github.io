import './App.css';
import SiteNavbar from './navbar/SiteNavbar';
import Intro from './intro/Intro';
import About from './about/About';
import Projects from './projects/Projects';
import Shows from './shows/Shows';

function App() {
  return (
    <div className="App">
      <div className="navbarDiv">
        <SiteNavbar></SiteNavbar>
      </div>
      <div className="content">
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Shows></Shows>
      </div>
    </div>
  );
}

export default App;
