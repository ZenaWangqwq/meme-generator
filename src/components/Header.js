import React from "react";

export default function Header() {
    return (
        <div className="header">
            <img src={process.env.PUBLIC_URL + `images/troll-face.png`} className="logo" />
            <h1 className="project-name">Meme Generator</h1>
            <h3 className="title">React Course - Project 3</h3>
        </div>
    )
}