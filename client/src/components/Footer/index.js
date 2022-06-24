import React from 'react';
import './style.css'

const Footer = () => {
  return (
    <footer className="">
      <div className="container">
        &copy;{new Date().getFullYear()} by Cannibal Coders
      </div>
    </footer>
  );
};

export default Footer;
