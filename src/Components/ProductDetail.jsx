import React from 'react'
import { useLocation } from 'react-router-dom'

function ProductDetail() {

    // Step 3 : Here we got access of product detail useing with useLocation() hook
    // __________ useLocation Hook _______
    const productLocation = useLocation()
    const product = productLocation.state
    // console.log(product);

    return (
        <div className='py-[60px] md:py-[70px]'>
            <div className='w-[100%] lg:w-[50%] m-auto md:pb-4 bg-slate-300 py-34 px-2 rounded min-h-[60vh]'>

                <div className='flex flex-col gap-4 items-center p-2 text-sm py-8 ' >

                    <div className='h-[30vh] md:h-[38vh] lg:h-[40vh] md:w-[60%] w-[80%] lg:w-[40%]'>
                        <img src={product.image} alt="Product Image" className='w-full h-[100%]' />
                    </div>

                    <div className='flex flex-col gap-4 px-8'>

                        <div className='flex flex-col  justify-between'>
                            <p className='text-lg text-black font-semibold pb-2 md:pb-0'>Product Title:{product.title} </p>
                            <p className='text-[16px] text-green-800'>Product Category: {product.category} </p>
                        </div>

                        <div className='flex justify-between text-[18px] font-semibold '>
                            <p>Price:{product.price} Rs. </p>
                            <div>
                            <p className='text-red-700 m-1'>Ratting :{product.rating.rate} </p>
                            <p>Count : {product.rating.count}</p>
                            </div>
                        </div>

                        <p className='w-[100%] lg:w-[60%] m-auto text-center leading-5'> Description : {product.description}</p>
                        <button className='bg-[#8F00FF] text-white py-2 lg:py-1 md:py-2 px-2 text-[18px] md:text-[20px] lg:text-[14px] md:px-3 rounded-2xl  w-[40%] md:w-[30%] lg:w-[20%] m-auto' >Detail </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetail
