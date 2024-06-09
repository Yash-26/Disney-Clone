import React, {useEffect, useRef, useState} from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import LargeMovCard from './LargeMovCard';

function MovieList({genreid,index_}) {

    const [movieList,setMovieList] = useState([])

    const elementRef = useRef(null)

    useEffect(()=>{
        getMovies()
    },[])

    const getMovies=()=>{
        GlobalApi.getMovieByGenreID(genreid).then(resp=>{
            setMovieList(resp.data.results)
        })
    }

    const sliderLeft=(element)=>{
        element.scrollLeft-=500
    }

    const sliderRight=(element)=>{
        element.scrollLeft+=500
    }

  return (
    <div>
        <HiOutlineChevronLeft className={`hidden md:block text-white absolute text-[30px] left-8 cursor-pointer ${index_%3==0?'mt-[70px]':'mt-[170px]'}`} onClick={()=>sliderLeft(elementRef.current)}/>
        <HiOutlineChevronRight className={`hidden md:block text-white absolute text-[30px] right-10 cursor-pointer ${index_%3==0?'mt-[70px]':'mt-[170px]'}`} onClick={()=>sliderRight(elementRef.current)}/>
        <div className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth' ref={elementRef}>
            {
                movieList.map((item,index)=>(
                    <>
                    {index_%3==0?<LargeMovCard movie={item}/>: <MovieCard movie={item}/>}
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default MovieList