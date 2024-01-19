import React from 'react';
import { BiLogoPlayStore } from "react-icons/bi";
import { ImAppleinc } from "react-icons/im";

const Delivery = () => {
  return (
    <div>
      <h3 className='text-orange-500 font-bold text-2xl text-center py-[26px]'>Quick Delivery App</h3>
      <div className=' bg-white  px-4 grid md:grid-cols-2 '>
        
        <div className=' w-full md:w-1/2 mx-auto'>
          <div className='md:pt-[50px] w-[250px] lg:w-[450px]'>
          <img className=''  src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt="" />

          </div>
            
        </div>

        <div className='mx-auto w-full md:w-1/2 justify-center'>
                <p className='text-[#00df9a] font-bold text-2xl'>Get the App</p>
                <h1 className='md:text-4xl text-2xl font-bold py-2'>Limitless Convinience on-demand</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi cum debitis voluptatem placeat tempora perferendis 
                    facere sequi ab odio porro laboriosam, corrupti aut totam, 
                    fugit quasi natus similique id.Lorem ipsum dolor sit amet
                     consectetur adipisicing elit.Commodi cum debitis voluptatem
                      placeat tempora perferendis corrupti aut totam,laboriosam,
                    facere sequi ab odio porro laboriosam, corrupti aut totam, 
                    fugit quasi natus similique id. </p>
                  <div className='flex gap-3'>
                    <button className='bg-black hover:bg-white border border-black text-[#00df9a] w-[150px]  lg:w-[200px]  flex justify-center rounded-md font-medium my-6 py-3  md:mx-0 '>
                      <BiLogoPlayStore size={25} className='mx-2 ' />
                       Download </button>
                    <button className='bg-gray-200  hover:bg-black border border-black text-[#00df9a] w-[150px] lg:w-[200px]  flex justify-center rounded-md font-medium my-6 py-3  md:mx-0'>
                    <ImAppleinc size={25} className='mx-2 ' />Download</button>
                  </div>
            </div>

        

      </div>
    </div>
  )
}

export default Delivery