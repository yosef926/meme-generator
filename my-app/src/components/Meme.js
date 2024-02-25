import React, {useState} from "react"
import "../styles/Meme.css"
import InputLabel from "./inputLabel.js"
import CreateImg from "./CreateImg.js"


export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3lmzyx.jpg"
    }) 

    return (
        <div className="Meme--div">
            <div>
                <InputLabel 
                    meme={meme}
                    setMeme={setMeme}
                />
            </div>
            <CreateImg 
                meme={meme}
                setMeme={setMeme}
            />
        </div>
    )
}