import React from "react";
import './products.css';
import bag3 from "../../public/images/bag3.png";
import merchbooks1 from "../../public/images/1merchbooks.png";
import merchbooks2 from "../public/images/2merchbooks.png";
import bag1 from "../public/images/bag1.png";
import bag4 from "../public/images/bag4.png";
import bag5 from "../public/images/bag5.png";
import shirt1 from "../public/images/shirt1.png";
import shirt2 from "../public/images/shirt2.png";
import shirt3 from "../public/images/shirt3.png";
import Image from "next/image";

export default function Products() {
    return <>

        <div className="Items">

            <div className="Item">
                <a href="order.html" className="Item__link">
                    <div className="ImageContainer">
                        <Image src={merchbooks1}
                            alt="PinkNotebook" className="Image" />
                    </div>
                    <div className="Item__title">Pink Burnsby Notebook</div>
                    <div className="Item__price">$ 10.87<br></br><br></br>
                        <a href="/cart">
                            <button className="btn btn-primary"> Add to Cart </button>
                        </a>
                    </div>
                </a>
            </div>

            <div className="Item">
                <a href="order.html" className="Item__link">
                    <div className="ImageContainer">
                        <Image src={merchbooks2}
                            alt="BlueNotebook" className="Image" />
                    </div>
                    <div className="Item__title">Blue Burnsby Notebook</div>
                    <div className="Item__price">$ 10.87<br></br><br></br>
                        <a href="/cart">
                            <button className="btn btn-primary"> Add to Cart </button>
                        </a>
                    </div>
                </a>
            </div>

            <div className="Item">
                <a href="order.html" className="Item__link">
                    <div className="ImageContainer">
                        <Image src={bag1}
                            alt="CanvasBag" className="Image" />
                    </div>
                    <div className="Item__title">Red Burnsby Tote</div>
                    <div className="Item__price">$ 23.19<br></br><br></br>
                        <a href="/cart">
                            <button className="btn btn-primary"> Add to Cart </button>
                        </a>
                    </div>
                </a>
            </div>

            <div className="Item">
                <a href="order.html"
                    className="Item__link">
                    <div className="ImageContainer">
                        <Image src={bag3}
                            alt="CanvasBag" className="Image" />
                    </div>
                    <div className="Item__title">Pink Burnsby Tote</div>
                    <div className="Item__price">$ 23.25<br></br><br></br>
                        <a href="/cart">
                            <button className="btn btn-primary"> Add to Cart </button>
                        </a>
                    </div>
                </a>
            </div>

            <div className="Item">
                <a href="order.html"
                    className="Item__link">
                    <div className="ImageContainer">
                        <Image src={bag4}
                            alt="CanvasBag" className="Image" />
                    </div>
                    <div className="Item__title">Yellow Burnsby Tote</div>
                    <div className="Item__price">$ 21.06<br></br><br></br>
                        <a href="/cart">
                            <button className="btn btn-primary"> Add to Cart </button>
                        </a>
                    </div>
                </a>
            </div>

            <div className="Item">
                <a href="order.html"
                    className="Item__link">
                    <div className="ImageContainer">
                        <Image src={bag5}
                            alt="CanvasBag" className="Image" />
                    </div>
                    <div className="Item__title">Blue Burnsby</div>
                    <div className="Item__price">$ 23.25<br></br><br></br>
                        <a href="/cart">
                            <button className="btn btn-primary"> Add to Cart </button>
                        </a>
                    </div>
                </a>
            </div>

            <div className="Item">
                <a href="order.html"
                    className="Item__link">
                    <div className="ImageContainer">
                        <Image src={shirt1}
                            alt="T-Shirt" className="Image" />
                    </div>
                    <div className="Item__title">Blue Exodus Shirt</div>
                    <div className="Item__price">$ 29.25<br></br><br></br>
                        <a href="/cart">
                            <button className="btn btn-primary"> Add to Cart </button>
                        </a>
                    </div>
                </a>
            </div>

            <div className="Item">
                <a href="order.html"
                    className="Item__link">
                    <div className="ImageContainer">
                        <Image src={shirt2}
                            alt="T-Shirt" className="Image" />
                    </div>
                    <div className="Item__title">Purple Exodus Shirt</div>
                    <div className="Item__price">$ 29.25<br></br><br></br>
                        <a href="/cart">
                            <button className="btn btn-primary"> Add to Cart </button>
                        </a>
                    </div>
                </a>
            </div>

            <div className="Item">
                <a href="order.html"
                    className="Item__link">
                    <div className="ImageContainer">
                        <Image src={shirt3}
                            alt="T-Shirt" className="Image" />
                    </div>
                    <div className="Item__title">Orange Exodus Shirt</div>
                    <div className="Item__price">$ 29.25 <br></br><br></br>
                        <a href="/cart">
                            <button className="btn btn-primary"> Add to Cart </button>
                        </a>
                    </div>
                </a>
            </div>

        </div>

    </>
}