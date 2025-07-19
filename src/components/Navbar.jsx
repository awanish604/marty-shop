import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import viteLogo from '/vite.svg';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  // Remove navigate('/cart') and use onCartClick
  return (
    <>
      <header className="navbar-header">
        <div className="navbar-container">
          <div className="navbar-logo-group">
            <span className="navbar-logo-img" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '2.2rem',
              width: '2.2rem',
              marginRight: '0.7rem',
              background: 'linear-gradient(135deg, #fbbf24 0%, #2563eb 100%)',
              borderRadius: '50%',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.1rem',
              letterSpacing: '1px',
              boxShadow: '0 2px 8px #0001'
            }}>MS</span>
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
            <button onClick={onCartClick} className="icon-btn" aria-label="Open cart" style={{position:'relative'}}>
              <ShoppingCart className="icon" color="#FFD600" />
              {getTotalItems() > 0 && (
                <span style={{position:'absolute',top:'-8px',right:'-8px',background:'#ef4444',color:'#fff',borderRadius:'50%',fontSize:'0.8rem',padding:'2px 6px',fontWeight:600}}>
                  {getTotalItems()}
                </span>
              )}
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
