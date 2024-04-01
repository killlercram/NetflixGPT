// import React from 'react'
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMoives from "../hooks/usePopularMoives";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
 useNowPlayingMovies();
 usePopularMoives();
  return (
    <div>
      <Header></Header>
      {
        showGptSearch?(<GptSearch/>):(<>
        <MainContainer/>
        <SecondaryContainer/>
        </>)
      };
    </div>
  );
};

export default Browse; 
