import React from 'react';
import "../../styles/Home.css"
import projects from "../Projects"




const Home = () => (

    <section id="work" className="center-page home">
        <div className="container">
            <h2 className="title">My Portfolio</h2>
            <div className="divider-line"></div>

            <div className="cards">
                {projects.map((project) => (
                    <div className="card">
                        <div className="card-image">
                            <img src={project.image} alt="" />
                        </div>
                        <div className="card-text">
                            <div className="card-text-wrap">
                                <p className="card-text-category">{project.technology}</p>
                                <h2 className="card-text-title">{project.title}</h2>
                                <a href={project.website} target={"_blank"}><ion-icon name="globe-outline"></ion-icon></a>
                                <a href={project.github} target={"_blank"}><ion-icon name="logo-github"></ion-icon></a>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    </section>
)



export default Home