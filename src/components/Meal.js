import React, { useState } from 'react';
import {mealData} from '../data.js'
import { IoIosArrowRoundForward } from "react-icons/io";


const Meal = () => {

  const[food, setFood]=useState(mealData)
  const filterCat =(categories)=>{
    setFood(
      mealData.filter((item)=>{
        return item.category === categories
      })
    )
  }

  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
      <h1 className='text-orange-500 font-bold text-2xl text-center py-2 '>Our Meal</h1>
      <div className='flex flex-col lg:flex-row justify-center'>
        <div className='flex justify-center md:justify-center py-4'>
          <button onClick={()=>setFood(mealData)} className='m-1 py-2 px-4 rounded-2xl font-bold border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700  hover:border-orange-700  '>All</button>
          <button onClick={()=>filterCat("pizza")} className='m-1 py-2 px-4 rounded-2xl font-bold border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700  hover:border-orange-700 '>Pizza</button>
          <button onClick={()=>filterCat("chicken")} className='m-1 py-2 px-4 rounded-2xl font-bold border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700  hover:border-orange-700 '>Chicken</button>
          <button onClick={()=>filterCat("salad")} className='m-1 py-2 px-4 rounded-2xl font-bold border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700  hover:border-orange-700 '>Salad</button>

        </div>
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
        {
          food.map((item)=>{
            return(
              <div key={item.id} className='border-none hover:scale-105 duration-300'>
                <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-lg'/>
                <div className='flex justify-between py-2 px-2'>
                  <p className='font-bold'>{item.name}</p>
                  <p className='bg-orange-700 h-18 w-18 rounded-full -mt-10 py-4 px-2 font-bold text-white border-8'>{item.price}</p>
                </div>
                <div className='pl-2 py-4'>
                  <p className='flex text-indigo-600'>View More <IoIosArrowRoundForward size={25} className='ml-2'/></p>

                </div>

              </div>
            )

          })
        }


      </div>

    </div>
  )
}

export default Meal