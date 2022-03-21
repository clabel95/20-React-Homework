import React from "react";
import "../styles/Footer.css";

const Footer = () => (
    <footer id="main-footer">
        <div className="footer-content container">
            <div className="social">
                <a href="https://github.com/clabel95" target="_blank">
                    <i className="fab fa-github fa-4x"></i>
                </a>
                <a href="https://www.linkedin.com/in/clayton-abel/" target="_blank">
                    <i className="fab fa-linkedin fa-4x"></i>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;