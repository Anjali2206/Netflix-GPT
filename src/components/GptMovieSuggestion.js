import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  const {movieNames, movieResults}=useSelector(store=>store.gpt)
  if (!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black opacity-90 text-white'>
      <div>
        {
          movieNames.map((movieName, index)=>(
            <MovieList title={movieName} movies={movieResults[index]}/>
          ))

        }
      </div>
    </div>
  )
}

export default GptMovieSuggestion