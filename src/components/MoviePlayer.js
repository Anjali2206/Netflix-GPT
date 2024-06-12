import React from 'react'

import { useSelector } from 'react-redux'
import useVideoPlayer from '../hooks/useVideoPlayer'

const MoviePlayer = ({movieId}) => {
    const videoPlayer=useSelector(store=> store.movie?.videoPlayer)
    useVideoPlayer(movieId) 
  return (
    <div className='w-screen' >
        <iframe className='w-screen aspect-video'  src={"https://www.youtube.com/embed/"+videoPlayer?.key+"?autoplay=1&unmute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default MoviePlayer