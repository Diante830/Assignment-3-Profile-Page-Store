import React from "react";
import './products.css';

export default function Products() {
    return <>

        <div className="Items">

            <div className="Item">

                <div className="ImageContainer">
                    <img src="/images/1merchbooks.png"
                        alt="PinkNotebook" className="Image" />
                </div>
                <div className="Item__title">Pink Burnsby Notebook</div>
                <div className="Item__price">$ 10.87<br></br><br></br>
                    <a href="/cart">
                        <button className="btn btn-primary"> Add to Cart </button>
                    </a>
                </div>
            </div>

            <div className="Item">

                <div className="ImageContainer">
                    <img src="/images/2merchbooks.png"
                        alt="BlueNotebook" className="Image" />
                </div>
                <div className="Item__title">Blue Burnsby Notebook</div>
                <div className="Item__price">$ 10.87<br></br><br></br>
                    <a href="/cart">
                        <button className="btn btn-primary"> Add to Cart </button>
                    </a>
                </div>
            </div>

            <div className="Item">

                <div className="ImageContainer">
                    <img src="/images/bag1.png"
                        alt="CanvasBag" className="Image" />
                </div>
                <div className="Item__title">Red Burnsby Tote</div>
                <div className="Item__price">$ 23.19<br></br><br></br>
                    <a href="/cart">
                        <button className="btn btn-primary"> Add to Cart </button>
                    </a>
                </div>
            </div>

            <div className="Item">

                <div className="ImageContainer">
                    <img src={"/images/bag3.png"}
                        alt="CanvasBag" className="Image" />
                </div>
                <div className="Item__title">Pink Burnsby Tote</div>
                <div className="Item__price">$ 23.25<br></br><br></br>
                    <a href="/cart">
                        <button className="btn btn-primary"> Add to Cart </button>
                    </a>
                </div>
            </div>

            <div className="Item">

                <div className="ImageContainer">
                    <img src="/images/bag4.png"
                        alt="CanvasBag" className="Image" />
                </div>
                <div className="Item__title">Yellow Burnsby Tote</div>
                <div className="Item__price">$ 21.06<br></br><br></br>
                    <a href="/cart">
                        <button className="btn btn-primary"> Add to Cart </button>
                    </a>
                </div>
            </div>

            <div className="Item">

                <div className="ImageContainer">
                    <img src="/images/bag5.png"
                        alt="CanvasBag" className="Image" />
                </div>
                <div className="Item__title">Blue Burnsby</div>
                <div className="Item__price">$ 23.25<br></br><br></br>
                    <a href="/cart">
                        <button className="btn btn-primary"> Add to Cart </button>
                    </a>
                </div>
            </div>

            <div className="Item">

                <div className="ImageContainer">
                    <img src="/images/shirt1.png"
                        alt="T-Shirt" className="Image" />
                </div>
                <div className="Item__title">Blue Exodus Shirt</div>
                <div className="Item__price">$ 29.25<br></br><br></br>
                    <a href="/cart">
                        <button className="btn btn-primary"> Add to Cart </button>
                    </a>
                </div>
            </div>

            <div className="Item">

                <div className="ImageContainer">
                    <img src="/images/shirt2.png"
                        alt="T-Shirt" className="Image" />
                </div>
                <div className="Item__title">Purple Exodus Shirt</div>
                <div className="Item__price">$ 29.25<br></br><br></br>
                    <a href="/cart">
                        <button className="btn btn-primary"> Add to Cart </button>
                    </a>
                </div>
            </div>

            <div className="Item">

                <div className="ImageContainer">
                    <img src="/images/shirt3.png"
                        alt="T-Shirt" className="Image" />
                </div>
                <div className="Item__title">Orange Exodus Shirt</div>
                <div className="Item__price">$ 29.25 <br></br><br></br>
                    <a href="/cart">
                        <button className="btn btn-primary"> Add to Cart </button>
                    </a>
                </div>
            </div>

        </div>

    </>
}