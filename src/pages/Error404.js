import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className='w-screen h-screen items-center justify-center'>
            <h1 className='text-9xl text-center text-gray-300'>Error</h1>
            <h1 className='text-center'>Not found</h1>
            <Link to="/">
                <div className='w-full'>
                  <button className='items-center btn glass hover:{bg-black text-white}'>Go back</button>
                </div>
            </Link>
    </div>
  )
}
