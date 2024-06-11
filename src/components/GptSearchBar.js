import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { language } from '../utils/languageConstant'
import { openai } from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovies } from '../utils/gptSlice'


const GptSearchBar = () => {
  const searchText=useRef(null)
  const langKey=useSelector(store=>store.config.lang)
  const dispatch=useDispatch()

  //Movie search on tmdb
  const movieSearch=async(movie)=>{
    const data =await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json= await data.json()
    return json.results
  }

  //GPT search
  const handleGptSearchClick= async()=>{
    const gptQuery="Act as a movie recommendation system and suggest some movies for the query: "+ searchText.current.value +". only give me 5 movies, with comma separated like the example result given ahead. Example: Gadar, Golmaal, Yeh Jawani hai diwani, Koi mil Gaya, sholay"
    console.log(gptQuery)
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    if(!gptResults.choices){
      alert("No Movie")
    }
    console.log(gptResults.choices?.[0]?.message?.content)
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",")
    const data= gptMovies.map(movie=> movieSearch(movie))
    console.log(data)
    const tmdbResult=await Promise.all(data)
    console.log(tmdbResult)
    dispatch(addGptMovies({movieNames:gptMovies, movieResults:tmdbResult}))
    
   
  }
  return (
    <div className='pt-[40%]  md:pt-[7%] flex justify-center'>
        <form className=' w-full md:w-1/2 grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
            <input ref={searchText} className='p-4 m-4 col-span-9' type='text' placeholder={language[langKey].gptSearchPlaceholder}/>
            <button className='col-span-3 m-4 py-2  bg-red-800 text-white rounded-lg' onClick={handleGptSearchClick}>{language[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar