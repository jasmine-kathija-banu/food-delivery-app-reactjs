import React, { useState } from 'react';
import { MdArrowBackIosNew,MdArrowForwardIos } from "react-icons/md";
import {RxDotFilled} from "react-icons/rx"


const Featured = () => {
    const sliders = [{url:'images/featured 1.jpg',id:1},{url:'images/featured 2.jpg',id: 2},{url:'images/featured 3.jpg',id:3}]
      const [imageIndex,setImageindex] = useState(0)
        const previousSlider = ()=>{
          const isFirstSlide = imageIndex === 0
          const newIndex = isFirstSlide ? sliders.length -1 : imageIndex -1
          setImageindex(newIndex)
         
         
          
        }
        const nextSlider = ()=>{
          const isFirstSlide = imageIndex === sliders.length -1
          const newIndex = isFirstSlide ? 0 : imageIndex +1
          setImageindex(newIndex)
         
          
        }

      

  return (
      <div className='max-width-[1520px] h-[350px] relative group'>
        <div className='w-full h-full bg-center bg-cover duration-500'  style={{ backgroundImage: `url("${sliders[imageIndex].url}")`}}></div>
        <div onClick={previousSlider} className=' hidden group-hover:block w-[40px] h-[40px] absolute top-[150px] -translate-y-[50%] ml-4 items-center px-2 py-2 bg-orange-600 text-white rounded-full cursor-pointer'>
          <MdArrowBackIosNew size={25} className=''/>
        </div>
        <div onClick={nextSlider} className='hidden group-hover:block w-[40px] h-[40px] absolute right-4 top-[150px] -translate-y-[50%] ml-4 items-center px-2 py-2 bg-orange-600 text-white rounded-full cursor-pointer '>
          <MdArrowForwardIos size={25} className=''/>
        </div>
        <div className='flex top-4 justify-center py-2'>
          {
            sliders.map((item,index)=>(
              <div id={item.id} className='text-2xl text-grey-600c'  key={index} >
                <RxDotFilled />
              </div>
            ))
          }
        </div>
        </div>
  )
}

export default Featured