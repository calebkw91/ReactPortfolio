import React from "react";

function Projects(props) {
    return (
        <article>
            <a href={props.url} target="_blank" rel="noreferrer" className="image">
                <img src={props.image} alt={props.imageAlt} />
            </a>
            <div className="inner">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <a href={props.repo} target="_blank" rel="noreferrer">View Repo</a>
            </div>
        </article>
    );
}

export default Projects;