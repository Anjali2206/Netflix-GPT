import React from 'react'
import MovieTitle from './MovieTitle'
import { useSelector } from 'react-redux'
import MovieBackground from './MovieBackground'

const MainContainer = () => {
    const movies=useSelector((store)=> store.movie?.nowPlayingMovies)
    if(!movies) return null

    const mainMovie=movies[1]
    const {original_title, overview,id}=mainMovie
    
  return (
    <div>
        <MovieTitle title={original_title} overview={overview} />
        <MovieBackground movieId={id}/>
        
    </div>
  )
}

export default MainContainer