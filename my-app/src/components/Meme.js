import React from "react"
import "../styles/Meme.css"
import InputLabel from "./InputLabel.js"
import inputLabelInformation from "../inputLabelInformation.js"
import CreateImgButton from "./CreateImgButton.js"


export default function Meme() {
    const inputLabels = inputLabelInformation.map(labelInfo => {
        return (
            <InputLabel
                key={labelInfo.id}
                {...labelInfo}
            />
        )
    })
    return (
        <div className="Meme--div">
            <div className="Meme--inputLabels">
                {inputLabels}
            </div>
            <CreateImgButton />
        </div>
    )
}