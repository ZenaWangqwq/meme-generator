import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText:"Top Text",
        bottomText:"Bottom Text",
        randomImage:"http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMeme(prevState => ({
                ...prevState, 
                randomImage: allMemes[randomNumber].url
            })
        )
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <div className="meme-components">
            <div className="form">
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Top text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button 
                    className="form-button" 
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme-image"/>
                <span className="top-text">{meme.topText}</span>
                <span className="bottom-text">{meme.bottomText}</span>
        </div>
    )
}