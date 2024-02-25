import React, {useState} from "react"
import "../styles/CreateImgButton.css"
import memesdata from "../memesdata.js"
import InputLabel from "./InputLabel.js"


export default function CreateImgButton(text) {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3lmzyx.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesdata)

    function HandleClickImg() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        
        setMeme(prevImage => ({
            ...prevImage,
            randomImage: url
        }))
    }

    return (
        <div className="CreateImgButton--div">
            <button onClick={HandleClickImg} className="CreateImgButton--button">
                Get a new meme image  🖼
            </button>       
            <img src={meme.randomImage} className="CreateImgButton--imgGenerate"/>
        </div>
    )
}