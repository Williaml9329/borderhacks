import React from "react"
import "./App.css"
import BackgroundImage from "./Images/BackgroundImage.jpg"
import NavBar from "./NavBar"
import Typical from "react-typical"

function Home() {
    return (
        <div className = "HomeDiv">
            <NavBar />
            <div className = "HomePicture">
                <p className = "IntroductionText">
                    Hi, I'm William Lam. <br/>I'm a{' '} 
                    <Typical
                        wrapper = "b"
                        steps = {[" Student.",
                                2000, 
                                " Programmer.", 
                                2000, 
                                " Athlete.", 
                                2000,]}
                        loop = {Infinity}
                    />
                </p>
                <img src = {BackgroundImage} alt = "Background Image" width = "100%" />
            </div>
        </div>
    )
}

export default Home