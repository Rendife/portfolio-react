import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import CircleTransition from './components/CircleTransition';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [theme, setTheme] = useState('light');
  const [page, setPage] = useState('home');
  const [transitioning, setTransitioning] = useState(false);

  const toggleTheme = () => {
    setTransitioning(true);
    setTimeout(() => {
      setTheme(theme === 'light' ? 'dark' : 'light');
      setTransitioning(false);
    }, 400);
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar toggleTheme={toggleTheme} setPage={setPage} page={page} />
      <AnimatePresence mode="wait">
        {page === 'home' ? <Hero key="home" /> : <Contact key="contact" />}
      </AnimatePresence>
      {transitioning && <CircleTransition theme={theme} />}
    </div>
  );
}

export default App;