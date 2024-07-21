import React from 'react'
import Guitar1Hover from "../Image/WBguitar_9e5b1355-4050-4198-80f9-fb30bd23c806.jpg";


export default function CartDetail() {
  return (
    <div className="card bg-white card-side w-fit ">
    <figure>
      <img
        src={Guitar1Hover}
        alt="Movie" />
    </figure>
    <div className="card-body">
    <h1 className="card-title text-2xl font-medium">Ibanez RG470DX-SFM Electric Guitar,Sea Foam Green Matte</h1>
    <h1 className="text-xl font-medium">14.600.000đ</h1>

      <div className="card-actions justify-center">
        <div className="join mr-6">
                <button className="join-item btn">+</button>
                <button className="join-item btn">1</button>
                <button className="join-item btn">-</button>
            </div>
            <button className="btn btn-neutral ">Remove</button>
      </div>
    </div>
  </div>

    
  )
}
