import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
     
      
      {/* Social Media Links */}
      <div className="social-media">
        <a href="https://www.linkedin.com/in/ryotabata1010" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/ryodtabata" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://instagram.com/ryotabata_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
