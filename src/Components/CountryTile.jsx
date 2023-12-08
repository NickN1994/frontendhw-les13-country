import React from "react";


function CountryTile(props) {
    return (
        <div className="tile">
            <div className="innertile">
                <img height="30" width="50" src={props.img} alt={props.alt} className="flag"/>
                <p>{props.name} </p>
            </div>
            <p> Has a population of {props.population} people</p>
        </div>
    )
}

export default CountryTile;