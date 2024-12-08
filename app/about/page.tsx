import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer"


export default function Page() {
    return <>
        <Nav />
        
        <div className="container py-4">
            <div className="row">

                <br></br>
                <hr></hr>
                <div className="col-9">
                    
                    <h1>About Me</h1>
                    <br></br>
                    <br></br>
                    <p>
                        I'm a passionate Graphic Designer with a strong focus on UX/UI design, branding, motion graphics, and web development. I thrive on creating visually compelling and user-centered experiences that not only meet client needs but also resonate with their audience.
                        <br></br>
                        <br></br>
                        In addition to my design expertise, I have a solid foundation in web development. This skill allows me to bridge the gap between design and functionality, ensuring that my designs are not only aesthetically pleasing but also practical and effective in real-world applications. I am proficient in HTML, CSS, and JavaScript, which enables me to create responsive and interactive web designs that enhance user engagement.
                        <br></br>
                        <br></br>
                        Over the past year, I've had the incredible opportunity to work with various clients on a freelance basis, allowing me to hone my skills and explore diverse projects. One of my most rewarding experiences has been designing for Cineplex, where I contributed to exciting visual campaigns that elevated the brand's presence and improved the overall user experience.
                        <br></br>
                        <br></br>
                        I am eager to continue expanding my experience and am particularly interested in building long-term relationships with a dynamic design team. Collaboration and creativity drive my work, and I believe that the best results come from sharing ideas and learning from one another.
                        <br></br>
                        <br></br>
                        It's a pleasure to connect with you! I invite you to explore my portfolio, where you'll find examples of my work that reflect my dedication to design excellence and web development. I look forward to the possibility of collaborating and creating innovative solutions together. Thank you for taking the time to learn more about me!
                    </p>
                    <br></br>
                    <a href="/">
                    <button className="btn btn-primary">See Products </button>
                    </a>
                </div>

            </div>
        </div>
    <Footer />
    </>
}