import React from "react";
import Movie from "./movies";

const MovieList = ({ movies }) => {
  return (
    <div className="body">
      {movies.map((el, i) => (
        <Movie mv={el} key={i} />
      ))}
    </div>
  );
};
export default MovieList;
