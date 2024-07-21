import React from 'react'
import Product from './Product'

export default function ListPedal() {
  return (
    <>
    <div className='w-full mt-5 mb-10'>
       <div> 
          <h1 className='text-center  text-4xl '>Lab's Selects</h1>
       </div>
    </div>
    <div className="flex mx-auto px-[50px] h-96 mb-10 ">
      <Product/>
   </div>
  </>
  )
}
