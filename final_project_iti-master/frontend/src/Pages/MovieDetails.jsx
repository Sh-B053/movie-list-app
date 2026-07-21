import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = "2aee4f30357a36c8999c9751b16a8b81";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
  console.error("Error loading movie details:", err);
  setError("Failed to load movie details.");
}

    }

    async function fetchTrailer() {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
        const data = await res.json();

        const youtubeTrailer = data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        if (youtubeTrailer) {
          setTrailerKey(youtubeTrailer.key);
        }
      } catch (err) {
        console.error("Failed to load trailer", err);
      }
    }

    fetchMovieDetails();
    fetchTrailer();
  }, [id]);

  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details" style={{ padding: "2rem", color: "#fff" }}>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ maxWidth: "300px", marginBottom: "2rem" }}
      />

      {trailerKey && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Trailer</h2>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="Movie Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
