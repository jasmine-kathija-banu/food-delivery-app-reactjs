import React from 'react';
import {reviews} from '../data.js';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Review = () => {
  return (
    <div className='container m-auto'>
       <h1 className='text-2xl text-center text-orange-500 font-bold py-2'>Reviews</h1>
       <div className=' max-w-[1520px] m-auto  py-2 px-1 lg:px-10 '>
        <Splide options={{perPage:2,gap:"8.7rem",drag:"free", breakpoints: {
    640: {
      perPage: 2,
      gap:"0.2rem",
      
    },
    480: {
      perPage: 1,
      gap:"0.2rem",
    },}}}>
            {reviews.map((item)=> {
                return(
                    <SplideSlide key={item.id}>
                      <div className='py-10'>
                        <div className='h-[220px] lg:h-[180px] shadow-xl shadow-slate-500 border-2 border-gray-400 bg-gray-200 rounded-2xl text-white'> 
                        <p className='px-4 py-2 text-bold text-2xl text-black font-bold '>{item.name}</p>
                        <p className='px-4 pb-2'>{item.star}</p>
                        <p className='px-4 pb-4  text-black text-lg '>{item.review}</p>
                      
                      </div>
                      </div>
                   
                    </SplideSlide>
                )
            })}</Splide>
       </div>
        
        </div>
  )
}

export default Review