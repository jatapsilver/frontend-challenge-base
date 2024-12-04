"use client";

import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/naming-convention
import Movies from "../components/Movies";
import styles from "../styles/search.module.css";

interface Genre {
  id: number;
  name: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function Search(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10);
    setSelectedGenre(isNaN(value) ? null : value);
  };

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en-US";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTlmMmU0MWE5YTUyOWM1MDJmMmUzNmI5ZTY2YmE0NyIsIm5iZiI6MTczMzMyMTk4OC4zNjA5OTk4LCJzdWIiOiI2NzUwNjUwNDliZWU2NDY5YzE0NTdmMDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FCLtUyMFphJBiD_Vjp2CdAb07oOkkBBaXKzKXS0uAMM",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .then((data) => setGenres(data.genres || []))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <h2>Search Movies</h2>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleInputChange}
          className={styles.input}
        />
        <select onChange={handleGenreChange} className={styles.select}>
          <option value="">Select a genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.movieList}>
        <Movies query={query} genreId={selectedGenre} />
      </div>
    </div>
  );
}
