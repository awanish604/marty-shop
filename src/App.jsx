
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  // Pass open/close handlers to Navbar and Cart
  return (
    <Router>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProductPage />
            <Footer />
          </>
        } />
      </Routes>
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </Router>
  );
}

export default App;


