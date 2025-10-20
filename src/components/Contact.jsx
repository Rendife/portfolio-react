import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
    >
      <h2>Hubungi Saya</h2>
      <p>Silakan hubungi saya melalui:</p>
      <div className="contact-buttons">
        <a href="https://wa.me/6289961434023" target="_blank" className="whatsapp">WhatsApp</a>
        <a href="mailto:rendi@gmail.com" className="email">Email</a>
      </div>
    </motion.section>
  );
}