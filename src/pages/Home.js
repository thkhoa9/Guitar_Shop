import React from 'react'
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import ListProduct from '../components/ListProduct'
import PedalImageBackGround from '../components/PedalImageBackGround'
import Footer from '../components/Footer'
import ListPedal from '../components/ListPedal'


export default function Home() {
  return (
    <>
       
        <Carousel/>
        <ListProduct/>
       <PedalImageBackGround/>
       <ListPedal/>
       
    </>
  )
}

