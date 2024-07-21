import React from 'react'
import CarouselImg1 from '../Image/newarrival-slider23.jpg'
import CarouselImg2 from '../Image/newarrival-slider24.jpg'
import CarouselImg3 from '../Image/newarrival-slider25.jpg'
export default function Carousel() {
  return (
    <div className="carousel w-fit h-90 ml-16 mr-16 mb-20 mx-auto ">
  <div id="slide1" className="carousel-item relative w-full ">
    <img
      src={CarouselImg1}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={CarouselImg2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={CarouselImg3}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
  )
}
