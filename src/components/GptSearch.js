import React from 'react'
import { GptSearchBar } from './GptSearchBar'
import { GptMovieSuggestions } from './GptMovieSuggestions'
import { HERO } from '../utils/constants'

export const GptSearch = () => {
  return (
    <div>
         <div className='absolute w-screen -z-10'>
         <img
            src={HERO}
            alt='hero'
            className='w-screen'
        />
        </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}
