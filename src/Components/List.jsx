import React, { useEffect, useState } from 'react'
import Card from './Card'

function List() {

  const [productInfo, setProductInfo] = useState([])

  const getProductData = async () => {
   
    // Raw way to fetch()
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProductInfo(data)
    } catch (error) {
      console.log("ERROR : ", error);
    }

  }

  useEffect(() => {
    getProductData()
  }, [])


  return (
    <div>
      <h4 className='text-[#8F00FF] font-bold text-2xl text-center py-2'>Product Information</h4>
    
      <div className='flex md:flex-wrap md:flex-row flex-col justify-center '>
        {
          productInfo.map((p) => (
          //  <div className='flex flex-row'>
               <div key={p.id} className=' w-full md:w-[25%]'>
              <Card product={p} />
            </div>
          //  </div>
          )) 
          }
      </div>
    </div>
  )
}

export default List
