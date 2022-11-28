import './Header.scss'
import logo from '../../Assets/Logo/InStock-Logo_1x.png'
import { NavLink, useParams } from 'react-router-dom'
import { useState } from 'react'


function Header() {

    const classNameFunc = ({ isActive }) => (isActive ? "header__link" : "");

  return (
    
      <header className="header">
      <div className='header__content'>
        <div className='header__title'>
           <img className='header__logo' src={logo}/> 
        </div>
        <div className='header__details'>
            <NavLink className={classNameFunc} to='/warehouses'><p className='header__details--item1'>Warehouses</p></NavLink>
            <NavLink className={classNameFunc} to='/inventories' ><p className='header__details--item1'>Inventory</p></NavLink>
        </div>
        </div>  
      </header>

  )
}

export default Header