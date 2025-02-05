import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import logo from '../../assets/logo.jpg';

const LayOut = () => {
  return (
    <>
    <Navbar/>
    <div className="posation">
        <img src={logo}  className='logo' alt="" />

        </div>
      <Outlet/>
     
      <Footer/>
    </>
  )
}

export default LayOut
