import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmMxMzY5YTVkNzVmNzA0MzQzNWQxY2I5NThkZjg1ZSIsInN1YiI6IjYyM2NmMTExYTM0OTExMDA1ZGNhMTNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fe1NVrBZgqpwbboIfHnMRTXoOeUm-3MZWMqMKq2wSew",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((results) => results.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
