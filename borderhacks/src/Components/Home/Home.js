import React from "react"
import Typical from "react-typical"
import Navbar from "./Navbar"
import BackgroundVideo from "./Video/Video.mp4"
import "./Borderhacks.css"
import { useHistory } from "react-router-dom";

function Home() {

    let history = useHistory()
    
    return (
        <div>
            <div clasName = "HomeDiv">
                <Navbar /> 
                <div>
                    <video 
                        autoPlay 
                        loop muted
                        style = {{
                            position: "absolute",
                            width: "100%",
                            left: "50%",
                            top: "50%",
                            height: "100vh",
                            objectFit: "cover",
                            transform: "translate(-50%, -50%)",
                            zIndex: "-1"
                        }}
                    >
                        <source src = {BackgroundVideo} type = "video/mp4" />
                    </video>
                        <p className = "IntroductionText">
                            <Typical
                                wrapper = "b"
                                steps = {["Welcome.",
                                    20000]}
                            loop = {1}
                        />
                        </p>
                        <button className = "startButton" onClick = {() => {history.push("./Traffic")}}> Get Started. </button>
                    </div>
                </div>
            </div>
    )
}

export default Home