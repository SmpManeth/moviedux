import React from "react";
import "../styles.css";
import MovieCart from "./MovieCart";



export default function Watchlist({watchList , movies , toggleWatchlist}) {
    return (
        <div>
            <h1>Watchlist</h1> 
            <div className="watchlist" >
                {
                    watchList.map(id => {
                        const movie =movies.find(movie => movie.id === id);
                        return <MovieCart key={id} movie={movie} isWatchlisted={true} toggleWatchlist={toggleWatchlist} />
                    })
                }
            </div>
                
        </div>
    )
}