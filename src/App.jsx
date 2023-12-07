import './App.css';
import React from "react";
import worldmap from "./assets/world_map.png";
import axios from "axios";

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
        // <>
        //     <main>
        //         <img src={worldmap} alt="map of the world "/>
        //         <h1>World Regions</h1>
        //         <button type="button" onClick={() => fetchCountry()}>
        //             Get info
        //         </button>
        //
        //         {countries.length > 0 && (
        //             <ul>
        //                 <li key={countries[0].name.common}>
        //                     <img height="30" width="50" src={countries[0].flags.svg} alt=""/>
        //                     <p>{countries[0].name.common}</p>
        //                     <p>Has a population of {countries[0].population} people</p>
        //                 </li>
        //             </ul>
        //         )}
        //     </main>
        // </>

        <>
            <main>
                <img src={worldmap} alt="map of the world "/>
                <h1>World Regions</h1>
                <button type='button' onClick={() => fetchCountry()}>Zoek Land</button>

                {countries.length > 0 && (
                    <li key={countries[0].name.common} className='countryInfo'>
                        <div>
                            <img height="30" width="50" src={countries[0].flags.svg} alt="country flag"/>
                            <p>{countries[0].name.common}</p>
                            <p>"Has a population of " {countries[0].population}</p>

                    </div>
                    </li>
                    )}

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
