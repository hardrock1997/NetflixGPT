import { useSelector } from 'react-redux'
import { MovieList } from './MovieList'


const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)

  return (
    movies.nowPlayingMovies && (
    <div className=' bg-black'>
      <div className='-mt-52 relative z-20 pl-12'>
     < MovieList title={'Now Playing'} movies={movies.nowPlayingMovies}/>
     < MovieList title={'Top Rated'} movies={movies.topRatedMovies}/>
     < MovieList title={'Popular'} movies={movies.popularMovies}/>
     < MovieList title={'Upcoming Movies'} movies={movies.upcomingMovies}/>
     {/* yet to add movies of deferent genres */}
     {/* < MovieList title={'Horror Movies'} movies={movies.nowPlayingMovies}/> */}
     </div>
    </div>
    )
  )
}

export default SecondaryContainer