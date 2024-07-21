import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import Error404 from '../pages/Error404'
import LayoutDefault from '../pages/LayoutDefault'
export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<LayoutDefault/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/ProductDetail' element={<ProductDetail/>}/>
            </Route>
            
            <Route path='*' element={<Error404/>}/>
        </Routes>
    </Router>
  )
}
