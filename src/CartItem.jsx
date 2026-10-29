import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping, onHomeClick, totalItems }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Convert a price such as "$15" or 15 into a number.
  const parseCost = (cost) => {
    if (typeof cost === 'number') return cost;
    return Number(String(cost).replace(/[^0-9.]/g, '')) || 0;
  };

  // Calculate the total cost of one plant.
  const calculateTotalCost = (item) => {
    return parseCost(item.cost) * item.quantity;
  };

  // Calculate the total cost of all plants.
  const calculateTotalAmount = () => {
    return cart.reduce(
      (total, item) => total + calculateTotalCost(item),
      0
    );
  };

  // Increase quantity.
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrease quantity; remove the item when quantity reaches zero.
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Remove a plant completely.
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Return to the plant listing.
  const handleContinueShopping = () => {
    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <nav className="navbar">
        <div className="navbar-title" onClick={onHomeClick}>
          Paradise Nursery
        </div>

        <div className="navbar-links">
          <button onClick={onHomeClick}>Home</button>
          <button onClick={handleContinueShopping}>Plants</button>
          <button className="cart-nav-button" aria-label="Shopping cart">
            🛒 Cart ({totalItems ?? itemCount})
          </button>
        </div>
      </nav>

      <h2 style={{ color: 'black' }}>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. Start shopping for plants!</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>

                <div className="cart-item-cost">
                  Unit price: ${parseCost(item.cost).toFixed(2)}
                </div>

                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    -
                  </button>

                  <span className="cart-item-quantity-value">
                    {item.quantity}
                  </span>

                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  Subtotal: ${calculateTotalCost(item).toFixed(2)}
                </div>

                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <h2 className="total_cart_amount">
            Total Cart Amount: ${calculateTotalAmount().toFixed(2)}
          </h2>

          <p>Total items: {itemCount}</p>
        </>
      )}

      <div className="continue_shopping_btn">
        <button
          className="get-started-button"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>

        <button
          className="get-started-button1"
          onClick={() => window.alert('Functionality Coming Soon')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
