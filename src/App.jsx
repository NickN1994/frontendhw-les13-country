import './App.css';
import React from "react";
import worldmap from "./assets/world_map.png";
import axios from "axios";
import CountryTile from "./Components/CountryTile.jsx";
import color from "./helpers/color.js";
import countryTile from "./Components/CountryTile.jsx";

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
                <div className="header">
                <img src={worldmap} alt="map of the world" className="worldMap"/>
                <h1>World Regions</h1>
                <button type='button' onClick={() => fetchCountry()}>Zoek Land</button>
                </div>

                <div className="box">
                {countries.length > 0 &&
                    countries
                        .sort((a, b) => a.population - b.population)
                        .map((country) => {
                    return <li key={country.name.common} className='countryInfo'>
                        <CountryTile
                            img={country.flags.svg}
                            alt={"country flag"}
                            name={country.name.common}
                            className={color(country.region)}
                            population={country.population}
                        />
                    </li>
                        })
                    }
                </div>


            </main>
        </>

        // <>
        //     <main>
        //         <img src={worldmap} alt="map of the world "/>
        //         <h1>World Regions</h1>
        //         <button type='button' onClick={() => fetchCountry()}>Zoek Land</button>
        //         {countries.length > 0 && countries.map((country) => {
        //             return (
        //                 <li key={country[0].name} className='countryInfo'>
        //                     <img height="30" width="50" src={country.flags.svg} alt="country flag"/>
        //                     <p>{country[0].name}</p>
        //                     <p>"Has a population of " {country[0].population}</p>
        //                 </li>
        //             )
        //         })
        //         }
        //     </main>
        // </>
    )
}

export default App
