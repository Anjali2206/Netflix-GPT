import React from 'react'
import { useSelector } from 'react-redux'
import { language } from '../utils/languageConstant'

const GptSearchBar = () => {
  const langKey=useSelector(store=>store.config.lang)
  return (
    <div className='pt-[7%] flex justify-center'>
        <form className='w-1/2 grid grid-cols-12'>
            <input className='p-4 m-4 col-span-9' type='text' placeholder={language[langKey].gptSearchPlaceholder}/>
            <button className='col-span-3 m-4 py-2 bg-red-800 text-white rounded-lg'>{language[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar