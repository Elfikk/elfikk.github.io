// import logo from './logo.svg';
import './App.css';
import SiteNavbar from './navbar/SiteNavbar';
import Intro from './intro/Intro';
import About from './about/About';

function App() {
  return (
    <div className="App">
      <SiteNavbar></SiteNavbar>
      <Intro></Intro>
      <About></About>
    </div>
  );
}

export default App;
