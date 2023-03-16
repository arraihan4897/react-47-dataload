import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Counmtriez = () => {
    const [countriez , setCountriez]=useState([]);
    useEffect(()=>{
          fetch('https://restcountries.com/v3.1/all')
          .then (res => res.json())
         .then (data =>setCountriez(data))
           },[])
    return (
        <div>
            {
                countriez.map(country=><Country
                    population={country.population} name={country.name.common}></Country>)
            }
            
        </div>
    );
};

export default Counmtriez;