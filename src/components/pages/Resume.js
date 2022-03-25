import React from "react";
import "../../styles/Contact.css";
import resume from "../../assets/Clayton_Abel-Resume.pdf"


const Resume = () => (
    <div>
        <section id="resume" className="center-page home">
            <div className="container">
                <div id="spacer"></div>
                <a href={resume} target="_blank">
                    <i class="fas fa-solid fa-file fa-10x"></i>
                    <h3>My Resume</h3>
                    <p>Click to download</p>
                </a>
                <div id="spacer"></div>
                <div className="line"></div>
            </div>
        </section>
    </div>
)

export default Resume