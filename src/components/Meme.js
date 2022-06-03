import React from "react";

export default function Meme() {
    return (
        <div className="meme-components">
            <form className="form">
                <input type="text" className="form-input" placeholder="Top text"></input>
                <input type="text" className="form-input" placeholder="Bottom text"></input>
                <button className="form-button">Get a new meme image 🖼</button>
            </form>
            <img src="" className="meme-image"/>
        </div>
    )
}