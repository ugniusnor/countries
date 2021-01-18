import React, {useState, useEffect, useContext}from 'react'
import {Link} from "react-router-dom";
import {ModeContext} from "../context/contextProvider"



  export default function AllCountries (props) {
   
    const [countries,setCountries]=useState(false)
    const [mode,setMode] = useContext(ModeContext)

    // // let url = props.data ? "https://restcountries.eu/rest/v2/all" : `https://restcountries.eu/rest/v2/name/${props.data}`;
    const url = "https://restcountries.eu/rest/v2/all";
    function getAPI() {
        fetch(url)
            .then(res=>res.json())
                .then (data=>setCountries(data));
    }
    useEffect(()=>{
        getAPI();
        
    },[])

  let displayedCountries="";
    const filter = props.filter;
     let query = props.query ? props.query.toLowerCase() : "";
    if (countries && filter!=="all") {
       displayedCountries=(countries.filter(country=>country.region===filter));
      
    } else if(countries && filter==="all") {
       displayedCountries=countries;
    }
    if(props.query) { 
      displayedCountries=displayedCountries.filter(country=> {
         return country.name.toLowerCase().includes(props.query)
        })
      
     }
    
  return (
    <div className="cards-section">

        <div className="cards-container">
      {countries && displayedCountries.map(country=>
        (
        <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}> 
          <div  key={country.alpha3Code}  id={country.alpha3Code} onClick={() =>{}}
          className= {mode ? "single-card light" : "single-card dark"}>
        <img src={country.flag} alt="flag"/>
        <div className="card-text">
            <h3>{country.name}</h3>
            <p>Population: <span>{country.population}</span></p>
            <p>Region: <span>{country.region}</span></p>
            <p>Capital <span>{country.capital}</span></p>
        </div>
    </div>
            </Link>
           
        ) ) }

  </div>
        </div>
       
  
  )
}