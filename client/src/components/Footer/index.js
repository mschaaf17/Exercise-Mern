import React from 'react';
import './style.css'

const Footer = () => {
  return (
    <footer className="">
      <div className="footer-container">
        &copy;{new Date().getFullYear()} by Cannibal Coders
      </div>
    </footer>
  );
};

export default Footer;
