import { useParams } from "react-router";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  console.log(movieId);

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={styles.col + " " + styles.movieImage}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.MovieDetails}`}>
        <p className={styles.firsItem}>
          <strong>Title: </strong> {movie.title}
        </p>
        <strong>Genres:</strong>{" "}
        <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
