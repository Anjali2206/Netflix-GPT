import React from 'react'
import { NETFLIX_BG } from '../utils/constants'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'


const GptSearch = () => {
  return (
<<<<<<< HEAD
    <>
    <div className="fixed -z-10">
=======
    <div>
        <div className="fixed -z-10">
>>>>>>> 1b9fa70 (GPT Movie Suggestion)
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