
import { useEffect, useState } from 'react'
// import Card from './Card'


function LogInNew({ handleLogin, auth }) {

  const [formData, setFormData] = useState({
    "Name": '',
    "Email": ''
  })
  const [submit, setSubmit] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmit(true)
  }

  useEffect(() => {
    if (submit) {
      const submitForm = () => {
        try {
         fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "post",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(formData)
            // "body property is use to send data to server when making a request". body is use when application have body otherwise it's throw error[Jis body ka data lena ho usi variable ko body ke parenthesisi me use karenge ]
          })
            .then((response) => {
              return response.json()
            })
            .then((data) => {
               console.log("User Data :", data);
                handleLogin()
                setFormData({
                     "Name": '',
                    "Email": ''
                })
            })
        } catch (error) {
          console.log("ERROR :", error);
        }
      }
      submitForm()
    }
    setSubmit(false)
    
  }, [submit])


  return (
    <>

      <div className='bg-[#9FE2BF] min-h-[15rem] m-auto w-[100%] md:max-w-[40%] shadow-md  mt-2 md:mb-10 lg:md-0 text-center lg:mt-6 pt-4 flex flex-col justify-center'>
        <div className=''>
        <div className='text-xl md:text-[14px]'>
        {
          auth ? "" : "Please Log In"
        }
        </div>
          <form onSubmit={handleSubmit} className='m-auto'>

            <label htmlFor="name">
              <input type="text" id='name' name='Name' required placeholder='Enter Your Name' onChange={(e) => { setFormData({ ...formData, Name: e.target.value }) }} className='placeholder:px-2 px-2 mb-2 rounded-md py-1' />
            </label><br />

            <label htmlFor="email">
              <input type="email" id='email' name='Email' required placeholder='Enter Your Email' onChange={(e) => { setFormData({ ...formData, Email: e.target.value }) }} className='placeholder:px-2 px-2 mb-2 rounded-md py-1' />
            </label><br />

            <button type='submit' className='bg-white py-1 px-4 rounded-md '>Submit</button>

          </form>
        </div>
      </div>

    </>
  )
}

export default LogInNew
