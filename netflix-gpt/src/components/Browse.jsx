// import React from 'react'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
 import usePopularMoives from "../hooks/usePopularMoives";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
 useNowPlayingMovies();
 usePopularMoives();
  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  );
};

export default Browse;
