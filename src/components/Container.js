import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume'
import NavBar from './NavBar';
import Footer from './Footer';


export default function Container() {
    const [currentPage, setCurrentPage] = useState('AboutMe');


    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }


    }
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>

            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}