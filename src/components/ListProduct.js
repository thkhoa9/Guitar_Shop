import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Guitar1 from '../Image/1_2a4d892c-cc73-439b-a12d-871c27ef8615.jpg'
import Guitar2 from '../Image/1_80d7543a-a6b3-4c4a-91e1-36c788441db4.jpg'
import Guitar3 from '../Image/1_695d685a-1b9d-44e2-8192-8427b8e800d3.jpg'
import Guitar4 from '../Image/1_327578ae-38cc-4e06-9374-52c7df7297cc.jpg'
import Guitar5 from '../Image/1_afff51e5-3c44-4707-a54d-bd3ac8cc9519.jpg'
import Guitar6 from '../Image/1_510fbc85-c57d-4b45-a6b6-5e9f50234914.jpg'
import Guitar1Hover from '../Image/WBguitar_9e5b1355-4050-4198-80f9-fb30bd23c806.jpg'
import Guitar2Hover from '../Image/WBguitar_f1d04d10-ce4e-4b59-9cdf-8695ecc34033.jpg'
import Guitar3Hover from '../Image/WBguitar_b2c8729b-4d12-4346-b98d-10e54588c164.jpg'
import Guitar4Hover from '../Image/WBguitar_5141e404-f836-43d9-8257-07cecd93d1cf.jpg'
import Guitar5Hover from '../Image/WBguitar_736fc2f5-930d-4b7f-951d-17ddab82bd06.jpg'
import Guitar6Hover from '../Image/WBguitar_2eeb4cdc-ec4b-4669-8d1c-1eabb3943e37.jpg'
import Product from './Product'
export default function ListProduct() {
  return (
    <>
    <div className='w-full mt-5 mb-10'>
       <div> 
          <h1 className='text-center  text-4xl '>New Arrivals</h1>
       </div>
    </div>
    <div className="flex mx-auto px-[50px] h-96 mb-10 ">
      
        <Product/>
      
   </div>
  </>
  )
}
