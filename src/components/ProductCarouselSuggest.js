import React from 'react'
import Product from './Product'

export default function ProductCarouselSuggest() {
  return (
    <div>
      <div className="carousel w-screen mb-5 h-96">
        <div id="ProductSuggest1" className="carousel-item relative w-screen">
          <Product/>
          <Product/>
          <Product/>
          <Product/>        
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#ProductSuggest4" className="btn btn-circle">❮</a>
            <a href="#ProductSuggest2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="ProductSuggest2" className="carousel-item relative w-screen">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#ProductSuggest1" className="btn btn-circle">❮</a>
            <a href="#ProductSuggest3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="ProductSuggest3" className="carousel-item relative w-screen">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#ProductSuggest2" className="btn btn-circle">❮</a>
            <a href="#ProductSuggest4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="ProductSuggest4" className="carousel-item relative w-screen">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#ProductSuggest3" className="btn btn-circle">❮</a>
            <a href="#ProductSuggest1" className="btn btn-circle">❯</a>
          </div>
        </div>
     </div>
    </div>
  )
}
