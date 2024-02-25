import React, {useState} from "react"
import "../styles/Meme.css"
import InputLabel from "./InputLabel.js"
import CreateImgButton from "./CreateImgButton.js"


export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3lmzyx.jpg"
    }) 

    return (
        <div className="Meme--div">
            <div className="Meme--inputLabels">
                <InputLabel />
            </div>
            <CreateImgButton />
        </div>
    )
}