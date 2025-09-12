"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="text-center py-6 border-t border-gray-300 dark:border-gray-700 mt-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-gray-600 dark:text-gray-400"
      >
        2025 Gautam. All Rights Reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
