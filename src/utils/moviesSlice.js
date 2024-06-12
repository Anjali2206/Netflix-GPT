import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        upcomingMovies:null,
        topRatedMovies:null,
        trailerVideo: null,
        videoPlayer:null,
        
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addVideoPlayer:(state,action)=>{
            
            state.videoPlayer=action.payload
        },
        clearVideoPlayer: (state) => {
            state.videoPlayer = null;
        },
        

    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpcomingMovies,addTopRatedMovies,addVideoPlayer,clearVideoPlayer}=moviesSlice.actions
export default moviesSlice.reducer