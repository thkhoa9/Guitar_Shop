import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function LayoutDefault() {
  return (
      <>
       <NavBar/>
           <Outlet/>
       <Footer/>
      </>
  )
}
