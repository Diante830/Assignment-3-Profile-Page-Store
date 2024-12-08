import React from "react";
import './products.css'; 

export default function Products() {
    return <>
       
       <div className="Items">

        <div className="Item">
            <a href="order.html"
                className="Item__link">
                <div className="ImageContainer">
                    <img src="/images/shirt1.png"
                        alt="T-Shirt" className="Image"/>
                </div>
                <div className="Item__title">Blue Exodus Shirt</div>
                <div className="Item__price">$ 29.25<br></br><br></br>
                <button className="btn btn-primary">Add to Cart </button>
                </div>
            </a>
        </div>

        <div className="Item">
            <a href="order.html"
                className="Item__link">
                <div className="ImageContainer">
                    <img src="/images/shirt2.png"
                        alt="T-Shirt" className="Image"/>
                </div>
                <div className="Item__title">Purple Exodus Shirt</div>
                <div className="Item__price">$ 29.25<br></br><br></br>
                <button className="btn btn-primary">Add to Cart </button>
                </div>
            </a>
        </div>

        <div className="Item">
            <a href="order.html"
                className="Item__link">
                <div className="ImageContainer">
                    <img src="/images/shirt3.png"
                        alt="T-Shirt" className="Image"/>
                </div>
                <div className="Item__title">Orange Exodus Shirt</div>
                <div className="Item__price">$ 29.25 <br></br><br></br>
                <button className="btn btn-primary"> Add to Cart </button>
                </div>
            </a>
        </div>

    </div>
        
    </>
}