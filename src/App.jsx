import './App.css';
import React from "react";
import worldmap from "./assets/world_map.png";
import axios from "axios";
import CountryTile from "./Components/CountryTile.jsx";
import color from "./helpers/color.js";
import mathRound from "./helpers/mathRound.jsx";

function App() {
    const [countries, setCountries] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [countryData, setCountryData] = React.useState({});
    const [error, setError] = React.useState('');
    const handleReset = () => {
        setCountries([]);
    };


    async function fetchCountry() {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            // console.log(response.data);
            setCountries(response.data);
        } catch (e) {
            console.error(e)

        }
    }

    async function searchCountry() {
        setError('');
        try {
            const searchResult = await axios.get(`https://restcountries.com/v3.1/name/${search}`);
            console.log(searchResult.data[0])
            setCountryData(searchResult.data[0])
        } catch (e) {
            console.error(e)
            setError('Het ophalen van de data is mislukt. Misschien is er een typfout. De naam moet in het Engels zijn.')
        }
    }


    return (
        <>
            <main>
                <div className="header">
                    <img src={worldmap} alt="map of the world" className="worldMap"/>
                    <h1>World Regions</h1>
                    <button type='button' onClick={() => fetchCountry()}>Zoek Land</button>
                    <button type='reset' onClick={handleReset}>Reset</button>
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

                <div>
                    <h2>Search country information</h2>
                    <div className='searchbar'>
                        <input
                            type="text"
                            placeholder="Bijvoorbeeld Nederland of Peru"
                            className='searchField'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    searchCountry();
                                }
                            }}/>
                        <button type='button' className='searchButton' onClick={searchCountry}>ZOEK</button>

                    </div>
                    {error}
                    {Object.keys(countryData).length > 0 && (
                        <div className="boxresult">
                            <div className="flag">
                                <img height="30" width="50" src={countryData.flags.svg} alt="vlag"/>
                                <h2>{countryData.name.common}</h2>
                            </div>
                            {mathRound(countryData)}
                        </div>
                    )
                    }

                </div>
            </main>
        </>

    )
}

export default App
