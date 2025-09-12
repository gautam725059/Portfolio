"use client";
import React from "react";
import { motion } from "framer-motion";

// Import icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs, SiGithub } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS / Tailwind", icon: <SiTailwindcss className="text-sky-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: "React / Next.js", icon: <SiNextdotjs className="text-gray-800 dark:text-white text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-600 dark:text-gray-300 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
    { name: "Git / GitHub", icon: <SiGithub className="text-black dark:text-white text-4xl" /> },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-10 py-16">
      <h2 className="text-4xl font-extrabold text-yellow-500 mb-10">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 dark:border dark:border-gray-700
                       shadow rounded-xl p-6 hover:scale-105 hover:shadow-xl 
                       transition duration-300 flex flex-col items-center justify-center"
          >
            {skill.icon}
            <h3 className="mt-3 font-bold text-gray-800 dark:text-gray-100">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
