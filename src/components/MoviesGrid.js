import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCart from "./MovieCart";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handleSearchChnage = (e) => {
    setSearchTerm(e.target.value);
  };
  const handlGenreChnage = (e) => {
    setGenre(e.target.value);
  };
  const handleRatingChnage = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const matchesRating = (movies, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movies.rating >= 8;
      case "Ok":
        return movies.rating >= 5 && movies.rating < 8;
      case "Bad":
        return movies.rating < 5;

      default:
        return false;
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) &&
    matchesRating(movie, rating)&&
      matchesSearchTerm(movie, searchTerm)
  );

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <input
        onChange={handleSearchChnage}
        className="search-input"
        type="text"
        placeholder="Search for Movies....."
        value={searchTerm}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handlGenreChnage}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChnage}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCart key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
