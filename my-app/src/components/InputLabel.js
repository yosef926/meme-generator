import React from "react"
import "../styles/InputLabel.css"


export default function InputLabel(inputLabelInformation) {
    return (
        <div className="InputLabel--div">
            <h3 className="InputLabel--title">{inputLabelInformation.title}</h3>
            <h3 className="InputLabel--instruction">{inputLabelInformation.instruction}</h3>
        </div>
    )
}