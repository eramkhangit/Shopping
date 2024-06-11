import React from 'react'

function Logout({ logout}) {

  return (
    <div className='h-[37vh] md:h-[24vh] lg:h-[20rem]  my-4'>
      <div className='bg-[#9FE2BF] min-h-[15rem] m-auto w-[100%] md:max-w-[40%] shadow-md  mt-2 md:mb-10 lg:md-0 text-center lg:mt-6 pt-4 flex flex-col justify-center'>
        <h1 className='text-xl pt-6'>Welcome! </h1>
        <button onClick={logout} className='bg-green-900 lg:text-[13px] text-white px-6 lg:py-3 py-1 rounded-md m-auto md:w-[40%] md:text-[12px] md:px-8 md:py-0 lg:w-[30%]'>Log out </button>
      </div>
    </div>
  )
}

export default Logout