import Experience from "./section/Experience"
 import './index.css'
import Projects from "./components/Projects"

import Navbar from "./components/Navbar"
import Hero from "./components/Home"
import Home from "./section/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ParticlesBackground from "./components/ParticlesBackground"
import CustomCursor from "./components/CustomCursor"
import Education from "./components/Education"
export default function App() {
  

  return (
   <div className="font-sans ">
    <Navbar />
      <Home />
     <Education />
     
      <Skills />
       <Projects/>
     
      <Contact />
      <Footer />
   </div>
  )
}

 