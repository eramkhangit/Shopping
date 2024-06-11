import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Components/CSS/List.css'

function Card({ product }) {

    // Step 1 :
    const nevigate = useNavigate();

    // Step 2 :
    const productDetail = (product) => {
        nevigate('/productdetail', { state: product }) 
        // Navigate to product component [useLocation and access product details using with product ]
        //  This ( /productdetail ) route path which set in App.jsx
    }
    return (
        <div>
            <div id='card-comp' className='border-[1px] bg-slate-300 rounded-md m-4 h-[55vh] md:h-[32vh] lg:h-[65vh] whitespace-nowrap overflow-hidden  hover:shadow-[inset_0px_0px_5px_-1px_#8F00FF] shadow-slate-500'>

            {/* ___________ Product Deatail Part____________ */}
                <div className='flex flex-col items-center text-sm ' >

                    <div className='h-[30vh] md:h-[15vh] lg:h-[30vh] w-[100%]'>
                        <img src={product.image} alt="Product Image" className='w-full h-[100%] rounded-t-r-md rounded-t-l-md ' />
                    </div>

                    <div className='w-[100%] h-[30vh] text-center py-2 px-4  text-slate-600 flex flex-col gap-4'>
                        <div className='text-[17px]  md:text-[11px]'>
                            <p className='whitespace-nowrap overflow-hidden'>Product Title: {product.title}</p>

                            <p className='whitespace-nowrap overflow-hidden'>Product Category: {product.category}</p>
                            <p className='text-yellow-600'>Price: {product.price}</p>
                            <p className='text-red-600'>Ratig : {product.rating.rate}</p>
                        </div>
                        <div className=''>
                            <button className='bg-[#8F00FF] text-white py-1 px-2 text-[14px] md:px-3 rounded-2xl' onClick={() => productDetail(product)}>Detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
