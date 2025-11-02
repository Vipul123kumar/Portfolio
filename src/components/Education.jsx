// import React from 'react'
// import EducationCart from './EducationCart'

// const Education = () => {
//   return (
    
//     <div className='min-h-screen bg-gray-800 pb-10 '>
//          <h5 className='text-white text-center text-5xl pt-10'>Education Journey!</h5>
//          <div className='flex justify-between text-white mt-20 px-20'>
//           <div className='space-y-10'> 
//             <EducationCart img=" https://lnct.ac.in/wp-content/uploads/2021/04/lnct-g-logo.png"
//                             collegeName="LNCTE Bhopal"
//                              degree="B.Tech in Computer Science and Engineering"
//                              year="2022-2025"
//                              decript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//                              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//                              skils={["Data Structures", "Algorithms", "Web Development", "Databases"]}
//                              collegelink="https://lnct.ac.in/"
//                             />

//                               <EducationCart img=" https://lnct.ac.in/wp-content/uploads/2021/04/lnct-g-logo.png"
//                             collegeName="LNCTE Bhopal"
//                              degree="B.Tech in Computer Science and Engineering"
//                              year="2022-2025"
//                              decript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//                              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//                              skils={["Data Structures", "Algorithms", "Web Development", "Databases"]}
//                              collegelink="https://lnct.ac.in/"
//                             />
           
            

//           </div>
//           <div className='w-2 bg-white'>middle</div>
//           <div>
//                            <EducationCart img=" https://lnct.ac.in/wp-content/uploads/2021/04/lnct-g-logo.png"
//                             collegeName="LNCTE Bhopal"
//                              degree="B.Tech in Computer Science and Engineering"
//                              year="2022-2025"
//                              decript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//                              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//                              skils={["Data Structures", "Algorithms", "Web Development", "Databases"]}
//                              collegelink="https://lnct.ac.in/"
//                             />

//                                   <EducationCart img=" https://lnct.ac.in/wp-content/uploads/2021/04/lnct-g-logo.png"
//                             collegeName="LNCTE Bhopal"
//                              degree="B.Tech in Computer Science and Engineering"
//                              year="2022-2025"
//                              decript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//                              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//                              skils={["Data Structures", "Algorithms", "Web Development", "Databases"]}
//                              collegelink="https://lnct.ac.in/"
//                             />



//           </div>
//          </div>
//     </div>
//   )
// }

// export default Education


// import React from "react";
// import EducationCart from "./EducationCart";
// import { FaGraduationCap } from "react-icons/fa";

// const Education = () => {
//   const educationData = [
//     {
//       img: "https://lnct.ac.in/wp-content/uploads/2021/04/lnct-g-logo.png",
//       collegeName: "LNCTE Bhopal",
//       degree: "B.Tech in Computer Science and Engineering",
//       year: "2022-2025",
//       decript:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       skils: ["Data Structures", "Algorithms", "Web Development", "Databases"],
//       collegelink: "https://lnct.ac.in/",
//     },
//       {
//       img: "https://lnct.ac.in/wp-content/uploads/2021/04/lnct-g-logo.png",
//       collegeName: "LNCTE Bhopal",
//       degree: "B.Tech in Computer Science and Engineering",
//       year: "2022-2025",
//       decript:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       skils: ["Data Structures", "Algorithms", "Web Development", "Databases"],
//       collegelink: "https://lnct.ac.in/",
//     },
//       {
//       img: "https://lnct.ac.in/wp-content/uploads/2021/04/lnct-g-logo.png",
//       collegeName: "LNCTE Bhopal",
//       degree: "B.Tech in Computer Science and Engineering",
//       year: "2022-2025",
//       decript:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       skils: ["Data Structures", "Algorithms", "Web Development", "Databases"],
//       collegelink: "https://lnct.ac.in/",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-800 pb-10">
//       <h5 className="text-white text-center text-5xl pt-10">
//         Education Journey!
//       </h5>

//       <div className="relative flex justify-between text-white mt-20 px-20">
//         {/* Middle vertical line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-white"></div>

//         {/* Left side */}
//         <div className="w-1/2 pr-10 space-y-20 relative">
//           {educationData.map((edu, index) => (
//             <div key={index} className="relative">
//               <EducationCart {...edu} />
//               {/* Academic Icon on middle line */}
//               <div className="absolute top-1/2 -right-7 transform -translate-y-1/2">
//                 <div className="bg-gray-800 border-4 border-white rounded-full p-3">
//                   <FaGraduationCap className="text-white text-2xl" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right side */}
//         <div className="w-1/2 pl-10 space-y-20 relative">
//           {educationData.map((edu, index) => (
//             <div key={index} className="relative">
//               <EducationCart {...edu} />
//               {/* Academic Icon on middle line */}
//               <div className="absolute top-1/2 -left-7 transform -translate-y-1/2">
//                 <div className="bg-gray-800 border-4 border-white rounded-full p-3">
//                   <FaGraduationCap className="text-white text-2xl" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;

"use client";
import React from "react";
import { motion } from "framer-motion";
import EducationCart from "./EducationCart";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      side: "left",
      img: "https://lnct.ac.in/wp-content/uploads/2021/04/lnct-g-logo.png",
      collegeName: "LNCTE Bhopal",
      degree: "B.Tech in Computer Science & Engineering",
      year: "2022 - 2025",
      decript:
        "Focused on building strong foundations in algorithms, data structures, and full-stack development.",
      skils: ["React", "Node.js", "Data Structures", "MySQL"],
      collegelink: "https://lnct.ac.in/",
    },
    {
      side: "right",
      img: "https://upload.wikimedia.org/wikipedia/en/e/e1/Barkatullah_University_logo.png",
      collegeName: "Barkatullah University",
      degree: "Higher Secondary School (PCM)",
      year: "2020 - 2022",
      decript:
        "Explored core concepts in Physics, Chemistry, and Mathematics. Developed analytical and logical reasoning skills.",
      skils: ["Physics", "Chemistry", "Mathematics"],
      collegelink: "https://www.bubhopal.ac.in/",
    },
    {
      side: "left",
      img: "https://upload.wikimedia.org/wikipedia/en/1/15/Central_Board_of_Secondary_Education_logo.png",
      collegeName: "CBSE Board",
      degree: "Secondary Education (10th)",
      year: "2018 - 2020",
      decript:
        "Completed secondary education with a focus on computer fundamentals and problem solving.",
      skils: ["HTML", "Basic Programming", "Communication Skills"],
      collegelink: "https://www.cbse.gov.in/",
    },
    {
      side: "right",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Computer_icon.svg",
      collegeName: "Online Learning",
      degree: "Self Learning & Certifications",
      year: "2023 - Present",
      decript:
        "Completed several online courses on AI, Machine Learning, and Web3 technologies to stay up to date with modern trends.",
      skils: ["AI", "Machine Learning", "Web3", "Blockchain"],
      collegelink: "https://www.coursera.org/",
    },
  ];

  return (
    <div  id="Education" className="min-h-screen bg-gray-900 pb-20">
      <h5 className="text-white text-center text-5xl pt-10 font-semibold">
        Education Journey!
      </h5>

      <div className="relative mt-20 px-10 sm:px-20">
        {/* Center Line with gradient color */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(255,0,255,0.4)]"></div>

        {/* Timeline */}
        <div className="flex flex-col gap-28 relative">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: edu.side === "left" ? -150 : 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative flex ${
                edu.side === "left"
                  ? "justify-start pr-10"
                  : "justify-end pl-10"
              }`}
            >
              {/* Card */}
              <div className="w-full sm:w-1/2">
                <EducationCart {...edu} />
              </div>

              {/* Middle Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="bg-gradient-to-r from-indigo-500 to-pink-500 p-4 rounded-full shadow-[0_0_25px_rgba(255,0,255,0.5)] border-4 border-white">
                  <FaGraduationCap className="text-white text-3xl" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

