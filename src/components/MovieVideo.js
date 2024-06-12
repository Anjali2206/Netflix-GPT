import React, { useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

import MoviePlayer from './MoviePlayer'
import { clearVideoPlayer } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

const MovieVideo = () => {
  
    const { movieId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const handlePopState = () => {
            // Clear video player state when navigating back to browse page
            dispatch(clearVideoPlayer());
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
            dispatch(clearVideoPlayer());
        };
    }, [dispatch]);

    const handleGoBack = () => {
        // Clear video player state and navigate back to the browse page explicitly
        dispatch(clearVideoPlayer());
        navigate('/browse');
    };

 
  return (
    <div>
      <div className="flex flex-col md:flex-row px-8 w-screen py-2 absolute z-20 bg-gradient-to-b from-gray-900 text-white">
        <button onClick={handleGoBack} className='bg-red-700 w-8 h-6 mt-6'>◀️</button>
      <img
        className="w-44 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      /></div>
     
      <MoviePlayer movieId={movieId}/>
        
    </div>
  )
}

export default MovieVideo