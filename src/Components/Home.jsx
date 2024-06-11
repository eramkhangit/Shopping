import React from 'react'
import './CSS/Home.css'
import { Link } from 'react-router-dom'
import Carousal from './Carousal'
import HomeSale from './HomeSale'


function Home() {
  return (
    <div>

      {/* min-h-[60vh] md:min-h-[100vh] */}
      <div className='min-h-[30vh] md:min-h-[96vh]' id='background-img'>

        {/* _____________ Part 1 _____________ */}
        <div className='flex gap-2 items-center flex-col w-[50%] md:w-[35%] top-[6rem] md:top-[8rem] left-[2%] md:left-[10%] relative' >

          <div className='font-bold text-3xl md:text-6xl text-[#8F00FF]'>
            <h1 >Online </h1>
            <p>Shopping</p>
          </div>
          <span className='text-slate-700 text-[12px] md:text-[14px] text-center md:px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsum accusamus Lorem ipsum dolor sit amet.</span>
          <Link to='/list' className='bg-[#8F00FF] text-white px-4 md:py-1 md:text-lg md:px-6 rounded-2xl'>Buy Now</Link>
        </div>
      </div>

      {/* _______________ Part 2 _______________ */}
      <div>
        <Carousal />
      </div>

      {/*________________ Part 3 ________________ */}
      <div>
         <HomeSale />
      </div>



    </div>
  )
}

export default Home
