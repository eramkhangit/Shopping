import React from 'react'
import img1 from '../Image/Carousal1.jpg'
import img2 from '../Image/Carousal4.avif'
import img3 from '../Image/Carousal5.jpg'

function HomeSale() {
   return (
      <div>
         <div className='flex flex-row justify-between px-8 lg:px-[80px] py-2'>
            <div className=' w-[25%] h-[6rem] md:h-[10.5rem] lg:h-[16.5rem] rounded-t-md  '>
               <div>
                  <img src={img1} alt="" className='rounded-t-md' />
               </div>
               <div className='bg-[#9FE2BF] text-center'>
                  <p className='text-[12px] text-salte-800'>Sale is Live</p>
                  <h2 className='text-[12px] font-semibold pb-[5px]'>Ring 10K</h2>
               </div>
            </div>
            <div className=' w-[25%] h-[7rem] rounded-t-md'>
               <div>
                  <img src={img2} alt="" className='rounded-t-md' />
               </div>
               <div className='bg-[#9FE2BF] text-center'>
                  <p className='text-[12px] text-salte-800'>Sale is Live</p>
                  <h2 className='text-[12px] font-semibold pb-[5px]'>Ring 10K</h2>
               </div>
            </div>
            <div className=' w-[25%] h-[7rem] rounded-t-md'>
               <div>
                  <img src={img3} alt="" className='rounded-t-md' />
               </div>
               <div className='bg-[#9FE2BF] text-center'>
                  <p className='text-[12px] text-salte-800'>Sale is Live</p>
                  <h2 className='text-[12px] font-semibold pb-[5px]'>Ring 10K</h2>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HomeSale
