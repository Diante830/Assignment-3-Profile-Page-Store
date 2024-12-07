import Link from "next/link";
import React from "react";

export default function Nav() {
    return <>
        <header className="bg-dark text-white py-3">
            <div className="container">
                {/* Main Navigation Bar */}
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <h1 className="text-white">BrandName</h1>
                    </div>

                    <div className="col-md-8">
                        <nav>
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/cart">Cart</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </>
}