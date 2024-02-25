import React, {useState} from "react"
import "../styles/InputLabel.css"


export default function InputLabel(memeState) {

    function handleChange(event) {
        const {name, value} = event.target
        memeState.setMeme(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }


    return (
        <div className="InputLabel--div">
            <form>
                <input 
                    type="text"
                    className="topText"
                    placeholder="Top text"
                    onChange={handleChange}
                    name="topText"
                    value={memeState.meme.topText}
                />
                <input
                    type="text"
                    className="bottomText"
                    placeholder="Bottom text"
                    onChange={handleChange}
                    name="bottomText"
                    value={memeState.meme.bottomText}
                />
            </form>
        </div>
    )
}