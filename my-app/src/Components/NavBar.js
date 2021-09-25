import React from "react"
import "./App.css"

    function NavBar() {
        return (
            <div className = "navDiv"> 
                <nav className = "navBar"> 
                    <button className = "navButtons"> <strong>William Lam</strong> </button>
                    <button className = "navButtons"> About </button>
                    <button className = "navButtons"> Coding </button>
                    <button className = "navButtons"> Experience </button>
                    <button className = "navButtons"> Resume </button>
                </nav>
            </div>
        )
    }

export default NavBar