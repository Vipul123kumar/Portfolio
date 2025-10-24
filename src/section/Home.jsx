import React, { useMemo, useState } from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import image from '../assets/imageicon.png';

export default function Home  (){
    const roles=useMemo(()=>["web Developer","Fronted Developer", "Software Enggg"],[])
    const [index , setIndex]=useState(0)
    const [subIndex,SetsubIndex]=useState(0)
    const [deleting,setDeleting]=useState(false)

  return (
   <section id='home' className='w-full h-screen relative bg-black overflow-hidden '>
     <ParticlesBackground/>
     <div className='absolute inset-0'>
           <div className='absolute -top-32 -left-32
            w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw]
            sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px]
            rounded-full bg-gradient-to-r from [#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-30 sm:opacity-20 md:opacity-10
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse
           '>

           </div>
           <div className='absolute bottom-0 right-0
            w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw]
            sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px]
            rounded-full bg-gradient-to-r from [#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-30 sm:opacity-20 md:opacity-10
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse delay-500 
           '> 

           </div>
     </div>

       <div className='flex '>
             <div className='h-screen '>
                      <p className='h-3 flex justify-between mx-1 bg-gray-600'>Full-stack Developer</p>
                       <p className='h-3 flex justify-between mx-1 bg-gray-600'>Full-stack Developer</p>
                       <h4>Vipul Kumar</h4>
                       <p>I biild web application</p>
                       <p>Hello! I'm a Full-Stack Developer from Bhopal,
                         India. I specialize in building modern web applications using
                          React.js, Node.js, Express.js, Next.js, and Tailwind CSS.
                           I enjoy solving complex problems and creating seamless user experiences.
                        </p>
                <button>
                  View Project
                </button>
                 
                 <button className=''>
                  Contact Me!
                 </button>

             </div>
             <div>
                <img src={image} alt='profile' className='w-80 h-80 '/>
             </div>
       </div>
     
   </section>
  )
}

