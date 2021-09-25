import React from "react"

    function NavBar() {
        return (
            <div className = "navDiv"> 
                <nav className = "navBar"> 
                    <button className = "navTitle"> <strong>Project Name</strong> </button>
                    <button className = "navButtons"> B1 </button>
                    <button className = "navButtons"> B2 </button>
                    <button className = "navButtons"> B3 </button>
                    <button className = "navButtons"> B4 </button>
                </nav>
            </div>
        )
    }

export default NavBar