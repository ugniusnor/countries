import React, { useState, useEffect, useContext } from 'react'
import AllCards from "./AllCards"
import SingleCard from "./SingleCard"
import Header from "./Header"
import SearchBox from "./SearchBox"
import "../styles/cards.css";

export default function Home ({filter, query}) {

    // const [countries,setCountries]=useState(false)
    // const [showSingle,setSingleCountry]=useState(false);
    // // let url = props.data ? "https://restcountries.eu/rest/v2/all" : `https://restcountries.eu/rest/v2/name/${props.data}`;
    // const url = "https://restcountries.eu/rest/v2/all";
    // function getAPI() {
    //     fetch(url)
    //         .then(res=>res.json())
    //             .then (data=>setCountries(data));
    // }
    // useEffect(()=>{
    //     getAPI();
        
    // },[])


 
    // const handleSingleCard= (id) => {
    //     setSingleCountry(id);
       
    // }

    return (
        
        <div>
          
            <SearchBox/>
        </div>
    )
        
}