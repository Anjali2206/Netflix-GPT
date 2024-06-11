import React from 'react'
import { NETFLIX_BG } from '../utils/constants'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'


const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img
          className="w-screen h-screen object-cover "
          src={NETFLIX_BG}
          alt="Netflix-img"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-gray-900 to-transparent"></div>
      </div>
    
    <div>
        
      <GptSearchBar/>
      <GptMovieSuggestion/>     
    </div>
    </>
  )
}

export default GptSearch