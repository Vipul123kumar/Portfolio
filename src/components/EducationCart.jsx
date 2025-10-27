import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa"; // example icon
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
const EducationCart = (props) => {
      const handleIconClick = () => {
    // Example: open college website or perform an action
    window.open(props.collegelink,"_blank");
  };
  return (
    <div className='h-100 w-120 bg-gray-700 p-5 rounded-lg '>
        <div className='flex  mx-auto  gap-5 items-center mb-4'>
             <img src={props.img} alt="college logo" className='h-14 bg-white rounded p-1 '/>
             <div className='pt-4 '>
                <h3 className='text-white text-5 flex gap-2 hover:text-blue-700 '>{props.collegeName} 
                    
                  <FaExternalLinkAlt
                  className="text-blue-400 cursor-pointer hover:text-blue-600 transition"
                   onClick={handleIconClick}
                      />    
                    
                 </h3>
                <p className='text-blue-700'>{props.degree}</p>
                {/* <p>{props.year}</p> */}
                <p className="text-white flex items-center gap-2">
      <FaRegCalendarAlt className="text-blue-400" />
      {props.year}
    </p>
             </div>
        </div>
        <div>
            <p className="text-gray-300 flex items-start gap-2 leading-relaxed">
      <MdDescription className="text-blue-400 h-7 w-9" />
      {props.decript}
    </p>

            <div>
                {props.skils.map((skill, index) => (
                    <span key={index} className="inline-block bg-blue-500 text-white rounded-full px-3 py-1  text-sm  font-semibold mr-2 mb-2">
                        {skill}
                    </span>
                ))} 
            </div>
        </div>

    </div>
  )
}

export default EducationCart
