import { API_OPTIONS, TOPRATEDMOVIESAPI } from "../utils/constants"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { addTopRatedMovies } from "../utils/moviesSlice"

const useTopRatedMovies= ()=>{
    const dispatch=useDispatch()

    const getTopratedMovies=async ()=>{
        const data=await axios.get(TOPRATEDMOVIESAPI,API_OPTIONS)
        const topRatedMovies = data.data?.results
        dispatch(addTopRatedMovies(topRatedMovies))
    }

    useEffect(()=>{
        getTopratedMovies()
    },[])
}
export default useTopRatedMovies