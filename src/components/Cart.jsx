import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-backdrop" onClick={onClose}></div>
      <aside className="cart-panel">
        <div className="cart-header">
          <h2 className="cart-title">
            <ShoppingBag className="cart-icon" />
            <span>Shopping Cart ({getTotalItems()})</span>
          </h2>
          <button className="cart-close-btn" onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="cart-content">
          {items.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag className="cart-empty-icon" />
              <p>Your cart is empty</p>
              <span>Add some products to get started</span>
            </div>
          ) : (
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.product.id} className="cart-item">
                  <img src={item.product.image} alt={item.product.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.product.name}</div>
                    <div className="cart-item-price">${item.product.price}</div>
                    <div className="cart-item-qty">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                        <Minus size={16} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-total">
                    ${(item.product.price * item.quantity).toFixed(2)}
                    <button onClick={() => removeFromCart(item.product.id)} className="cart-remove-btn">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <button className="cart-checkout-btn">Checkout</button>
            <button className="cart-continue-btn" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default Cart;
