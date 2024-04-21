import { useEffect, useState } from "react";

const Movie = function () {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const urlParams = new URLSearchParams(window.location.search);
      const paramValue = urlParams.get("movie");
      const res = await fetch("http://localhost:8000/getMovies");
      const m = await res.json();
      [...m].forEach((movie) => {
        if (movie["title"] == paramValue) {
          setMovieData(movie);
        }
      });
    }
    fetchData();
  }, []);
  return (
    <div className="moviePage">
      <img src={movieData["poster"]} className="fullMoviePoster" alt="" />
      <p>{movieData["title"]}</p>
      <p>{movieData["year"]}</p>
      <p>{movieData["genre"]}</p>
      <p>{movieData["runtime"]}</p>
      <p>{movieData["overview"]}</p>
      <p>{movieData["director"]}</p>
      <p>{movieData["stars"]}</p>
    </div>
  );
};

export default Movie;
