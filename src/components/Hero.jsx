import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
    >
      <h2>Halo, Saya <span>Rendi Febriansyah</span></h2>
      <p>Seorang desainer grafis dengan gaya modern dan kreatif.</p>
      <button>View My Work</button>
    </motion.section>
  );
}