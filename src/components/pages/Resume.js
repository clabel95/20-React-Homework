import React from "react";
import "../../styles/Contact.css";
import resume from "../../assets/Clayton_Abel-Resume.pdf"


const Resume = () => (
    <div>
        <section id="contact-b" className="center-page home">
            <div className="container">
                <a href={resume} target="_blank">
                    <i class="fas fa-solid fa-file fa-10x"></i>
                    <h3>My Resume</h3>
                    <p>Click to download</p>
                </a>


                <div className="line"></div>
            </div>
        </section>
    </div>
)

export default Resume