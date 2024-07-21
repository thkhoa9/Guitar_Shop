import React from 'react'
import CarouselProductDetail from './CarouselProductDetail'
import ProductCarouselSuggest from './ProductCarouselSuggest'

export default function ProductInformation() {
  
  return (
    <div className='overflow-x-hidden'>   
        <div className="hero  min-h-screen max-w-screen">
            <div className="hero-content flex-col lg:flex-row">
                <CarouselProductDetail/> 
                <div >
                        <h1 className="card-title text-4xl font-medium">Ibanez RG470DX-SFM Electric Guitar,Sea Foam Green Matte</h1>
                        <h1 className="text-xl font-medium">14.600.000đ</h1>
                        
                        <h1 className='text-sm  font-medium mt-7'>Quantity</h1>
                        <div>   
                               <div className="join mr-6">
                                    <button className="join-item btn">+</button>
                                    <button className="join-item btn">1</button>
                                    <button className="join-item btn">-</button>
                                </div>
                                <button className="btn btn-neutral btn-wide ">Add to cart</button>
                        </div> 
                        <h1 className='text-xl text-gray-500 font-medium mt-7'>BODY</h1>
                          <ul role='list' className='marker:text-gray-500 list-disc pl-5 space-y-3 '>
                            <li>Body Type:Solidbody</li>
                            <li>Body Material: Meranti</li>
                            <li>Body Shape: RG</li>
                            <li>Color: Sea Foam Green Matte</li>
                          </ul>
                        <h1 className='text-xl text-gray-500 font-medium mt-7'>NECK</h1>
                          <ul role='list' className='marker:text-gray-500 list-disc pl-5 space-y-3 '>
                                <li>Neck Material: Maple</li>
                                <li>Neck Shape: Wizard III</li>
                                <li>Neck Joint: Bolt-on </li>
                                <li>Radius: 400mmR</li>
                                <li>Fingerboard Material: Jatoba</li>
                                <li>Fingerboard Inlay: Sharktooth</li>
                                <li>Number of Frets: 24,Jumbo</li>
                                <li>Scale Length: 25.5"</li>
                                <li>Nut Width: 1.692"</li>
                                <li>Nut Material: Locking Nut</li>
                          </ul>
                        <h1 className='text-xl text-gray-500 font-medium mt-7'>HARDWARE</h1>
                            <ul role='list' className='marker:text-gray-500 list-disc pl-5 space-y-3 '>
                                <li>Bridge/Tailpiece: Ibanez Edge-Zero II bridge</li>
                                <li>Tuners: Ibanex Die-cast</li>
                            </ul>
                        <h1 className='text-xl text-gray-500 font-medium mt-7'>ELECTRONICS</h1>
                            <ul role='list' className='marker:text-gray-500 list-disc pl-5 space-y-3 '>
                                <li>Neck Pickup: Ibanez Quantum Neck (H) (Passive/ Ceramic)</li>
                                <li>Middle Pickup: Ibanez Quantum Middle (S) (Passive/ Alnico)</li>
                                <li>Bridge Pickup: Ibanez Quantum Neck (H) (Passive/ Ceramic)</li>
                                <li>Controls: 1 x Volume, 1 x Tone</li>
                                <li>Switching: 5-way pickup selector</li>
                            </ul>
                        <div className='flex mt-16 mb-4'>
                            <div className='flex'>
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
                                     d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                </svg>
                                Ask a question
                            </div>
                            <div className='flex ml-8'>
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
                                     d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                              </svg>
                                Share
                            </div>
                        </div>
                        <hr/>
                </div>
            </div>
        </div>
        <div className='  '>
            <h1 className="w-72 ml-28 mb-5 h-8 text-3xl font-medium">You Might Also Like</h1>
        </div>
        <div className='w-screen h-auto justify-center items-center'>
            <ProductCarouselSuggest/>
        </div>
    </div>
  )
}
