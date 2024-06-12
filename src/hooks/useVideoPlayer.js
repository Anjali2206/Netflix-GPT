import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVideoPlayer, clearVideoPlayer } from '../utils/moviesSlice'
import { API_OPTIONS } from '../utils/constants'


const useVideoPlayer = (movieId) => {
    const dispatch=useDispatch()
    const videoPlayer=useSelector(store=> store.movie.videoPlayer)
 
    
    const getMovieVideo=async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
        const json= await data.json()
        
        const filteredData= json.results.filter(video=> video.type === "Trailer")
       
        const trailer=filteredData.length? filteredData[0]:json.results[0]
        if (trailer && trailer.id !== videoPlayer?.id) {
            dispatch(addVideoPlayer(trailer));
        }
    }

    useEffect(()=>{
        if (!videoPlayer || videoPlayer.movieId !== movieId) {
            getMovieVideo();
        }
        
    },[movieId, videoPlayer])

    
}

export default useVideoPlayer