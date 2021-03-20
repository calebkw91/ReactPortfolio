import React from "react";
import Skills from "../components/Skills";
import profilePic from "../images/profile.jpeg";

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <header className="major">
                        <h2>About Me</h2>
                        <p>Full-Stack Software Engineer</p>
                    </header>
                </div>
                <div className="col-4">
                <span className="image avatar" style={{ maxWidth: "100px" }}><img src={profilePic} alt="" /></span>
                </div>
            </div>
            <p>
                After spending the first 6 years of my career programming industrial equipment as an automation engineer,
                I have decided to take my programming and engineering knowledge into the field of software development. I am
                excited to have the opportunity to turn a hobby into a career and expand my creativity in new ways.
            </p>
            <Skills />
        </div>
    );
}

export default Home;
