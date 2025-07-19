import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import '../App.css';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="navbar-header">
        <div className="navbar-container">
          <div className="navbar-logo-group">
            <span className="navbar-logo">Marty Shop</span>
          </div>
          <nav className="navbar-links desktop">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="navbar-link">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="navbar-actions">
            <button onClick={onCartClick} className="icon-btn" aria-label="Open cart">
              <ShoppingCart className="icon" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-btn"
            >
              <span className="menu-icon">☰</span>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="navbar-mobile">
            <nav className="navbar-links mobile">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="navbar-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
