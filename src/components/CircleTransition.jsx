import React from 'react';
import { motion } from 'framer-motion';

export default function CircleTransition({ theme }) {
  return (
    <motion.div
      className="circle-transition"
      initial={{ scale: 0 }}
      animate={{ scale: 20 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.4 }}
      style={{ backgroundColor: theme === 'light' ? '#000' : '#fff' }}
    />
  );
}