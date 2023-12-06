import './App.css';
import React from "react";
import worldmap from "./assets/world_map.png";

function App() {
    const [countries, setCountries] = React.useState([]);

    async function fetchCountry() {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            console.log(response.data);
            setCountries(response.data);
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <main>
                <img src={worldmap} alt="map of the world "/>
                <h1>World Regions</h1>
                <button type='button' onClick={fetchCountry}>Zoek Land</button>

                <ul>
                    {countries.length > 0 &&
                        countries.map((country) => {
                            return (
                                <li key={country.name.common} className='countryInfo'>
                                    <img height="30" width="50" src={country.flags.svg} alt="country flag"/>
                                    <p>{country.name.common}</p>
                                    <p>"Has a population of " {country.population}</p>
                                </li>
                            )

                        })

                    }
                </ul>
            </main>
        </>
    )
}

export default App
