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
    // useEffect(
    //     ()=>
    //     {
    //       const homeSection=document.querySelector("#home");
    //         const observer=new IntersectionObserver(
    //             ([entry])=>{
    //                 if(entry.isIntersecting)
    //                 {
    //                     setForcevisible(true);
    //                     setVisible(true);

    //                 }
    //                 else{
    //                     setForcevisible(false)

    //                 }   
    //             },{threshold: 0.1}
    //         )
    //         if(homeSection) observer.observe(homeSection);
    //         return ()=>{
    //             if(homeSection) observer.unobserve(homeSection);

    //         };
    //     },[]
    // )
    // useEffect(()=>{
    //     const handleScroll=()=>
    //     {
    //         if(forcevisible)
    //         {
    //             setVisible(true);
    //             return
    //         }
    //         const currentScrollY=window.scrollY;
    //         if(currentScrollY>lastScrollY.current)
    //         {
    //             setVisible(false)
    //         }
    //         else{
    //             setVisible(true);
    //             if(timerId.current) clearTimeout(timerId.current);
    //             timerId.current=setTimeout(()=>{
    //                 setVisible(false)
    //             },3000)
    //         }
    //         lastScrollY.current=currentScrollY;

    //     }
    //     window.addEventListener("scroll",handleScroll,{passive:true})
    //     return ()=>{
    //         window.removeEventListener("scroll",handleScroll)
    //         if(timerId.current) clearTimeout(timerId.current)
    //     }
    // },{forcevisible})

  return (
   
<div className="sticky top-0 bg-white shadow-md flex justify-between items-center px-6 py-3 z-50">
  <h5 className="font-bold text-xl">V</h5>
  <div>
    <ul className="flex space-x-6 text-gray-700 font-medium">
      <li><a href="#home" className="hover:text-teal-600">Home</a></li>
      <li><a href="#about" className="hover:text-teal-600">About</a></li>
      <li><a href="#services" className="hover:text-teal-600">Services</a></li>
      <li><a href="#contact" className="hover:text-teal-600">Contact</a></li>
    </ul>
  </div>
</div>
  )
}
