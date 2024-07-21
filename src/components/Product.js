import React, { useState } from "react";
import Guitar1 from "../Image/1_2a4d892c-cc73-439b-a12d-871c27ef8615.jpg";
import Guitar2 from "../Image/1_80d7543a-a6b3-4c4a-91e1-36c788441db4.jpg";
import Guitar3 from "../Image/1_695d685a-1b9d-44e2-8192-8427b8e800d3.jpg";
import Guitar4 from "../Image/1_327578ae-38cc-4e06-9374-52c7df7297cc.jpg";
import Guitar5 from "../Image/1_afff51e5-3c44-4707-a54d-bd3ac8cc9519.jpg";
import Guitar6 from "../Image/1_510fbc85-c57d-4b45-a6b6-5e9f50234914.jpg";
import Guitar1Hover from "../Image/WBguitar_9e5b1355-4050-4198-80f9-fb30bd23c806.jpg";
import Guitar1Hover1 from "../Image/2_55cdb768-d2f3-4bb6-8c74-aa2f7d17ce52.jpg";
import Guitar1Hover2 from "../Image/3_1650a47b-d6f2-4222-a587-2c35daa21176.jpg";
import Guitar1Hover3 from "../Image/4_241ef2ab-6593-44df-984b-77d242c5a2ef.jpg";

import Guitar2Hover from "../Image/WBguitar_f1d04d10-ce4e-4b59-9cdf-8695ecc34033.jpg";
import Guitar3Hover from "../Image/WBguitar_b2c8729b-4d12-4346-b98d-10e54588c164.jpg";
import Guitar4Hover from "../Image/WBguitar_5141e404-f836-43d9-8257-07cecd93d1cf.jpg";
import Guitar5Hover from "../Image/WBguitar_736fc2f5-930d-4b7f-951d-17ddab82bd06.jpg";
import Guitar6Hover from "../Image/WBguitar_2eeb4cdc-ec4b-4669-8d1c-1eabb3943e37.jpg";
import CarouselProduct from "./CarouselProduct";
import { Link } from "react-router-dom";

export default function () {
  const [isHovered, setIsHovered] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  
  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <>
    <div>
      <div className="card  rounded-box grid w-7/12 h-20 flex-grow place-items-center">
        <div className="flex">
          <img
            src={isHovered ? Guitar1 : Guitar1Hover}
            className="w-72 h-80"
            alt="Ibanez"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <div className=" -ml-14 mt-10 ">
            {/* WishList */}
          {isHovered && (
         <div className="tooltip tooltip-left " data-tip="Add to wishlist">
          <button className="btn btn-ghost btn-circle z-10 hover-button " 
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="1.5"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </button>
          </div>
          )}
          {/* Compare */}
          {isHovered  && (
           <div className="tooltip  tooltip-left" data-tip="Compare">
          <button className="btn btn-ghost btn-circle z-10"  
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-6">
               <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
            </svg>
          </button>
          </div>
          )}
          {/* Quick View */}
          {isHovered  && (
             <div className="tooltip tooltip-left" data-tip="Quick view">
          <button className="btn btn-ghost btn-circle z-10 " 
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={()=>document.getElementById('modal_Quick_View').showModal()}>
          <svg 
             xmlns="http://www.w3.org/2000/svg" 
             fill="none" 
             viewBox="0 0 24 24" 
             stroke-width="1.5" 
             stroke="currentColor" 
             class="size-6">
            <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          </button>
          </div>
           )}
            {/*Modal_Quick_View  */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
              <dialog id="modal_Quick_View" className="modal">
                <div className="modal-box w-10/12 max-w-4xl h-auto">
            
        <div className="card lg:card-side bg-base-100 ">
       {/* Card */}
      <figure>
          <CarouselProduct/>
      </figure>
      <div className="card-body">
        <h1 className="card-title text-3xl font-medium">Ibanez RG470DX-SFM Electric Guitar,Sea Foam Green Matte</h1>
        <h1>Body Body Type: Solidbody Body Material: Meranti Body Shape: RG Color:Sea Foam Green Matte NECK... </h1>
        <h1 className="text-xl font-medium">14.600.000đ</h1>
        <u href="" className="">View details</u>
        
        <div className="card-actions justify-start">
          <div>
          <h3 className="font-medium">Quantity</h3>
          <div className="flex justify-center">
          <div className="join mr-6">
              <button className="join-item btn">+</button>
              <button className="join-item btn">1</button>
              <button className="join-item btn">-</button>
          </div>
          <button className="btn btn-neutral btn-wide">Add to cart</button>
          </div>
          </div>
        </div>
      </div>
    </div>

                </div>
                
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</button>
                </form>
              </dialog>


          </div>

        </div>
        {/*Quick Add */}
        {isHovered  && (
          <button className="btn btn-ghost btn-lg z-10 -mt-32 bg-black text-white"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>Quick Add</button>
          )}
        <Link to="/ProductDetail">
        <h1 className="font-bold">
          Ibanex RG470DX-TMN Electric Guitar,Tokyo Midnight
        </h1>
        <p className="mr-auto">14.600.000đ</p>
        </Link>
      </div>
      {/* <div className="card bg-base-300 rounded-box grid w-1/6 h-20 flex-grow place-items-center">
    <img src={isHovered? Guitar2:Guitar2Hover} 
          className='w-full h-full' 
          alt='Ibanez' 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}/>
      <h1 className='font-bold'>Ibanex RG470DX-SFM Electric Guitar,Sea Foam Green Matte</h1>
      <p className='mr-auto'>14.600.000đ</p>
    </div>
    <div className="card bg-base-300 rounded-box grid w-1/6 h-20 flex-grow place-items-center">
    <img src={isHovered? Guitar3:Guitar3Hover} 
          className='w-full h-full' 
          alt='Ibanez' 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}/>
      <h1 className='font-bold'>Ibanex AZES40-MGR Electric Guitar Guitar-Purist Blue</h1>
      <p className='mr-auto' >14.600.000đ</p>
    </div>
    <div className="card bg-base-300 rounded-box grid w-1/6 h-20 flex-grow place-items-center">
    <img src={isHovered? Guitar4:Guitar4Hover} 
          className='w-full h-full' 
          alt='Ibanez' 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}/>
      <h1 className='font-bold'>Ibanex RG470DX-TMN Electric Guitar,Tokyo Midnight</h1>
      <p className='mr-auto'>14.600.000đ</p>
    </div>
    <div className="card bg-base-300 rounded-box grid w-1/6 h-20 flex-grow place-items-center">
    <img src={isHovered? Guitar5:Guitar5Hover} 
          className='w-full h-full' 
          alt='Ibanez' 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}/>
       <h1 className='font-bold'>Ibanex RG470DX-TMN Electric Guitar,Tokyo Midnight</h1>
       <p className='mr-auto'>14.600.000đ</p>
    </div>
    <div className="card bg-base-300 rounded-box grid w-1/6 h-20 flex-grow place-items-center">
    <img src={isHovered? Guitar6:Guitar6Hover} 
          className='w-full h-full' 
          alt='Ibanez' 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}/>
       <h1 className='font-bold'>Ibanex RG470DX-TMN Electric Guitar,Tokyo Midnight</h1>
       <p className='mr-auto'>14.600.000đ</p>
    </div> */}
    </div>
    </>
    
  );
}
