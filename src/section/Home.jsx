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

       <div className='flex h-full  mx-auto justify-center items-center gap-10 '>
             <div className='h-screen text-white w-1/2 flex flex-col items-start gap-6  mx-9  mt-2 '>
                      <p className=' flex justify-between  bg-gray-600 border-2 mt-10 p-2 rounded-2xl'>  Full-stack Developer</p>
                       <p className=' flex justify-between  bg-gray-600 p-2 rounded-2xl border '>Full-stack Developer</p>
                       <h4 className='text-blue-600 text-7xl font-bold leading-8'> <p className='text-white text-7xl'> Vipul</p> <br/> Kumar</h4>
                       <p>I biild web application</p>
                       <p className='text-normal leading-7 text-[20px]'>Hello! I'm a Full-Stack Developer from Bhopal,
                         India. I specialize in building modern web applications using
                         <span className='text-blue-600'> React.js, Node.js, Express.js, Next.js </span> and  <span className='text-blue-600'> Tailwind CSS.</span>
                           I enjoy solving complex problems and creating seamless user experiences.
                        </p>
                        <div className='flex gap-10 '>
                               <button className='  text-white bg-blue-600 p-2 rounded '>
                  View Project
                </button>
                 
                 <button className=' bg-white text-green-500 p-2 rounded '>
                  Contact Me!
                 </button>

                        </div>
              

             </div>
             <div className='w-1/2 border flex justify-center items-center '>
                <img src={image} alt='profile' className='w-100 h-100 rounded-2xl  '/>
             </div>
       </div>
     
   </section>
  )
}

