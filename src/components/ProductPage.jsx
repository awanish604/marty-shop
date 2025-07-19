import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './ProductPage.css';

const products = [
  {
    id: 5,
    name: 'Leather Wallet',
    desc: 'Handcrafted genuine leather wallet with RFID protection and multiple compartments.',
    price: 49.99,
    oldPrice: 69.99,
    image: 'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.7,
    reviews: 120,
    badge: ['FEATURED'],
    category: 'Accessories',
  },
  {
    id: 6,
    name: 'Classic Sunglasses',
    desc: 'Timeless UV-protected sunglasses with a durable frame, perfect for any occasion.',
    price: 59.99,
    oldPrice: 89.99,
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.8,
    reviews: 78,
    badge: ['SALE'],
    category: 'Accessories',
  },
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    desc: 'High-quality wireless headphones with noise cancellation and premium sound.',
    price: 299.99,
    oldPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.8,
    reviews: 256,
    badge: ['SALE', 'FEATURED'],
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    desc: 'Advanced fitness tracking with heart rate monitoring and GPS.',
    price: 199.99,
    oldPrice: 249.99,
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.6,
    reviews: 189,
    badge: ['FEATURED'],
    category: 'Electronics',
  },
  {
    id: 3,
    name: 'Professional Camera Lens',
    desc: 'Professional-grade camera lens with superior optical quality and image stabilization.',
    price: 899.99,
    oldPrice: 1199.99,
    image: 'https://images.pexels.com/photos/51383/photography-camera-subjects-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.9,
    reviews: 67,
    badge: ['SALE', 'FEATURED'],
    category: 'Electronics',
  },
  {
    id: 4,
    name: 'Organic Cotton T-Shirt',
    desc: 'Comfortable and sustainable organic cotton t-shirt in various colors.',
    price: 29.99,
    oldPrice: 39.99,
    image: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.5,
    reviews: 94,
    badge: [],
    category: 'Clothing',
  },
  {
    id: 7,
    name: 'Denim Jeans',
    desc: 'Classic fit denim jeans made from premium cotton for all-day comfort.',
    price: 59.99,
    oldPrice: 79.99,
    image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.6,
    reviews: 110,
    badge: ['FEATURED'],
    category: 'Clothing',
  },
  {
    id: 8,
    name: 'Lightweight Hoodie',
    desc: 'Soft and breathable hoodie, perfect for layering in any season.',
    price: 49.99,
    oldPrice: 69.99,
    image: 'https://images.pexels.com/photos/532221/pexels-photo-532221.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.7,
    reviews: 87,
    badge: ['SALE'],
    category: 'Clothing',
  },
];

const ProductPage = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Clothing', 'Accessories', 'Home'];
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="products-section" id="products">
      <div className="products-container">
        <h2 className="products-title"><span style={{color:'#222'}}>Our </span><span style={{color:'#2563eb'}}>Products</span></h2>
        <p style={{textAlign:'center', color:'#555', fontSize:'1.1rem', marginBottom:'2rem'}}>Discover our carefully curated collection of premium products, each selected for quality and value.</p>
        <div className="products-filters" style={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'center',marginBottom:'2.5rem'}}>
          {categories.map((cat,idx) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "filter-btn active" : "filter-btn"}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-img" />
              <div className="product-info">
                <div className="product-header">
                  <div style={{display:'flex',gap:'0.5rem'}}>
                    {product.badge && Array.isArray(product.badge) && product.badge.map((b, i) => (
                      <span key={i} className={b==='SALE'?"product-badge sale":"product-badge featured"}>{b}</span>
                    ))}
                  </div>
                </div>
                <div style={{color:'#2563eb',fontSize:'0.98rem',fontWeight:500,marginBottom:'0.2rem'}}>{product.category}</div>
                <div className="product-rating" style={{marginBottom:'0.2rem'}}>
                  <span style={{color:'#fbbf24',fontWeight:600}}>&#9733;</span> {product.rating} <span className="product-rating-count">({product.reviews})</span>
                </div>
                <span className="product-name" style={{fontWeight:'bold',fontSize:'1.1rem',color:'#222',display:'block',marginBottom:'0.2rem'}}>{product.name}</span>
                <div className="product-desc">{product.desc}</div>
                <div className="product-pricing">
                  <span className="product-price">₹{product.price.toFixed(2)}</span>
                  <span className="product-old">₹{product.oldPrice.toFixed(2)}</span>
                </div>
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
