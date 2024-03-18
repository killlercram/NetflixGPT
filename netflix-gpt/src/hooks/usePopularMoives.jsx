// import React from 'react'

import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";


const usePopularMoives = () => {
  const dispatch=useDispatch();
  const getPopularMovies=async () => {
    const data=await fetch(
      'https://api.themoviedb.org/3/movie/top_rated', API_OPTION
    );
    const json=await data.json();
    console.log(json);
    dispatch(addPopularMovies(json.results));

  };
  useEffect(()=>{
    getPopularMovies();},[]);
};

export default usePopularMoives;