import { addPopularMovies } from "../utils/moviesSlice"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import {POPULARMOVIESAPI} from '../utils/constants'
import { useSelector } from "react-redux"

const usePopularMovies = ()=>{
    const dispatch=useDispatch()
    const popularMovies  = useSelector(store=>store.movies.popularMovies)
    const getPopularMovies = async ()=>{
        const data= await axios.get(POPULARMOVIESAPI,API_OPTIONS)
        const popularMovies = data.data?.results
        dispatch(addPopularMovies(popularMovies))
    }

        useEffect(()=>{
        !popularMovies && getPopularMovies()
        },[])

}

export default usePopularMovies
