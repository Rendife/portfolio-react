import React from 'react';

export default function Navbar({ toggleTheme, setPage, page }) {
  return (
    <nav className="navbar">
      <h1>Rendi Febriansyah</h1>
      <div className="nav-links">
        <button onClick={() => setPage('home')} className={page==='home'?'active':''}>Home</button>
        <button onClick={() => setPage('contact')} className={page==='contact'?'active':''}>Contact</button>
        <button onClick={toggleTheme}>🌓</button>
      </div>
    </nav>
  );
}