import './App.css';
import SiteNavbar from './navbar/SiteNavbar';
import Intro from './intro/Intro';
import About from './about/About';
import Projects from './projects/Projects';

function App() {
  return (
    <div className="App">
      <SiteNavbar></SiteNavbar>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
