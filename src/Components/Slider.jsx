import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";


const ImageBaseUrl = 'https://image.tmdb.org/t/p/original'

const screenWidth = window.innerWidth

function Slider() {

    const [movList,setMovList] = useState([])

    useEffect(()=> {
        getTrendingMovies()
    },[])

    const elementRef = useRef()

    const getTrendingMovies=()=> {
        GlobalApi.getTrendingVideos.then(resp=>{
            setMovList(resp.data.results)
        })
    }

    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }

    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }


  return (
    <div>
        <HiOutlineChevronLeft className='hidden md:block text-white absolute mt-[150px] mx-9 cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
        <HiOutlineChevronRight className='hidden md:block text-white absolute mt-[150px] mx-9 right-0 cursor-pointer' onClick={()=>sliderRight(elementRef.current)}/>
        <div className='flex px-16 py-4 w-full overflow-x-auto scrollbar-hide scroll-smooth' ref={elementRef}>
            {
                movList.map((item)=>(
                    <img src={ImageBaseUrl+item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-top mx-4 rounded-md hover:border-[4px] border-gray-500 transition-all duration-100 ease-in-out'/>
                ))
            }
        </div>
    </div>
  )
}

export default Slider