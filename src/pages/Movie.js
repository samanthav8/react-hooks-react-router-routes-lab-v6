import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res => res.json())
    .then(data => setMovie(data))
    .catch(error => console.log(error))
  }, [movieId]);

  const renderGenres = () => {
    return movie.genres && movie.genres.map((genre, index) => (
      <span key={index}>{genre}</span>
    ));
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Length: {movie.time}</p>
        <span>Genres:</span>
        <div>
          {renderGenres()}
        </div>
      </main>
    </>
  );
};

export default Movie;
