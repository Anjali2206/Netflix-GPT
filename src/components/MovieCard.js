import React from 'react'
import { CDN_URL } from '../utils/constants'


const MovieCard = ({posterPath}) => {

  if(!posterPath) return null
  //newly added

  return (
    <div className='w-52 m-3 '>
      <img className='hover:scale-125  transition-all duration-500 cursor-pointer'  alt="poster_img" src={CDN_URL+posterPath}  ></img> 
        
              
    </div>
  )
}

export default MovieCard