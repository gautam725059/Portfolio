"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full px-6 py-16 bg-gradient-to-b from-indigo-950 to-black"
    >
      {/* Overlay effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-white mb-6">Contact</h2>
        <p className="text-gray-300 mb-10">
          Interested in working together or just want to say hello? Drop me a
          message or connect on my socials below.
        </p>

        {/* Contact Info */}
        <div className="mb-10">
          <p className="text-lg text-white font-semibold">
            📧 Email:{" "}
            <a
              href="mailto:guptagautam7250@gmail.com"
              className="text-indigo-400 hover:underline"
            >
            guptagautam7250@gmail.com
            </a>
          </p>
          <p className="text-lg text-white font-semibold mt-2">
            📞 Phone:{" "}
            <a
              href="tel:+917250591587"
              className="text-indigo-400 hover:underline"
            >
              +91 7250591587
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 max-w-xl mx-auto text-left">
          <div className="mb-4">
            <label className="block text-gray-200 mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-200 mb-2 font-medium">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg transition-transform transform hover:scale-105"
          >
            Send Message ✨
          </button>
        </form>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-3xl text-gray-300 mt-10">
          <a
            href="https://github.com/gautam725059"
            className="hover:text-white hover:scale-125 transform transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/gautam-kumar-6b57bb345/"
            className="hover:text-blue-500 hover:scale-125 transform transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/_gautam.official20?igsh=MTh0Nnd0ZHgxYWMxeA%3D%3D&utm_source=qr"
            className="hover:text-pink-500 hover:scale-125 transform transition"
          >
            <SiInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/1CFrPrqLAH/?mibextid=wwXIfr"
            className="hover:text-blue-600 hover:scale-125 transform transition"
          >
            <SiFacebook />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;