import React from 'react'
import { useSelector } from 'react-redux'
import { Loading } from './Loading'
import { MovieList } from './MovieList'

export const GptMovieSuggestions = () => {

    const {movieResults,movieNames} = useSelector(store=>store.gpt)

    if(!movieNames) return null


  return (
    <>
    {!movieNames ? <Loading/> : (
        <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
        {movieNames.map((movieName,index)=>{
           return <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
        })}
        </div>
    )}

    </>

  )
}
