
 import './index.css';
  import Home from "./section/Home";

import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";  
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

 