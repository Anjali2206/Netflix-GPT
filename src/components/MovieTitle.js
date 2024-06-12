import React from 'react'

const MovieTitle = ({title, overview}) => {
   
  return (
    <div className='absolute pt-[20%] px-6 md:px-24 bg-gradient-to-r from-black w-screen aspect-video text-white'>    
        <h1 className='font-bold texl-2xl md:text-3xl'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg md:w-1/2'>{overview}</p>
        <div >
            <button className='bg-white text-black my-2 py-2 px-4 md:py-4 md:px-12  hover:bg-opacity-80 rounded-lg'>▶️ Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-600  py-4 px-12 bg-opacity-60 rounded-lg hover:bg-opacity-90'>More Info ℹ</button>
        </div>
    </div>
  )
}

export default MovieTitle