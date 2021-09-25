import React from "react"
import PersonalPicture from "./Images/PersonalPicture.jpg"

function AboutMe() {
    return (
        <div className = "AboutMeContainer">
            <div className = "AboutMeIcon">
                <center><img src = {PersonalPicture} className = "PersonalPicture" alt="personal-picture" width = "50%"/></center>
            </div>
            <p>
                Hi, I'm William. I am a passionate first year student aiming to do a 
                double major in computer science and economics at the University of Toronto! 
                I love to work with others and I am excited to be actively seeking internships 
                or co-op positions and being in a team setting. 
                I am interested in software engineering, but I am open to all aspects of 
                computer science!
            </p>
        </div>
    )
}

export default AboutMe