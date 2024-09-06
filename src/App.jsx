import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'

import Navbar from './components/Navbar'

import HomeContent from "./components/HomeContent";
import Skills from "./components/Skills";

import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  return (
    <>

      <Navbar />
      <HomeContent />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
