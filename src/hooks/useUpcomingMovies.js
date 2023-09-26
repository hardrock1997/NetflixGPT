import { API_OPTIONS, UPCOMINGMOVIESAPI } from "../utils/constants"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { addUpcomingMovies } from "../utils/moviesSlice"
import { useSelector } from "react-redux"

const useUpcomingMovies = ()=>{
    const dispatch=useDispatch()
    const upComingMovies  = useSelector(store=>store.movies.upcomingMovies)
    const getUpcomingMovies = async ()=>{
        const data=await axios.get(UPCOMINGMOVIESAPI,API_OPTIONS)
        const upComingMovies = data.data?.results
        dispatch(addUpcomingMovies(upComingMovies))
    }

    useEffect(()=>{
    !upComingMovies &&  getUpcomingMovies()
    },[])
}
export default useUpcomingMovies