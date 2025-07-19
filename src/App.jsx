
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProductPage />
          </>
        } />
        <Route path="/cart" element={<Cart isOpen={true} onClose={null} />} />
      </Routes>
    </Router>
  );
}

export default App;


