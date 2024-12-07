import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";

export default function Page() {
    return <>
        <Nav />
        <div className="container py-4">
            <div className="row">

                
                <Header />
                

                <div className="col-9">
                    <img className="d-block w-100 mb-3" src="https://fastly.picsum.photos/id/251/1280/720.jpg?hmac=YDyCcHsQDDzvzCfZ-MLi2fr2pFqpoH9OqSqmJFBwV7w" />
                    <h1>Welcome</h1>
                    <p>
                       Diante Hazelle
                    </p>
                </div>

            </div>
        </div>
        <Footer />
    </>
}