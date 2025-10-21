import React, { useEffect, useState ,useRef} from 'react'
import {FiMenu} from "react-icons/fi";
import Logo from "../assets/Logo.png";
import OverlayMenu from './OverlayMenu';
export default function Navbar(){
    const [menuopen,setMenuopen]=useState(false);
    const [visible,setVisible]=useState(true);
    const [forcevisible,setForcevisible]=useState(false);
    const lastScrollY= useRef(0);
    const timerId=useRef(null);
    useEffect(
        ()=>
        {
          const homeSection=document.querySelector("#home");
            const observer=new IntersectionObserver(
                ([entry])=>{
                    if(entry.isIntersecting)
                    {
                        setForcevisible(true);
                        setVisible(true);

                    }
                    else{
                        setForcevisible(false)

                    }   
                },{threshold: 0.1}
            )
            if(homeSection) observer.observe(homeSection);
            return ()=>{
                if(homeSection) observer.unobserve(homeSection);

            };
        },[]
    )
    useEffect(()=>{
        const handleScroll=()=>
        {
            if(forcevisible)
            {
                setVisible(true);
                return
            }
            const currentScrollY=window.scrollY;
            if(currentScrollY>lastScrollY.current)
            {
                setVisible(false)
            }
            else{
                setVisible(true);
                if(timerId.current) clearTimeout(timerId.current);
                timerId.current=setTimeout(()=>{
                    setVisible(false)
                },3000)
            }
            lastScrollY.current=currentScrollY;

        }
        window.addEventListener("scroll",handleScroll,{passive:true})
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
            if(timerId.current) clearTimeout(timerId.current)
        }
    },{forcevisible})

  return (
    <div>
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0":"translate-y-full"}`}>
               <div className='flex items-center space-x-2'>
                <img src={Logo} alt='logo' className='w-8 h-8' />
                <div className='text-2xl font-bold text-white '>Vipul</div>
               </div>

               <div className='block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2'>
                    <button onClick={()=>setMenuopen(true)}
                        className='text-white text-3xl focus:outline-none'>
                        <FiMenu size={24}/>
                    </button>
               </div>
               <div className='hidden lg:block '>
                   <a href="#contact" className='bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300'> Reach Out</a>
               </div>
            </nav>
            <OverlayMenu isOpen={menuopen} onClose={()=>setMenuopen(false)}/>
    </div>
  )
}

