import { useEffect, useState } from "react"
import React from 'react'
import '../CSS/MoreAboutABC.css'

function MoreAboutABC() {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        try {
            fetch('https://api.escuelajs.co/api/v1/categories')
                .then(response => response.json())
                .then(data => {
                    setProductData(data)
                    console.log("Product Data :", data);
                })
                .catch(e =>
                    alert("Error :", e)
                )

        } catch (error) {
            console.log("ERROR :", error);
        }

    }, [])

    return (
        <div>
                <h2 className="text-2xl md:text-2xl pt-3 text-center font-semibold text-[#8F00FF]">ABC Company Products</h2>
            <div className="h-[68rem] md:h-[24rem] flex flex-col md:flex-row ">
                {
                    productData.map((product, id) => (
                        (product.name === 'Clothes' || product.name === 'Electronics' || product.name === 'Furniture'|| product.name === 'Books' || product.name === 'Nueva categoria') &&
                       
                       <div key={id} className="md:w-[40%]">
                            
                            <div className=" md:h-[7rem] lg:h-[4rem] pt-3 lg:pt-1">
                            <h3 className="text-xl text-center py-3 ">Product Category: <span className="text-[#8F00FF]">{product.name}</span></h3>
                            </div>

                            <div id="moreaboutabc" className="w-[80%] mt-2 m-auto h-[18rem] md:h-[14rem] lg:h-[18rem] rounded-md hover:shadow-md hover:shadow-[#8F00FF]">
                              <img src={product.image} alt="No product" className="w-[100%] md:h-[100%] rounded-md" />
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MoreAboutABC
