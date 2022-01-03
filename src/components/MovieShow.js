import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {

    const parmas = useParams();
    console.log("parmas: ", parmas);

    return(
       <div>
           <h3>{movies[parmas.movieID].title}</h3>
       </div>
    );

}

export default MovieShow;