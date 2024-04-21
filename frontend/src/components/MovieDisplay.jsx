const MovieDisplay = function (movie) {
  return (
    <div
      className="movieDisplay"
      onClick={() => {
        window.location.href = `/movie?movie=${movie.movie["title"]}`;
      }}
    >
      <img src={movie.movie["poster"]} alt="" />
      <p>{movie.movie["title"]}</p>
    </div>
  );
};

export default MovieDisplay;
