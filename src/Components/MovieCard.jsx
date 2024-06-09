import React from 'react'

const ImageBaseUrl = 'https://image.tmdb.org/t/p/original'

function MovieCard({movie}) {
  return (
    <>
        <img src={ImageBaseUrl+movie.poster_path} className='w-[110px] md:w-[250px] rounded-lg hover:scale-95 transition-all duration-300 ease-in-out hover:border-[3px] border-gray-400 cursor-pointer'/>
    </>
  )
}

export default MovieCard