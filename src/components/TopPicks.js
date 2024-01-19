import React from 'react';
import {topPicks} from '../data.js';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TopPicks = () => {
  return (
    <div>
       <h1 className='text-2xl text-center text-orange-500 font-bold py-2'>Top Picks</h1>
       <div className=' flex max-w-[1520px] m-auto py-2 px-2'>
        <Splide options={{perPage:4,gap:"0.5rem",drag:"free", breakpoints: {
    640: {
      perPage: 2,
    },
    480: {
      perPage: 1,
    },}}}>
            {topPicks.map((item)=> {
                return(
                    <SplideSlide key={item.id}>
                    <div className='rounded-3xl relative '> 
                    <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                        <p className='px-4 pt-4 text-bold text-2xl '>{item.title}</p>
                        <p className='px-4'>{item.price}</p>
                        <button className='rounded-3xl bg-black/70 text-white p-2 mx-2 absolute bottom-4'>Add to Cart</button>
                      </div>
                      <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300' src={item.img} alt={item.title} />
                            
                    </div>
                    </SplideSlide>
                )
            })}</Splide>
       </div>
        
        </div>
  )
}

export default TopPicks