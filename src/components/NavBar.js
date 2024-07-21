import React from 'react'
import BrandImage from "../Image/Secondary_Logo_Tagline_0fd80910-325c-438c-8f04-cb36b6483b12.png"
import CartDetail from './CartDetail'
import NotificationCart from './NotificationCart'
import FooterCart from './FooterCart'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    {/* Shop by Category  */}
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="menu menu-horizontal px-1">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg> */}
        <details>
          <summary dir='rtl'>Shop by Category</summary>
        </details>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Fender</a></li>
        <li><a>PRS</a></li>
        <li><a>MusicMan</a></li>
      </ul>
    </div>
      {/*Shop by Brand */}
      <div className="dropdown dropdown-hover">
      <div tabIndex={1} role="button" className="menu menu-horizontal px-1">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg> */}
        <details>
          <summary dir='rtl'>Shop by Brand</summary>
        </details>
      </div>
      <ul
        tabIndex={1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box rounded-t-none z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Khoa</a></li>
        <li><a>PRS</a></li>
        <li><a>MusicMan</a></li>
      </ul>
    </div>   
      {/*Today's deals */}
      <div className="dropdown dropdown-hover">
      <div  role="button" className="menu menu-horizontal px-1">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg> */}
        
          <li><a>Today's deals</a></li>
        
      </div>
      
    </div>
      {/* Services */}
      <div className="dropdown dropdown-hover">
      <div tabIndex={1} role="button" className="menu menu-horizontal px-1">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg> */}
        
        <li><a>Services</a></li>
        
      </div>
    </div>
      {/* Blog */}
      <div className="dropdown dropdown-hover">
      <div tabIndex={1} role="button" className="menu menu-horizontal px-1">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg> */}
        
           <li><a>Blog </a></li>
        
      </div>
    </div>
  </div>
  <div className="navbar-center">
    <Link to="/">
    <img src={BrandImage} className='btn btn-ghost' ></img>
    </Link>
  </div>
  <div className="navbar-end">
    {/* drawer */}
        <div className="drawer drawer-end z-10 w-3/5 ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
         
         
      </div>
      <div className="drawer-side h-screen max-h-screen min-h-screen ">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-white text-base-content min-h-full h-screen w-4/12 flex  ">
          {/* Sidebar content here */}
          <h3 className='text-2xl font-medium navbar'>Shopping Cart</h3>
          <li><a>Your cart is currently empty.</a></li>
          <NotificationCart/>
          <div className='flex-1 overflow-scroll '>
             <CartDetail/>
             <CartDetail/>
             <CartDetail/>
             <CartDetail/>
          </div>
          <div className='footer'>
              <FooterCart/>
          </div>
        </ul>
      </div>
    </div>
    {/* Search */}
    <div className="tooltip tooltip-bottom" data-tip="Search">
    <button className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    </div>
    {/* Account */}
    <div className="tooltip tooltip-bottom" data-tip="Account">
    <button className="btn btn-ghost btn-circle">
    <svg 
       xmlns="http://www.w3.org/2000/svg" 
       fill="none" 
       viewBox="0 0 24 24" 
       stroke-width="1.5" 
       stroke="currentColor" 
       class="size-5">
         <path 
         stroke-linecap="round" 
         stroke-linejoin="round"
         strokeWidth="2" 
         d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>

    </button>
      </div>
    {/* Notification */}
    <div className="tooltip tooltip-bottom" data-tip="Notification">
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    </div>
        {/* Cart */}
        {/* <button className="btn btn-ghost btn-circle drawer-button" htmlfor="my-drawer-4">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="currentColor" 
        class="size-5">
          <path 
          stroke-linecap="round" 
          stroke-linejoin="round"
          strokeWidth="2" 
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>

    </button> */}
    <div className="tooltip tooltip-bottom" data-tip="Cart">
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="currentColor" 
        class="size-5">
          <path 
          stroke-linecap="round" 
          stroke-linejoin="round"
          strokeWidth="2" 
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
   </label>
    </div>
  
  </div>
  
</div>
      
  )
}