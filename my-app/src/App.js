import React from "react"
import Navbar from "./components/Navbar.js"
import Meme from "./components/Meme.js"
import "./App.css"


function App() {
  return (
    <div className="App--div">
      <Navbar />
      <Meme />
    </div>
  );
}

export default App;


// I stopped at the point where all the props thing is good and inputLabel is good connect to the DB
// now I have to just play with the css to make the input labels look correct(and polish)




