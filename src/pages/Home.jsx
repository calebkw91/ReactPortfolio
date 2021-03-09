import React from "react";
import Skills from "../components/Skills";

function Home() {
    return (
        <div className="container">
            <header className="major">
                <h2>About Me</h2>
                <p>Full-Stack Software Engineer</p>
            </header>
            <p>
                After spending the first 6 years of my career programming industrial equipment as an automation engineer,
                I have decided to take my programming and engineering knowledge into the field of software development. I am
                excited to have the opportunity to turn a hobby into a career and expand my creativity in new ways.
            </p>
            <Skills/>
        </div>
    );
}

export default Home;
