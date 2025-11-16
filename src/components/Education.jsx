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
      img: "data:image/jpeg;base64,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",
      collegeName: "Goverment Polytechnic College Koderma",
      degree: "Diploma(Computer Engenering)",
      year: "2019 - 2022",
      decript:
        "Explored core concepts in Physics, Chemistry, and Mathematics. Developed analytical and logical reasoning skills.",
      skils: ["Physics", "Chemistry", "Mathematics"],
      collegelink: "https://gp-koderma.org/",
    },
    {
      side: "left",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtEdUvfyxp1-JfmM-m1fTAwQsRLLtuzg8mQ&s",
      collegeName: "IUM Inter College Patan",
      degree: "Secondary Education (10th)",
      year: "2018 - 2020",
      decript:
        "Completed secondary education with a focus on building fundamentals of core subjects.",
      skils: ["Physics", "Math", "Communication Skills"],
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

