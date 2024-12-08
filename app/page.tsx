import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Products from "./components/products"

export default function Page() {
    return <>
        <Nav />
        <div className="container py-4">
            <div className="row">
                <Header />
                <hr></hr>

                <div className="col-9">
                    <h1>All Products</h1>
                    <p>
                       Get your Burnsby App Merchandise here 
                    </p>
                </div>
                <Products />

            </div>
        </div>
        <br></br>
        <br></br>
        <Footer />
    </>
}