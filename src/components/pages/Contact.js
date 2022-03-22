import React from "react";
import "../../styles/Contact.css";

const Contact = () => (
    <div>
        <section id="contact-b" className="center-page py-2">
            <div className="container">
            <h2 className="title">Social</h2>
                <div className="line"></div>
                <div className="contact-me">
                    <div>
                        <a href="mailto:clayton.abel.95@gmail.com">
                        <ion-icon name="mail-outline"></ion-icon>
                            <h3>Email</h3>
                            <p>clayton.abel.95@gmail.com</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/clayton-abel/" target="_blank">
                        <ion-icon name="logo-linkedin"></ion-icon>
                            <h3>LinkedIn</h3>
                            <p>www.linkedIn.com</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/clabel95" target="_blank">
                        <ion-icon name="logo-github"></ion-icon>
                            <h3>GitHub</h3>
                            <p>www.GitHub.com</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact-a" className="text-center py-3">
            <div className="container">
                <h2 className="title">Contact Me</h2>
                <div className="bottom-line"></div>
                <p className="lead"></p>
                <form action="https://formspree.io/f/xayvbkaz" method="POST">
                    <div className="text-field">
                        <input
                            type="text"
                            className="text-input name-input"
                            placeholder="Name"
                            required
                            name="name"
                        />
                        <input
                            type="text"
                            className="text-input subject-input"
                            placeholder="Subject"
                            required
                            name="subject"
                        />
                        <input
                            type="email"
                            className="text-input email-input"
                            placeholder="Email Address"
                            required
                            name="email"
                        />
                        <input
                            type="text"
                            className="text-input phone-input"
                            placeholder="Phone Number"
                            name="phone"
                        />
                        <textarea
                            className="text-input message-input"
                            placeholder="Enter Message"
                            required
                            name="message"
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-dark">
                        Submit
                    </button>
                </form>
            </div>
        </section>
        
    </div>
);

export default Contact;