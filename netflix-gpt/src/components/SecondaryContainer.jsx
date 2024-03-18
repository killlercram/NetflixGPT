// import React from 'react'
import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  if(!movies) return;
  //  console.log(movies);
  return (
    <div className=" bg-black">
      <div className="-mt-52">
      <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.addPopularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Old Moies"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"kids"} movies={movies.addNowPlayingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer;