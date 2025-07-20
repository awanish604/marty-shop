import React, { useState, useEffect } from 'react';
import { ShoppingBag, Star, Truck, Shield, Heart, ArrowRight, Menu, X } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProducts = [
    { id: 1, name: "Premium Wireless Headphones", price: "$199", originalPrice: "$249", rating: 4.9, image: "🎧" },
    { id: 2, name: "Smart Fitness Watch", price: "$299", originalPrice: "$399", rating: 4.8, image: "⌚" },
    { id: 3, name: "Luxury Leather Bag", price: "$159", originalPrice: "$199", rating: 4.9, image: "👜" },
    { id: 4, name: "Wireless Charging Pad", price: "$49", originalPrice: "$79", rating: 4.7, image: "🔋" }
  ];

  const testimonials = [
    { name: "Sarah Johnson", review: "Amazing quality and fast shipping! Will definitely shop again.", rating: 5 },
    { name: "Mike Chen", review: "Best customer service I've experienced. Highly recommended!", rating: 5 },
    { name: "Emma Davis", review: "Love the product variety and competitive prices.", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white" style={{width: '100vw', overflowX: 'hidden'}}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20' : 'bg-transparent'}`} style={{width: '100vw'}}>
        <div className="max-w-none px-4 sm:px-6 lg:px-8" style={{width: '100%'}}>
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Marty-Shop
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              <a href="#products" className="hover:text-purple-400 transition-colors">Products</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mb-4">
              <div className="px-4 py-2 space-y-2">
                <a href="#home" className="block py-2 hover:text-purple-400 transition-colors">Home</a>
                <a href="#products" className="block py-2 hover:text-purple-400 transition-colors">Products</a>
                <a href="#about" className="block py-2 hover:text-purple-400 transition-colors">About</a>
                <a href="#contact" className="block py-2 hover:text-purple-400 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32" style={{width: '100vw'}}>
        <div className="max-w-none px-4 sm:px-6 lg:px-8" style={{width: '100%'}}>
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Shop Smart,
                </span>
                <br />
                <span className="text-white">Live Better</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 px-4">
                Discover premium products at unbeatable prices. Your satisfaction is our passion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Start Shopping
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
              {[
                { label: "Happy Customers", value: "50K+" },
                { label: "Products", value: "10K+" },
                { label: "Countries", value: "25+" },
                { label: "Satisfaction", value: "99%" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative" style={{width: '100vw'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Marty-Shop?</h2>
            <p className="text-lg sm:text-xl text-gray-400">Experience shopping like never before</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                icon: <Truck className="h-8 w-8" />, 
                title: "Free Fast Shipping", 
                description: "Free shipping on all orders over $50 with lightning-fast delivery" 
              },
              { 
                icon: <Shield className="h-8 w-8" />, 
                title: "Secure Payments", 
                description: "Your data is protected with bank-level encryption and security" 
              },
              { 
                icon: <Heart className="h-8 w-8" />, 
                title: "24/7 Support", 
                description: "Our dedicated team is here to help you around the clock" 
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20" style={{width: '100vw'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg sm:text-xl text-gray-400">Handpicked items just for you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="group bg-slate-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-4xl sm:text-6xl p-6 sm:p-8">
                  {product.image}
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                    ))}
                    <span className="text-xs sm:text-sm text-gray-400 ml-2">({product.rating})</span>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-400 transition-colors text-sm sm:text-base">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg sm:text-xl font-bold text-purple-400">{product.price}</span>
                    <span className="text-xs sm:text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors text-sm sm:text-base">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{width: '100vw'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg sm:text-xl text-gray-400">Real reviews from real customers</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-md p-6 rounded-xl border border-purple-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">"{testimonial.review}"</p>
                <div className="font-semibold text-purple-400">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{width: '100vw'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-purple-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Shopping?</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8">Join thousands of satisfied customers and discover amazing deals</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300">
                Browse Products
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Sign Up for Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900/80 backdrop-blur-md border-t border-purple-500/20 py-12" style={{width: '100vw'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold">Marty-Shop</span>
              </div>
              <p className="text-gray-400">Your trusted partner in online shopping</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">About Us</a>
                <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
                <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">FAQ</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">Electronics</a>
                <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">Fashion</a>
                <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">Home & Garden</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">Help Center</a>
                <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">Returns</a>
                <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">Shipping Info</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Marty-Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;