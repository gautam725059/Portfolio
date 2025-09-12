"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import profileImage from "../Assect/Image/Gautam.png";

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 py-20">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-12">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center relative group"
        >
          {/* Glowing Background */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-yellow-400/30 blur-3xl animate-pulse"></div>

          <Image
            src={profileImage}
            alt="Gautam Gupta"
            className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-white transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-4"
        >
          <p className="text-gray-700 dark:text-gray-300 text-justify text-lg md:text-xl">
            Hello! I am <span className="font-semibold text-yellow-500">Gautam Gupta</span>, a passionate Software Developer based in Jharkhand, India. I build modern, responsive, and user-friendly web applications using React, Next.js, Node.js, and Tailwind CSS.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-justify text-lg md:text-xl">
            I love solving complex problems, learning new technologies, and crafting digital experiences that delight users. Whether it&apos;s front-end design or full-stack development, I strive to deliver elegant and performant solutions.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-justify text-lg md:text-xl">
            When I&apos;m not coding, I enjoy exploring tech communities, contributing to open-source, and staying updated with the latest trends in web development.
          </p>

          
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;
