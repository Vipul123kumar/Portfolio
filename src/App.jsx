import Experience from "./section/Experience"
 import './index.css'
import Projects from "./section/Projects"
import Testimonials from "./section/Testimonials"
import Navbar from "./components/Navbar"
import Home from "./section/Home"
import About from "./section/About"
import Skills from "./section/Skills"
import Contact from "./section/Contact"
import Footer from "./section/Footer"
import ParticlesBackground from "./components/ParticlesBackground"
import CustomCursor from "./components/CustomCursor"
export default function App() {
  

  return (
   <div className=" ">
    <CustomCursor/> 
    <ParticlesBackground/>
    <Navbar/>
    <Home/>
    <About/> 
    <Skills/>
    <Projects/>
    <Experience/>
    <Testimonials/>
    <Contact/>
    <Footer/>
   </div>
  )
}

 