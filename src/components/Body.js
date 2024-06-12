import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieVideo from './MovieVideo';


const Body=()=>{
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        },
        {
            path:'/browse/:movieId',
            element:<MovieVideo/>
        },
    
    ])
     


    

    return(
        <div>
            <RouterProvider router={appRouter}/>
            

        </div>
    )
}

export default Body;