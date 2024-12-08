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
                <hr />

                <div className="col-9">
                    <h1>Contact Me</h1>
                    <p>
                        Based in Toronto, ON
                        <br></br>
                        Email: dmclean830@gmail.com
                        <br></br>
                        You can reach us at 647 555 9888.
                    </p>
                    <hr></hr>

                    {/* Contact Form */}
                    <form action="/submit-contact" method="POST">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>

                    <hr />

                    {/* Leave a Review Section */}
                    <h2>Leave a Review</h2>
                    <p>Your feedback is important to us!</p>

                    <form action="/submit-review" method="POST">
                        <div className="mb-3">
                            <label htmlFor="reviewName" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="reviewName"
                                name="name"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="reviewEmail" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="reviewEmail"
                                name="email"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="rating" className="form-label">
                                Rating
                            </label>
                            <select
                                className="form-select"
                                id="rating"
                                name="rating"
                                required
                            >
                                <option value="">Select Rating</option>
                                <option value="1">1 - Poor</option>
                                <option value="2">2 - Fair</option>
                                <option value="3">3 - Good</option>
                                <option value="4">4 - Very Good</option>
                                <option value="5">5 - Excellent</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="reviewMessage" className="form-label">
                                Review Message
                            </label>
                            <textarea
                                className="form-control"
                                id="reviewMessage"
                                name="message"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </div>
    <Footer />
    </>
}