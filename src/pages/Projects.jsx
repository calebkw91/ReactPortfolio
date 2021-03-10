import React from "react";
import Project from "../components/Project";
import DecisiveKitchenImg from "../images/decisiveKitchen.png"
import BookItListImg from "../images/bookitlist.png"
import WeatherWebAppImg from "../images/weatherSearch.png"
import EmployeeDirectoryImg from "../images/employeedirectory.png"

function Learn() {
    return (
        <div className="container">
            <h3>A Few Projects</h3>
            <p>Some collaborative, some solo. Showcasing skills that have been developed in recent months.</p>
            <div className="features">
            <Project 
                url="https://calebkw91.github.io/DecisiveKitchen/"
                name="Decisive Kitchen"
                description="A website designed for the indecisive cook. Enter an ingredient or ethnic region, and 
                recieve a random recipe instead of having a list of results to search through!"
                repo="https://github.com/calebkw91/DecisiveKitchen"
                image={DecisiveKitchenImg}
                imageAlt="Decisive Kitchen Screenshot"
            />

            <Project 
                url="https://bookit-list.herokuapp.com/"
                name="BookIt List"
                description="A webpage that allows a user to login, and search and save books they would like to read. 
                Hosted on Heroku using JawsDB."
                repo="https://github.com/calebkw91/BookItList"
                image={BookItListImg}
                imageAlt="BookIt List Screenshot"
            />

            <Project 
                url="https://calebkw91.github.io/WeatherWebApp/"
                name="Weather Web App"
                description="View the weather with a simple search on this easy-to-use interface."
                repo="https://github.com/calebkw91/WeatherWebApp"
                image={WeatherWebAppImg}
                imageAlt="Weather App Screenshot"
            />

            <Project 
                url="https://calebkw91.github.io/EmployeeDirectory-ReactApp/"
                name="Employee Directory"
                description="Use this simple React.js app to view a list of employees, as well as sort and filter to find what you are looking for."
                repo="https://github.com/calebkw91/EmployeeDirectory-ReactApp"
                image={EmployeeDirectoryImg}
                imageAlt="Employee Directory Screenshot"
            />
            </div>
        </div>
    );
}

export default Learn;