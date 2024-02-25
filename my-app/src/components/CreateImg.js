import React, {useState} from "react"
import "../styles/CreateImg.css"


export default function CreateImg(memeState) {
    const [allMemeImages, setAllMemeImages] = useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])


    function HandleClickImg() {
        console.log(memeState.meme)
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        memeState.setMeme(prevData => ({
            ...prevData,
            randomImage: url
        }))
    }

    return (
        <div className="CreateImg--div">
            <button onClick={HandleClickImg} className="CreateImg--button">
                Get a new meme image  🖼
            </button>
            <div className="imgContainer">
                <img src={memeState.meme.randomImage} className="CreateImg--img"/>
                <h1 className="imgTopText">{memeState.meme.topText}</h1>     
                <h1 className="imgBottomText">{memeState.meme.bottomText}</h1>
            </div>
        </div>
    )
}