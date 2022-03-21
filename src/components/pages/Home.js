import React from 'react';
import "../../styles/Home.css"
import TextEditor from "../../assets/TextEditor.PNG"
import NoteTaker from "../../assets/NoteTaker.PNG"




const Home = () => (

    <section id="work" className="center-page py-3">
        <div className="container">
            <h2 className="title">My Portfolio</h2>
            <div className="line"></div>

            <div className="cards">
                <div className="card">
                    <div className="card-image">
                        <img src={TextEditor} alt="" height="100%" />
                    </div>
                    <a href="https://text--editor--pwa.herokuapp.com/" target={"_blank"}>
                        <div className="card-text">
                            <div className="card-text-wrap">
                                <p className="card-text-category">PWA</p>
                                <h2 className="card-text-title">Text Editor</h2>
                                <a href="https://github.com/clabel95/PWA-Text-Editor" target={"_blank"}><i className="fab fa-github fa-3x my-2"></i></a>
                            </div>
                        </div></a>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={NoteTaker} alt="" height="100%" />
                    </div>
                    <a href="https://express-hw11.herokuapp.com/notes" target={"_blank"}>
                        <div className="card-text">
                            <div className="card-text-wrap">
                                <p className="card-text-category">Express</p>
                                <h2 className="card-text-title">Note Taker</h2>
                                <a href="https://github.com/clabel95/11-Express-Homework" target={"_blank"}><i className="fab fa-github fa-3x my-2"></i></a>
                            </div>
                        </div></a>
                </div>

            </div>
        </div>
    </section>
)



export default Home