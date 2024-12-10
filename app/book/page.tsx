import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import './book.css';


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
                    <img src="/images/1merchbooks.png" alt="Image" />
                </div>
                <div className="product-info">
                    <h2>Pink Burnsby Notebook</h2>
                    <p className="product-description">"Stay organized and inspired with this sleek notebook. Featuring a smooth cover in a vibrant design, it offers plenty of pages for jotting down notes, ideas, or sketches. Whether for work, school, or personal use, this notebook is perfect for keeping your thoughts in order. Its compact size makes it easy to carry wherever you go."</p>
                    <div className="product-price">
                        <span>$10.87</span>
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