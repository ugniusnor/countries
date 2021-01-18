import React, { useState, useEffect, useContext} from 'react'
import {Link} from "react-router-dom";
import {ModeContext} from "../context/contextProvider"
import arrow from "../img/arrow.svg"
export default function SingleCard({match}) {

    const [mode,setMode] = useContext(ModeContext)
    const countryId=match.params.country;
    const url=`https://restcountries.eu/rest/v2/alpha/${countryId}`;
    const [country,setCountry]=useState({});
    
    useEffect(()=>{
        function getAPI() {
            fetch(url)
                .then(res=>res.json())
                    .then (data=>setCountry(data));
        }
        getAPI();
    },[])

    const handleBack= ()=> {
        
    
        
    }
    if (country) {
        return (
            <div className={mode ? "single-card-page light" : "single-card-page dark"}>
                <div className="left-container">
             <Link to={"/"}> <div className={mode ? "go-back light" : "go-back dark"}>Back
             <img className="icon arrow" src={arrow} alt=""/>
             </div> </Link>
                   
                    <img src={country.flag} alt="flag-image"/>
                   
                </div>
                <div className="right-container">
                    <div className="info1">
                    
                    <h1>{country.name}</h1>
            <p>Native name: <span>{country.nativeName}</span></p>
            <p>Population: <span>{country.population}</span></p>
            <p>Region: <span>{country.region}</span></p>
            <p>Sub Region: <span>{country.subregion}</span></p>
            <p>Capital <span>{country.capital}</span></p>
                    </div>
                    <div className="info2">
                    <p>Borders: <br/> <span>{country.borders + " "}</span></p>
            
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>Loading</div>
        )
    }
}