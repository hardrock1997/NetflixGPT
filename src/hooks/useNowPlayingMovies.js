import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import {NOWPLAYINGMOVIESAPI} from '../utils/constants'
import { useSelector } from "react-redux/es/hooks/useSelector"

const useNowPlayingMovies = ()=>{


    const dispatch = useDispatch()
    const nowPlayingMovies  = useSelector(store=>store.movies.nowPlayingMovies)

    const getNowPlayingMovies= async()=>{
      const data = await fetch(NOWPLAYINGMOVIESAPI,
      API_OPTIONS
      )
      const moviesData = await data.json()
      const movies = moviesData.results
      dispatch(addNowPlayingMovies(movies))
    }
    
    useEffect(()=>{
      !nowPlayingMovies && getNowPlayingMovies()
    },[])

}

export default useNowPlayingMovies