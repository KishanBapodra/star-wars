import React, {useEffect, useState} from "react";
import { fetchMovies } from "../utils";

const Films = (url) => {
    
    const [films, setFilms] = useState([]);
    
    useEffect(()=> {
        fetchMovies(url.films).then(res => setFilms(res));
    }, []);

    return(
        <>
            {films.map((ele,i) => {
                return(<li key={i} className="text-[#9B9BA2] list-none">{ele}</li>)
            })}
        </>
    );
}

export default Films;