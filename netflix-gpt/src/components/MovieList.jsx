/* eslint-disable react/prop-types */
// import React from 'react'

import MoiveCard from "./MoiveCard";

// eslint-disable-next-line react/prop-types
const MovieList = ({ title, movies }) => {
  // eslint-disable-next-line react/prop-types
  //  const firstMoviePosterPath = movies && Array.isArray(movies) && movies.length > 0 ? movies[0]?.poster_path : null;
  return (
    <div className="px-4 bg-black">
        <h1 className="text-xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies && Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
              <MoiveCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movie to display</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
