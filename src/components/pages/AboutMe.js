import React from 'react';
import "../../styles/AboutMe.css"
import profilePic from '../../assets/Me.jpg'
import "../../styles/Contact.css";



const AboutMe = () => (
    <div>
        <section id="about" className="text-center about_me">
            <div className="container">
                <h2 className="AboutMe">About Me</h2>
                <div className="divider-line"></div>
                <div className="about-info">
                    <img src={profilePic} alt="" className="bio-image" />
                    <div className="bio bg-light">

                        <p style={{ fontSize: "29px" }}>
                            I'm a Full Stack web developer with a bachelors in Engineering from Abilene Christian University. Skills in HTML, CSS, JavaScript, Python, Verilog, VHDL, System Verilog and strengths in meeting deadlines, creativity, and cross department teamwork. Recently earned a certificate in full stack development from the University of Texas. Successfully led multiple projects to completion as the lead design engineer, while also being the lead customer liaison. Passionate about approaching programming challenges from different angles and collaborating with others.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default AboutMe