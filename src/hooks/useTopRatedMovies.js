import { API_OPTIONS, TOPRATEDMOVIESAPI } from "../utils/constants"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { addTopRatedMovies } from "../utils/moviesSlice"
import { useSelector } from "react-redux"

const useTopRatedMovies= ()=>{
    const dispatch=useDispatch()
    const topRatedMovies  = useSelector(store=>store.movies.topRatedMovies)
    const getTopratedMovies=async ()=>{
        const data=await axios.get(TOPRATEDMOVIESAPI,API_OPTIONS)
        const topRatedMovies = data.data?.results
        dispatch(addTopRatedMovies(topRatedMovies))
    }

    useEffect(()=>{
       !topRatedMovies  && getTopratedMovies()
    },[])
}
export default useTopRatedMovies