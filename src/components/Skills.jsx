import React from "react";

function Skills() {
    return (
        <div class="container">
            <h3>Things I Can Do</h3>
            <p>
                While a lot of these technologies are new to me on paper, my background has provided me with the problem
                solving and debugging skills of a senior developer. Additionally, I have multiple years of experience writing
                clean and readable code and supplying documention for software I have written.
            </p>
            <ul class="feature-icons">
                <li class="icon solid fa-code">Front-End Dev (JS, CSS, HTML, jQuery)</li>
                <li class="icon solid fa-code">MVC, OOP</li>
                <li class="icon solid fa-code">Bootstrap, Bulma, etc.</li>
                <li class="icon solid fa-code">React.JS, Node.JS, Express.JS</li>
                <li class="icon solid fa-code">Swift, SwiftUI</li>
                <li class="icon solid fa-book">Constant Learning</li>
                <li class="icon solid fa-users">Team Colab/Leadership</li>
                <li class="icon solid fa-cubes">MySQL, MongoDB</li>
                {/* <li class="icon solid fa-coffee">Drink much coffee</li>
                <li class="icon solid fa-bolt">Lightning bolt</li> */}
            </ul>
        </div>
    );
}

export default Skills;