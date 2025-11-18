"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";

const Skills = () => {
  const icons = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiPrisma />, name: "Prisma" },
  ];

  return (
    <div
      id="Skills"
      className="w-full min-h-screen bg-[#030913] text-white flex flex-col items-center justify-center py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-semibold text-teal-400 mb-8"
      >
        Skills & Expertise
      </motion.h2>

      {/* Sub text */}
      <p className="text-gray-400 mb-16 text-center max-w-xl">
        My technical proficiency across various technologies and platforms.
      </p>

      {/* 3D Rotating Circle */}
      <div className="relative w-[400px] h-[400px] perspective-1000">
        <div className="absolute inset-0 transform-style-preserve-3d animate-[spin3D_20s_linear_infinite]">
          {icons.map((item, i) => {
            const angle = (i / icons.length) * 360;
            return (
              <div
                key={i}
                className="absolute flex flex-col items-center justify-center text-teal-400 text-4xl"
                style={{
                  transform: `
                    rotateY(${angle}deg)
                    translateZ(160px)
                  `,
                }}
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#0a182e] border border-teal-500 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <p className="mt-2 text-sm text-gray-300">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes spin3D {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default Skills;
