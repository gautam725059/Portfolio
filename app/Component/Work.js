"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import imageone from "../Assect/image/imageone.jpg";
import imagetwo from "../Assect/image/imagetwo.jpeg";
import imagethree from "../Assect/image/imagethree.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, projects, and contact details. Built with React, Next.js, Tailwind CSS, and Framer Motion for animations.",
    img: imageone,
    link: "#",
  },
  {
    title: "Medical Institute Website",
    description:
      "A responsive website for a medical institute, including courses, faculty, admission details, and contact information.",
    img: imagetwo,
    link: "#",
  },
  {
    title: "Construction Inventory Management System",
    description:
      "A full-stack web app to manage inventory, materials, and resources for construction sites. Built with MERN stack.",
    img: imagethree,
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-10 py-16">
      <h2 className="text-4xl font-extrabold text-yellow-500 mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col h-full rounded-lg border border-gray-300 dark:border-gray-700 
                       shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-900 p-4"
          >
            {/* Project Image */}
            <Image
              src={project.img}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-md object-cover"
            />

            {/* Project Details */}
            <div className="flex-1 flex flex-col mt-4">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2 flex-1 text-justify">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
