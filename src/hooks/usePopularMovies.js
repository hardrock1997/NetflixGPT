import { addPopularMovies } from "../utils/moviesSlice"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import {POPULARMOVIESAPI} from '../utils/constants'

const usePopularMovies = ()=>{
    const dispatch=useDispatch()

    const getPopularMovies = async ()=>{
        const data= await axios.get(POPULARMOVIESAPI,API_OPTIONS)
        const popularMovies = data.data?.results
        dispatch(addPopularMovies(popularMovies))
    }

        useEffect(()=>{
        getPopularMovies()
        },[])

}

export default usePopularMovies
