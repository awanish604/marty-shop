import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Discover Amazing Products at <span className="highlight">Marty Shop</span></h1>
          <p>Your one-stop destination for premium quality products. From cutting-edge electronics to stylish accessories, we have everything you need.</p>
          <div className="hero-features">
            <div className="hero-feature">
              <Star size={20} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
              <span>4.8/5 Customer Rating</span>
            </div>
            <div className="hero-feature">
              <span style={{ height: '8px', width: '8px', background: '#22c55e', borderRadius: '50%', display: 'inline-block' }}></span>
              <span>Free Shipping</span>
            </div>
            <div className="hero-feature">
              <span style={{ height: '8px', width: '8px', background: '#22c55e', borderRadius: '50%', display: 'inline-block' }}></span>
              <span>30-Day Returns</span>
            </div>
          </div>
          <div className="hero-btns">
            <button className="hero-btn-primary">
              Shop Now <ArrowRight size={18} />
            </button>
            <button className="hero-btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-product-card">
          <img
            src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Featured Product"
            className="hero-product-img"
          />
          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="hero-product-title">Premium Headphones</span>
              <span className="hero-product-badge">25% OFF</span>
            </div>
            <div className="hero-product-desc">High-quality wireless audio experience</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="hero-product-pricing">
                <span style={{ color: '#2563eb', fontWeight: 700 }}>$299</span>
                <span className="hero-product-old">$399</span>
              </div>
              <div className="hero-product-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
                ))}
                <span className="hero-product-rating-count">(256)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
