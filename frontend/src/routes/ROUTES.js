import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from '../pages/Home'
import AddGym from '../pages/AddGym'

const ROUTES = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addgym" element={<AddGym/>}/>
      </Routes>
    </>
  )
}

export default ROUTES
