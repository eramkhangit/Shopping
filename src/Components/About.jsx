import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/CSS/About.css'

function About() {
  return (
    <div>
      <h1 className='text-2xl md:-3xl text-[#8F00FF] text-center bg-slate-300 shadow-lg py-2'>Latest Style</h1>

      <div className=' flex flex-col md:flex-row justify-between px-4 md:px-10  lg:h-[100vh] md:h-[74vh]'>

        {/* _____ Part 1 ______________ */}
        <div className=' pt-4 flex flex-col w-[100%] md:w-[45%] sm:pb-3'>

          <div className='sm:h-[60vh] lg:h-[60vh] md:h-[55vh]'>
            <img src="https://www.shutterstock.com/image-photo/portrait-her-she-nicelooking-attractive-260nw-1780612355.jpg" alt="" className='w-[100%] h-[100%] object-cover ' />
          </div>

          <div className='h-[14vh] lg:h-[100%]  '>
            
            <p className=' overflow-hidden px-2 pb-4 pt-4 md:pb-8 h-[24vh] md:h-[14vh] lg:h-[100%] text-[11px] md:text-[16px]'> <h4 className=' pt-2 pb-3 md:pt-4 text-center font-semibold text-xl md:text-2xl'>ABC Collection</h4> Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.eius fugit tempore ipsa eos, tenetur soluta sed quisquam molestia...
            {/* __________ Use Link tag to nevigate button __________  */}
            <Link to={'/moreaboutabc'} className='text-blue-500 text-[14px] lg:text-[18px]' >ABC Fashion</Link>
            </p>
          </div>
        </div>

        {/* _________ Part 2 _____________ */}
        <div className=' flex flex-col w-[100%] md:w-[45%] '>

          <div className=' sm:h-[60vh] lg:h-[60vh] md:h-[55vh] mt-4'>
            <img src="https://www.shutterstock.com/shutterstock/photos/2108419928/display_1500/stock-photo-a-young-serious-elegant-businesswoman-standing-on-the-street-with-arms-crossed-and-looking-at-the-2108419928.jpg" alt="" className='w-[100%] h-[100%] object-cover ' />
          </div>

          <div className='h-[14vh] lg:h-[100%] '>
            <h4 className='pt-2 md:pt-4 text-center font-semibold text-xl md:text-2xl'>Latest Style</h4>
            <p className='overflow-hidden px-2 md:pt-4 pt-2 h-[24vh] md:h-[14vh] text-[12px] md:text-[16px]  md:pb-8'>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipisicing...
             {/* __________ Use Link tag to nevigate button __________  */}
            <Link to={'/moreaboutstyle'} className='text-blue-500 text-[14px] lg:text-[18px]' > More About Style</Link> </p>
           
            
          </div>

        </div>

      </div>

    </div>
  )
}

export default About



{/*__________ Part 2  */ }
{/* <div className='border-2 border-green-600 w-[53%] h-[28rem]'>

          <div className='flex flex-row justify-between'>

            <div className='border-2 border-blue-600 w-[45%]' >
              <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjebYPL7RvJRlwbJv6m6lcaMyPT0399ACcAw&usqp=CAU" alt="" />
              </div>
              <h4>Lorem ipsum dolor sit amet</h4>
            </div>

            <div className='border-2 border-blue-600 w-[45%]'>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjebYPL7RvJRlwbJv6m6lcaMyPT0399ACcAw&usqp=CAU" alt="" />
              </div>
              <h4>Lorem ipsum dolor sit amet</h4>
            </div>

          </div>

          <div className='flex flex-row justify-between gap-2'> 

            <div className='border-2 border-blue-600 w-[100%] '>
              <div className='w-[100%]'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjebYPL7RvJRlwbJv6m6lcaMyPT0399ACcAw&usqp=CAU" alt="" />
              </div>
              <h4>Lorem ipsum dolor sit amet</h4>
              {/* </div> */}
{/* </div> */ }

{/* <div className='border-2 border-blue-600 w-[45%]'> */ }
{/* <div>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjebYPL7RvJRlwbJv6m6lcaMyPT0399ACcAw&usqp=CAU" alt="" />
                </div>
                <h4>Lorem ipsum dolor sit amet</h4>
              </div>

          </div>


        </div> */} 