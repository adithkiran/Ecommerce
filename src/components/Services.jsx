import React from 'react'
import {FaShippingFast} from "react-icons/fa"

const Services = () => {
  return (
    <div className='container mx-auto flex px-5 py-11  gap-10 items-center justify-center flex-wrap'>
        <div className='bg-red-500 border px-5 py-3 items-center flex flex-col text-white gap-3 w-[220px]'>
         <FaShippingFast size={30}/>
         <p>FREE SHIPPING</p>
        </div>
        <div className='bg-red-500 border px-5 py-3 items-center flex flex-col text-white gap-3 w-[220px]'>
        <FaShippingFast size={30}/>
        <p>FREE SHIPPING</p>
       </div>
       <div className='bg-red-500 border px-5 py-3 items-center flex flex-col text-white gap-3 w-[220px]'>
       <FaShippingFast size={30}/>
       <p>FREE SHIPPING</p>
      </div>
      <div className='bg-red-500 border px-5 py-3 items-center flex flex-col text-white gap-3 w-[220px]'>
      <FaShippingFast size={30}/>
      <p>FREE SHIPPING</p>
     </div>
    </div>
  )
}
    
export default Services