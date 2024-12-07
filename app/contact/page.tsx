import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer"

export default function Page() {
    return <>

    <Nav />
        <div className="container py-4">
            <div className="row">
            
                <Header />

                <div className="col-9">
                    
                    <h1>Contact Us</h1>
                    <p>
                        You can reach us at 647 XXX YYYY.
                    </p>
                </div>

            </div>
        </div>
    <Footer />
    </>
}