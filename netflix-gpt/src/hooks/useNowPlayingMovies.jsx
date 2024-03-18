import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  //dispatching action
  const dispatch = useDispatch();
  //fetching api
  const getNowPalyingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    ); //i want to send the api option to fetch call

    const json = await data.json(); //consverting this promise into json from readable stream
    json.results;
    dispatch(addNowPlayingMovies(json.results));
  };

  //calling api
  useEffect(() => {
    getNowPalyingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default useNowPlayingMovies;
