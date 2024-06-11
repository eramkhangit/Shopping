import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../Image/Logo.png'
import { RiMenu2Fill } from "react-icons/ri";

function Navbar() {
  return (
    <div>

      <div className='flex flex-row gap-1 md:gap-6 justify-between px-3 py-1 lg:px-6 items-center w-[100%] bg-[#023020] z-[100]'>

        <div className='w-[25%] lg:w-[20%] md:w-[20%]'>
          <Link to='/'>
            <div className='w-[25%] md:w[10%]'>
              <img src={logo} className='md:w-[80%]' />
            </div>
          </Link>
        </div>

        {/* ________ For Larg screen _________ */}
        <div className="md:flex gap-1 md:gap-3 text-[12px] md:text-[15px] lg:text-[18px] ">

          <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-[#00FFFF]' : ' text-white'} px-2 `} >Home</NavLink>
          <NavLink to='/list' className={({ isActive }) => `${isActive ? 'text-[#00FFFF]' : ' text-white'} px-2 `} >List</NavLink>
          <NavLink to='/about' className={({ isActive }) => `${isActive ? 'text-[#00FFFF]' : ' text-white'} px-2 `} >About</NavLink>
          <NavLink to='/login' className={({ isActive }) => `${isActive ? 'text-[#00FFFF]' : ' text-white'} px-2 `} >Log In</NavLink>

        </div>

        {/* __________ For Small screen _____________ */}
        {/* <div className=' border-2 border-red-500'>
          <RiMenu2Fill />
        </div> */}

      </div>
    </div>
  )
}

export default Navbar
