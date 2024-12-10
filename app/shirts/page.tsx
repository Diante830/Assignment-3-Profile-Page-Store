import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import './shirts.css';


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
                    <h2>Exodus T-Shirt</h2>
                    <p className="product-description">"Make a bold statement with the 'Exodus' t-shirt, designed to raise awareness for climate change. Featuring a striking graphic and powerful message, this shirt is a call to action for a sustainable future. Made from soft, breathable fabric, it offers comfort while spreading an important message. Wear it proudly and join the movement for a better planet."</p>
                    <div className="product-price">
                        <span>$28.19</span>
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