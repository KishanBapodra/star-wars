import React from "react";
import Films from "./film";
import PlanetCreated from "./planetCreated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const Card = ({planet, toggle}) => {
    
    const films = planet.films
    
    return(
        <div className="m-2 py-3 px-8 text-white flex justify-between rounded-lg bg-[#2B2B2E]">
            <div className="flex flex-col justify-between h-full pb-5  ">
                <PlanetCreated created={planet.created} />
                <div className="pt-3 flex items-center">
                    <FontAwesomeIcon className="text-2xl" icon={faFilm} />
                    <div className="text-left text-lg ml-8">
                        <h1 className="font-extrabold">{planet.name}</h1>
                        <Films url={films}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-evenly">
                <PlanetCreated created={planet.created} />
                <p className="text-[#606068] text-xl">{planet.climate}</p>
            </div>
        </div>
    );
}

export default Card;