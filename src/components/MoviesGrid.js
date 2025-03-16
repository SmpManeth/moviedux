import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCart from "./MovieCart"

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]); 


  useEffect(() => {
    
    fetch("movies.json")
    .then(response => response.json())
    .then(data => setMovies(data));

  } , []);

  return ( 
    <div className="movies-grid">
      {
         movies.map(movie => (
           <MovieCart key={movie.id} movie={movie} />
         ))
      }
    </div>
  );
}
