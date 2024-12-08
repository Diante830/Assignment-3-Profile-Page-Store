import React from "react";
import Branding from "../components/branding";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";


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
                <Branding />

            </div>
        </div>
        <br></br>
        <br></br>
        <Footer />
    </>
}