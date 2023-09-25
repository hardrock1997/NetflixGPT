import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useNowPlayingMovies = ()=>{


    const dispatch = useDispatch()

    const getNowPlayingMovies= async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_OPTIONS
      )
      const moviesData = await data.json()
      const movies = moviesData.results
      dispatch(addNowPlayingMovies(movies))
    }
    
    useEffect(()=>{
      getNowPlayingMovies()
    },[])

}

export default useNowPlayingMovies