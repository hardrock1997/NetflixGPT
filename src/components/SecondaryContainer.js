import { useSelector } from 'react-redux'
import { MovieList } from './MovieList'


const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)

  return (
    movies.nowPlayingMovies && (
    <div className=' bg-black'>
      <div className='mt-0 md:-mt-12 relative z-20 md:pl-12 pl-4'>
     < MovieList title={'Now Playing'} movies={movies.nowPlayingMovies}/>
     < MovieList title={'Top Rated'} movies={movies.topRatedMovies}/>
     < MovieList title={'Popular'} movies={movies.popularMovies}/>
     < MovieList title={'Upcoming Movies'} movies={movies.upcomingMovies}/>
     {/* movies of deferent genres can be added*/}
     </div>
    </div>
    )
  )
}

export default SecondaryContainer