// import React from 'react'
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // api calling
  //fetching trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    ); //this option is already we put the constant
    const json = await data.json();
    //console.log(json);
    const trailer = json.results.filter((video) => video.type === "Trailer");
    // console.log(trailer);
    // setTrailerId(trailer[0].key);
    dispatch(addTrailerVideo(trailer));
    //console.log(trailerVideos);
  };

  useEffect(() => {
    getMovieVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMovieTrailer;
