import React, { useState, useContext} from 'react'
import AllCards from "./AllCards"
import {ModeContext} from "../context/contextProvider"

import search from "../img/loupe.svg"
import "../styles/search.css"
export default function SearchBox () {
    const [mode,setMode] = useContext(ModeContext)
    const [filter,setFilter] = useState("all");
    const [query,setQuery]=useState("");
    const handleChange = (e)=> {
         setFilter(e.target.value)
    }
    return (
        <div>

        <div className="search-box">
            <form>
                <input onChange={(e)=>{
                    setQuery(e.target.value)
                 
                }} 
                value={query}
                className={mode ? "light" : "dark"} type="text" placeholder="Select Country"/>
                <img  className="icon" src={search} alt=""/>
            </form>

            <div className="filter-box">
         <form>
       
             <select value={filter} onChange={(e)=>{handleChange(e)}} className={mode ? "custom-select light" :"custom-select dark" } id="regions" name="regions">
            <option className="custom-option" value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>

        </select>
      
        </form>
            </div>
        </div>
     
    
    <AllCards filter={filter} query={query.toLocaleLowerCase()}/>
        </div>

    )

}