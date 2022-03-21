import React from "react";
import "../styles/NavBar.css";

const styles = {
    namePlate: {
        "font-size": "50px",
        "font-family": "Cinzel, Arial, Helvetica, sans-serif",
    },
};

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <header id="header-inner">
            <div className="container">
                <nav id="main-nav">
                    <h1 style={styles.namePlate}>Clayton Abel</h1>
                    <ul>
                        <li>
                            <a href="#home" onClick={() => handlePageChange("Home")} className={currentPage === "Home" ? "current" : ""}>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#aboutme" onClick={() => handlePageChange("AboutMe")} className={currentPage === "AboutMe" ? "current" : ""}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "current" : ""}>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "current" : ""}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavTabs;