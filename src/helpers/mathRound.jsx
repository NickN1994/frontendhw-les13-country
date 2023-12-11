import React from "react";


function mathRound(countryData) {
    const population = countryData.population;
    const populationRound = Math.round(population / 100000) * 100000;
    const populationRounded = populationRound.toLocaleString();

    return (
<div>
    <p>{countryData.name.common} is situated in {countryData.subregion} and the capital
        is {countryData.capital[0]}.</p>
    <p>It has a population of {populationRounded} and it border
        with {countryData.borders.length} neighboring countries</p>
</div>
    )
}

export default mathRound;