import React from "react";
import memesData from "../memesData.js"

export default function Meme() {
    const [memeUrl, setmemeUrl] = React.useState("")
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setmemeUrl(memesArray[randomNumber].url)
    }
    
    return (
        <div className="meme-components">
            <div className="form">
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Top text"
                />
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Bottom text"
                />
                <button 
                    className="form-button" 
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeUrl} className="meme-image"/>
        </div>
    )
}