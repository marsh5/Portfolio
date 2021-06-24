import React, { useState } from 'react'
import './Nav.css'

function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const [isHover, setIsHover] = useState(false)

    return (
        <nav>
            <div className="nav-name" onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
                <span>B</span><span className={isHover ? "show" : "hidden"} >rodie &nbsp;</span> 
                
                <span className={isHover ? "unshifted" : "shifted"}>M</span><span className={isHover ? "show" : "hidden"}
                >arshall</span>
            </div>
            <div className="nav-links">
                <div className="text">
                    <div className="about">About</div>
                    <div>Projects</div>
                    <div>Contact</div>
                   
                </div>
                <div className={showMenu ? "bars menu-on" : "bars"} onClick={() => {setShowMenu(!showMenu)}}><div></div></div>
            </div>
        </nav>
    )
}

export default Nav
