import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Portfolio from './Components/PORTFOLIO/Portfolio';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App" style={{backgroundColor:"black"}}>
    <NavBar />
    <Home />
    <About />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
