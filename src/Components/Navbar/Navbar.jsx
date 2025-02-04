import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {


  let [showMenu, setShowMenu] = useState(false)


  return (<nav className="nav">

    <div className={`${showMenu ? 'nav__menu show__menu' : 'nav__menu'}`}>
      <ul className="nav__list">

        <li className='nav__item' >  <NavLink onClick={() => setShowMenu(!showMenu)} className={({ isActive }) =>

          isActive ? 'nav__link active__nav' : 'nav__link'} to='home'><i class="nav__icon fa-solid fa-house">
          </i> <h3 className='nav__name'>Home</h3></NavLink> </li>
      

        <li className='nav__item'>  <NavLink onClick={() => setShowMenu(!showMenu)} className={({ isActive }) =>

          isActive ? 'nav__link active__nav' : 'nav__link'} to='about'><i class="nav__icon fa-solid fa-user"></i><h3 className='nav__name'>About</h3></NavLink> </li>
            <li className='nav__item' >  <NavLink onClick={() => setShowMenu(!showMenu)} className={({ isActive }) =>

            isActive ? 'nav__link active__nav' : 'nav__link'} to='certificates'><i class="nav__icon fa-solid fa-certificate"></i> <h3 className='nav__name'>certificates</h3></NavLink> </li>
        <li className='nav__item'>  <NavLink onClick={() => setShowMenu(!showMenu)} className={({ isActive }) =>

          isActive ? 'nav__link active__nav' : 'nav__link'} to='portfolio'><i class="nav__icon fa-solid fa-folder-open"></i><h3 className='nav__name'>Projects</h3></NavLink> </li>
        <li className='nav__item'>  <NavLink onClick={() => setShowMenu(!showMenu)} className={({ isActive }) =>
          isActive ? 'nav__link active__nav' : 'nav__link'} to='contact'><i class="nav__icon fa-solid fa-envelope-open"></i><h3 className='nav__name'>Contact</h3></NavLink> </li>

      </ul>
    </div>
    <div className={`${showMenu ? 'nav__toggle animate__toggle  ' : 'nav__toggle'}`} onClick={() => setShowMenu(!showMenu)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
  )
}

export default Navbar
