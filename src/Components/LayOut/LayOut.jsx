import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'

const LayOut = () => {
  return (
    <>
    <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default LayOut
