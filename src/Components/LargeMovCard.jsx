import React from 'react'
const ImageBaseUrl = 'https://image.tmdb.org/t/p/original'

function LargeMovCard({movie}) {
  return (
    <div className='hover:scale-95 transition-all duration-300 ease-in-out'>
        <img src={ImageBaseUrl+movie.backdrop_path} className='w-[110px] md:w-[250px] rounded-lg  hover:border-[3px] border-gray-400 cursor-pointer'/>
        <h2 className='text-[12px] md:text-[16px] w-[110px] md:w-[250px] text-white mt-3'>{movie.title}</h2>
    </div>
  )
}

export default LargeMovCard