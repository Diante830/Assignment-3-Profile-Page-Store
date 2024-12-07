import React from 'react';
import './footer.css'; 
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    {/* Fast Delivery Section */}
                    <div className="col-md-3 mb-4">
                        <h5>Fast Delivery</h5>
                        <p>Get your orders delivered quickly and efficiently to your doorstep.</p>
                    </div>

                    {/* Secure Online Payments Section */}
                    <div className="col-md-3 mb-4">
                        <h5>Secure Online Payments</h5>
                        <p>Shop with confidence! We offer encrypted and secure payment options.</p>
                    </div>

                    {/* Free Returns Section */}
                    <div className="col-md-3 mb-4">
                        <h5>Free Returns</h5>
                        <p>Enjoy hassle-free returns on all purchases. No questions asked.</p>
                    </div>

                    {/* Newsletter Signup Section */}
                    <div className="col-md-3 mb-4">
                        <h5>Sign Up for My Newsletter</h5>
                        <p>Stay updated with latest offers and products. Subscribe now!</p>
                        <form>
                            <input
                                type="email"
                                className="form-control mb-2"
                                placeholder="Enter your email"
                                aria-label="Email"
                            />
                            <button type="submit" className="btn btn-primary w-100">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="row mt-4">
                    <div className="col text-center">
                        <h5>Follow Me</h5>
                        <div className="social-icons">
                            <a href="#" className="text-white me-3">
                            <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-white me-3">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-white me-3">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-white me-3">
                                <FaLinkedinIn size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="row mt-4 pt-4 border-top text-center">
                    <div className="col">
                        <p>&copy; 2025 Diante Hazelle-Mclean Design Store. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;