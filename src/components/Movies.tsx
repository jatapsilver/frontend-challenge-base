"use client";

import { useEffect, useState } from "react";
import styles from "../styles/movies.module.css";

interface MoviesProps {
  query: string;
  genreId: number | null;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function Movies({
  query,
  genreId,
}: Readonly<MoviesProps>): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const fetchMovies = (url: string) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTlmMmU0MWE5YTUyOWM1MDJmMmUzNmI5ZTY2YmE0NyIsIm5iZiI6MTczMzMyMTk4OC4zNjA5OTk4LCJzdWIiOiI2NzUwNjUwNDliZWU2NDY5YzE0NTdmMDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FCLtUyMFphJBiD_Vjp2CdAb07oOkkBBaXKzKXS0uAMM",
      },
    };

    setLoading(true);

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setMovies(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    let url = "";
    if (query.trim()) {
      url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US`;
    } else if (genreId) {
      url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en-US&page=1`;
    } else {
      url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
    }

    fetchMovies(url);
  }, [query, genreId]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const renderMovies = () =>
    movies.map((movie) => (
      <div key={movie.id} className={styles.movieCard}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || "No title available"}
          className={styles.movieImage}
        />
        <h3 className={styles.movieTitle}>{movie.title || "Unknown"}</h3>
        <div className={styles.movieInfo}>
          <p>Release: {movie.release_date || "N/A"}</p>
          <p>Rating: {movie.vote_average || "N/A"}</p>
        </div>
      </div>
    ));

  return (
    <div>
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <div className={styles.moviesContainer}>{renderMovies()}</div>
      )}
    </div>
  );
}
