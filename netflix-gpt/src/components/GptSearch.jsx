// import React from 'react'
import { BG_URL } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div>
       <div className="absolute -z-20">
        <img
          className=""
          src={BG_URL}
          alt="background_img"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch;