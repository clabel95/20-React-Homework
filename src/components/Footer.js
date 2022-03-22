import React from "react";
import "../styles/Footer.css";

const Footer = () => (
    <footer id="main-footer">
        <div className="footer-content container">
            <div className="social">
                <a href="https://github.com/clabel95" target="_blank">
                <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/clayton-abel/" target="_blank">
                <ion-icon name="logo-linkedin"></ion-icon>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;