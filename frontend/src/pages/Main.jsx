import { useEffect, useState } from "react";
import MovieDisplay from "../components/MovieDisplay.jsx";

const Main = function () {
  const [movies, setMovies] = useState([]);
  const [numberOfMovies, setNumberOfMovies] = useState(100);
  useEffect(function () {
    async function fetchData() {
      const res = await fetch("http://localhost:8000/getMovies");
      const m = await res.json();
      return m;
    }
    async function startup() {
      setMovies(await fetchData());
    }
    startup();
    document
      .querySelector(".movieSearch")
      .addEventListener("keyup", async (e) => {
        const temp = [];
        const searchQuery = String(e.target.value);
        const dataset = await fetchData();
        [...dataset].forEach((movie) => {
          if (
            String(movie["title"])
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          ) {
            temp.push(movie);
          }
        });
        setMovies(temp);
      });
  }, []);
  return (
    <div className="homePage">
      <div className="bars">
        <input type="text" className="movieSearch" placeholder="title" />
      </div>

      <div className="movies">
        {[...movies].slice(0, numberOfMovies).map((movie, index) => (
          <MovieDisplay key={index} movie={movie} />
        ))}
      </div>
      <div className="bars">
        <button
          onClick={() => {
            setNumberOfMovies(numberOfMovies + 100);
          }}
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default Main;
