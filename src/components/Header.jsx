import React, {useContext} from 'react'
import "../styles/header.css"
import sun from "../img/sun.svg"
import moon from "../img/moon.svg"
import {ModeContext} from "../context/contextProvider"
export default function Header () {

    const [mode,setMode] = useContext(ModeContext)
    function changeMode() {
        setMode(!mode)

    }
    function componentDidMount() {
        if(document.querySelector(".App")) {
            const app= document.querySelector(".App")
                    if (mode) {
                 app.classList.remove("dark-bg")
                 app.classList.add("light-bg")
             }else {
                 app.classList.remove("light-bg")
                 app.classList.add("dark-bg")
     
             }
        }
    }
    componentDidMount();
    return (
        <header className={mode ? "light" : "dark"} >
            <div className="header-container">
        <div className="logo">
        <h3>Where in the world?</h3>
        </div>
        <div onClick={changeMode} className="mode">
            <span>{mode ? "Dark Mode" : "Light Mode"}</span>
            <img  className="icon sun" src={ mode ? moon : sun} alt=""/>
        </div>
            </div>
        
        </header>
    )
}