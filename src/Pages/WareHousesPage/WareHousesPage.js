import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';  
import '../WareHousesPage/WareHousesPage.scss';

import sortIcon from '../../Assets/Icons/sort-24px.svg';
import deleteIcon from '../../Assets/Icons/delete_outline-24px.svg';
import editIcon from '../../Assets/Icons/edit-24px.svg';
import arrow from '../../Assets/Icons/chevron_right-24px.svg'


const WareHousesPage = () => {

    return (

        <div className="warehouses">
            <div className="warehouses__container"> 
                <div className= "warehouses__top">
                    <h1 className="warehouses__title">Warehouses</h1>
                    <div className='warehouses__function'>
                            <input className='warehouses__function--search' type="search" id="search" name="search" placeholder='Search...'/>
                            <button  className='warehouses__function--btn'>+ Add New Warehouse</button>
                    </div>
                </div>
            </div>
        </div>

    )


}
export default WareHousesPage;