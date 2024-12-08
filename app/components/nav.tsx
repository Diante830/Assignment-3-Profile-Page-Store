import Link from "next/link";
import React from "react";

export default function Nav() {
    return <>
        <header style={{ backgroundColor: '#2D457D', color: '#fff', padding: '1rem 0' }}>
            <div className="container">
                {/* Main Navigation Bar */}
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <h1 className="text-white">Diante's Design Store</h1>
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