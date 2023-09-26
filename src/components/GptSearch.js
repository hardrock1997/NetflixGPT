import React from 'react'
import { GptSearchBar } from './GptSearchBar'
import { GptMovieSuggestions } from './GptMovieSuggestions'
import { HERO } from '../utils/constants'

export const GptSearch = () => {
  return (
    <>
     <div className='fixed -z-10'>
         <img
            src={HERO}
            alt='hero'
            className='h-screen object-cover'
        />
        </div>
    <div className=''>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
    </>
  )
}
