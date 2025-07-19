import React from 'react';
import '../App.css';

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <div className="footer-brand">Marty Shop</div>
      <div className="footer-links">
        <a href="#" className="footer-link">Home</a>
        <a href="#products" className="footer-link">Products</a>
        <a href="#about" className="footer-link">About</a>
        <a href="#contact" className="footer-link">Contact</a>
      </div>
      <div className="footer-copy">&copy; {new Date().getFullYear()} Marty Shop. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
