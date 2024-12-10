import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer"
import './cart.css'; 
  

export default function Page() {
    return <>

    <Nav />

    <div className="cart-container">
        <h1>Your Shopping Cart</h1>
        <div className="cart-items">
          <div className="cart-item">
            <img src="./images/bag1.png" alt="Product 1" className="cart-item-image" />
            <div className="cart-item-details">
              <h3>Red Burnsby Tote</h3>
              <p>$23.19</p>
              <div className="quantity">
                <label>Quantity: 1</label>
              </div>
              <button className="remove-btn">Remove</button>
            </div>
          </div>

          <div className="cart-item">
            <img src="./images/bag3.png" alt="Product 2" className="cart-item-image" />
            <div className="cart-item-details">
              <h3>Pink Burnsby Tote</h3>
              <p>$46.50</p>
              <div className="quantity">
                <label>Quantity: 2</label>
              </div>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <p>Total: $69.69</p>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>

    <Footer />

    </>
}