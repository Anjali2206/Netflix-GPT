import React from 'react'

const MovieTitle = ({title, overview, poster}) => {
   
  return (
    <div className='absolute pt-[20%] px-24 bg-gradient-to-r from-black w-screen aspect-video text-white'>
        
       
        <h1 className='font-bold text-3xl'>{title}</h1>
        
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div >
            <button className='bg-white text-black p-4 px-12  hover:bg-opacity-80 rounded-lg'>▶️ Play</button>
            <button className=' mx-2 bg-gray-600  p-4 px-12 bg-opacity-60 rounded-lg hover:bg-opacity-90'>More Info ℹ</button>
        </div>
    </div>
  )
}

export default MovieTitle