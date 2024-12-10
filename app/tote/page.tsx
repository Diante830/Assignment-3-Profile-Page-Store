import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import './tote.css';


export default function Page() {
    return <>
        <Nav />
        <div className="container py-4">
            <div className="row">
                <Header />
                <hr></hr>

                <div className="nav-sort">
                    <ul className="navbar-2">
                        <li><a href="/">All</a></li>
                        <li><a href="/brands">Branding</a></li>
                        <li><a href="/apparel">Apparel</a></li>
                    </ul>
                </div>

            </div>
            <div className="product-details">
                <div className="product-image">
                    <img src="/images/bag1.png" alt="Image" />
                </div>
                <div className="product-info">
                    <h2>Red Burnsby Tote Bag</h2>
                    <p className="product-description">"Brighten up your everyday essentials with this stylish Burnsby tote bag. Made from durable fabric, it offers plenty of space for all your items, whether you're heading to work, the beach, or running errands. The sturdy straps ensure comfort, while the bold red color adds a pop of personality to any outfit. A versatile and practical accessory for any occasion."</p>
                    <div className="product-price">
                        <span>$23.19</span>
                    </div>
                    <div className="quantity-selector">
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            min="1"
                        />
                    </div>
                    <a href="/cart">
                    <button className="btn btn-primary"> Add to Cart
                    </button>
                    </a>
                </div>
            </div>
        </div>

        <br></br>
        <br></br>
        <Footer />
    </>
}