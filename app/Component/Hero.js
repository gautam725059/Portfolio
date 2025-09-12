"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation"; 
import { ChevronDown } from "lucide-react"; 
import gautam from "../Assect/Image/Gautam.png";


export default function Hero() {
  return (
    <section
      id="Hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-10 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="text-center max-w-3xl relative z-10">
        
        <div className="relative inline-block group">
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-30 blur-2xl animate-pulse"></div>

          <Image
            src={gautam}
            alt="Gautam Gupta - Full Stack Developer"
            className="relative w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 
                       rounded-full mx-auto mb-6 shadow-2xl border-4 border-white object-cover
                       transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-blue-400/50 group-hover:shadow-2xl"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Hello,{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            I&apos;m Gautam Gupta
          </span>
        </h1>

        {/* Typewriter Effect */}
        <div className="mt-3 text-lg sm:text-xl text-gray-700 font-medium">
          <TypeAnimation
            sequence={[
              "Full Stack Developer 🚀",
              2000,
              "React & Next.js Specialist ⚛",
              2000,
              "UI/UX Enthusiast 🎨",
              2000,
              "Open Source Contributor 🌍",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 mt-4 leading-relaxed">
          Building{" "}
          <span className="font-semibold text-gray-900">
            scalable, modern and user-friendly
          </span>{" "}
          web applications with performance & creativity.
        </p>

        {/* Download Resume Button */}
        <a
          href="/Gautam_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-3 rounded-xl bg-white/30 backdrop-blur-md border border-white/50 
                     text-blue-700 font-semibold shadow-lg hover:scale-105 hover:bg-blue-600 hover:text-white 
                     transition-all duration-300"
        >
          Download Resume
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8 text-2xl text-gray-600">
          <a
            href="https://github.com/gautam725059"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gautam-kumar-6b57bb345/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          
         
        </div>
      </div>

      {/* Background Accent Shape */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  );
}
