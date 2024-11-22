import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry}) => {
    const {name, flags} = country;
    const[visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'} `}>
            <h4>Name: {name?.common}</h4>
            <img src={flags.png} alt="" />

            <button onClick= {() => handleVisitedCountry(country)}> Mark Visited</button>

            <button onClick={handleVisited}>{visited ? "Visited" : "Visit"}</button>

            
        </div>
    );
};

export default Country;