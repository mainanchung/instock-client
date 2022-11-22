import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../InventoriesPage/InventoriesPage.scss";
import sortLogo from '../../Assets/Icons/sort-24px.svg';


const InventoriesPage = () => {



    return (
        <>
        <div className='inventory'>

            <div className='inventory__top'>
                <h1 className='inventory__title'>Inventory</h1>
                    <div className='inventory__function'>
                        <input type="search" id="search" name="search" placeholder='Search...'/>
                        <button onClick className='inventory__btn'>+ Add New Item</button>
                    </div>

            <div className='inventory__subtitle'>
                <div className='inventory__subtitle--box'>
                    <h4 className='inventory__subtitle--text'>INVENTORY ITEM</h4>
                    <img src={sortLogo} alt='sort_logo'/>
                </div>
                
                <div className='inventory__subtitle--box'>
                    <h4 className='inventory__subtitle--text'>CATEGORY</h4>
                    <img src={sortLogo} alt='sort_logo'/>
                </div>
                <div className='inventory__subtitle--box'>
                    <h4 className='inventory__subtitle--text'>STATUS</h4>
                    <img src={sortLogo} alt='sort_logo'/>
                </div>
                <div className='inventory__subtitle--box'>
                    <h4 className='inventory__subtitle--text'>QTY</h4>
                    <img src={sortLogo} alt='sort_logo'/>
                </div>
                <div className='inventory__subtitle--box'>
                    <h4 className='inventory__subtitle--text'>WAREHOUSE</h4>
                    <img src={sortLogo} alt='sort_logo'/>
                </div>
                <div className='inventory__subtitle--box'>
                    <h4 className='inventory__subtitle--text'>ACTIONS</h4>
                    <img src={sortLogo} alt='sort_logo'/>
                </div>
            </div>  

            <div className=''> </div>    

            </div>

        </div>
        </> 

    )


}

export default InventoriesPage;