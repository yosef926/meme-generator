import React, {useState} from "react"
import "../styles/InputLabel.css"


export default function InputLabel() {

    const [formData, setInput] = useState({
        leftInput: "",
        rightInput: ""
    })

    console.log(formData)
    function handleChange(event) {
        const {name, value} = event.target
        setInput(prevFormData => {
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
                    className="leftInput"
                    placeholder="Top text"
                    onChange={handleChange}
                    name="leftInput"
                    value={formData.leftInput}
                />
                <input
                    type="text"
                    className="rightInput"
                    placeholder="Bottom text"
                    onChange={handleChange}
                    name="rightInput"
                    value={formData.rightInput}
                />
            </form>
        </div>
    )
}