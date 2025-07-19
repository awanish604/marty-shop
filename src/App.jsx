
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <ProductPage />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default App;


