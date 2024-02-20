import React from "react"
import "../styles/Navbar.css"


export default function Navbar() {
    return (
        <div className="Navbar--div">
            <img src={require("../images/meme-logo.png")} className="Navbar--img" />
            <h3 className="Navbar--title">Meme Generator</h3>
            <h5 className="Navbar--projectState">React Course - Project 3</h5>
        </div>
    )
}