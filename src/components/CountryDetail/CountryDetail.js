import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} = useParams();

    const [country, setCountry] = useState({});
    useEffect( () => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
        console.log(country);
    }, [countryName])
    
    return (
        <div>
            <h2>This is for country details:{countryName}</h2>
            <img src={country[0]?.flags?.png} alt="" />
            <h1>Name: {country[0]?.name?.common}</h1>
            <h3>Capital: {country[0]?.capital[0]}</h3>
            <h4>Continents: {country[0]?.continents[0]}</h4>
        </div>
    );
};

export default CountryDetail;