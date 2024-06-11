import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Footer() {

  const [userEmail, setUserEmail] = useState({
    email: ''
  })
  const [signUp, setSignUp] = useState(false)

  // _________________ Clear email Data ____________
  const clearEmailData = () => {
    setUserEmail({
      email: " "
    })
  }

  // ____________ Form Sign Up ___________
  const signUpUser = (e) => {
    e.preventDefault()
    if(userEmail.email)
    setSignUp(true)
  else alert("Enter your email")
    // clearEmailData()
  }

  // _________________ Handle Side Effect _______________
  useEffect(() => {

    if (signUp) {

      try {
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "post",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(userEmail)
        })
          .then((response) => response.json())
          .then((d) => {
            console.log("User Entered Email :" , d)
            setUserEmail(d)
          })
        } catch (error) {
          console.log("ERROR :", error);
        }
    }
    else {
      setSignUp(false)
    }
  }, [signUp])

  return (
    <div>

      <div className=' bg-[#023020] text-white flex flex-col items-center gap-4 py-2 md:justify-between md:px-10 md:flex-row '>

        {/* _________ Keep Exploring_____ */}
        <div className=' w-[90%] md:w-[25%]'>
          <p className='text-white text-center text-[14px] md:text-lg'>Keep Exploring</p>
          <div className='flex flex-col justify-center gap-2 pt-2 items-center text-sm md:text-[14px]'>
            <Link to='/' className='text-slate-400'>Home</Link>
            <Link to='/list' className='text-slate-400'>List</Link>
            <Link to='/about' className='text-slate-400' >About</Link>
            <Link to='/login' className='text-slate-400'>Log In</Link>
          </div>
        </div>

        {/* ____________ Contact _____________ */}
        <div className='text-center py-2 w-[90%] md:w-[30%]'>

          <p className='text-white text-[14px] md:text-lg mb-1'>Contact</p>

          <div className='flex flex-col justify-center gap-2 items-center text-sm md:text-[14px] text-slate-400'>

            <div className='flex flex-row items-center justify-between  w-[90%]'>
              <div className='bg-green-300 rounded-3xl text-2xl p-2 text-green-900 hover:text-black'><IoIosCall /></div>
              <div className='w-[50%]'>
                <p>Phone:</p>
                <address>+123-456-789</address>
              </div>
            </div>

            <div className='flex flex-row items-center justify-between w-[90%]'>
              <div className='bg-green-300 rounded-3xl text-2xl p-2 text-green-900 hover:text-black'><MdEmail /></div>
              <div className='w-[50%]'>
                <p>Email:</p>
                <p>abc@gmail.com</p>
              </div>
            </div>

            <div className='flex flex-row items-center justify-between  w-[90%] gap-2'>
              <div className='bg-green-300 rounded-3xl text-2xl p-2 text-green-900 hover:text-black'><IoLocation /></div>
              <div className='w-[50%]' >
                <p>Address:</p>
                <p>123 Anywhere any City...</p>
              </div>
            </div>

          </div>
        </div>

        {/* __________ Stay in touch ___________ */}
        <div className='text-center w-[90%] md:w-[30%]'>

          <p className='text-white text-[14px] md:text-lg'>Stay in Touch</p>
          <div className='flex flex-col justify-center gap-2 text-sm md:text-[14px]'>
            <p className='text-slate-400 text-[11px] md:text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ratione aut minus ab minima voluptas expedita at. Illo, architecto necessitatibus.</p>

            <form onClick={signUpUser} >
              <input type="email" placeholder='Email Address' value={userEmail.email} onChange={(e) => { setUserEmail({ email: e.target.value }) }} className='rounded-md p-1 mb-2 md:mr-2 placeholder:p-1 border-none outline-none text-black mr-2' />
              <button className='bg-white text-black font-semibold px-2 py-1 rounded-md hover:bg-[#8F00FF] hover:text-white' >Sign Up</button>
            </form>

          </div>
        </div>


      </div>


    </div>
  )
}

export default Footer
