import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../InventoriesPage/InventoriesPage.scss";
import sortIcon from '../../Assets/Icons/sort-24px.svg';
import deleteIcon from '../../Assets/Icons/delete_outline-24px.svg';
import editIcon from '../../Assets/Icons/edit-24px.svg';
import arrow from '../../Assets/Icons/chevron_right-24px.svg'


const InventoriesPage = () => {
    return (
        <>
        <div className='inventory'>
            <div className='inventory__container'>
                <div className='inventory__top'>
                    <h1 className='inventory__title'>Inventory</h1>
                        <div className='inventory__function'>
                            <input className='inventory__function--search' type="search" id="search" name="search" placeholder='Search...'/>
                            <button  className='inventory__function--btn'>+ Add New Item</button>
                        </div>
                </div>      

                <div className='inventory__subtitle--desk_tablet'>
                    <div className='inventory__subtitle--box-item'>
                        <h4 className='inventory__subtitle--text'>INVENTORY ITEM<img className='inventory__subtitle--img' src={sortIcon} alt='sort_logo'/></h4>
                    </div>
                    <div className='inventory__subtitle--box-category'>
                        <h4 className='inventory__subtitle--text'>CATEGORY<img className='inventory__subtitle--img' src={sortIcon} alt='sort_logo'/></h4> 
                    </div>
                    <div className='inventory__subtitle--box-status'>
                        <h4 className='inventory__subtitle--text'>STATUS <img className='inventory__subtitle--img' src={sortIcon} alt='sort_logo'/></h4>
                    </div>
                    <div className='inventory__subtitle--box-qty'>
                        <h4 className='inventory__subtitle--text'>QTY<img className='inventory__subtitle--img' src={sortIcon} alt='sort_logo'/></h4>
                        
                    </div>
                    <div className='inventory__subtitle--box-warehouse'>
                        <h4 className='inventory__subtitle--text'>WAREHOUSE<img className='inventory__subtitle--img' src={sortIcon} alt='sort_logo'/></h4>
                        
                    </div>

                    <h4 className='inventory__subtitle--text inventory__subtitle--text-action'>ACTIONS</h4>
                    
                
                </div>  
                <div className='inventory__list'>
                    <div className='inventory__content'>

                        <div className='inventory__content--left'>
                            <div className='inventory__content--item'>
                                <h4 className='inventory__subtitle--mobile'>INVENTORY ITEM</h4>
                                <p className='inventory__item-text'>Television<img src={arrow}/></p> 
                            </div>
                            <div className='inventory__content--category'>
                                <h4 className='inventory__subtitle--mobile'>CATEGORY</h4>
                                <p className='inventory__category-text'>Electronics</p>
                            </div>
                        </div>

                        <div className='inventory__content--right'>
                            <div className='inventory__content--status'>
                                <h4 className='inventory__subtitle--mobile'>STATUS</h4>
                                <p className='inventory__status--valid'>IN STOCK</p>
                            </div>
                            <div className='inventory__content--qty'>
                                <h4 className='inventory__subtitle--mobile'>QTY</h4>
                                <p className='inventory__qty-text'>500</p>
                            </div>

                            <div className='inventory__content--warehouse'>
                                <h4 className='inventory__subtitle--mobile'>QTY</h4>
                                <p className='inventory__warehouse-text'>Manhattan</p>
                            </div>
                    </div>
                
                </div>
                <div className='inventory__content--btn'>
                        <NavLink className='inventory__content--btn-delete'><img src={deleteIcon}/></NavLink>
                        <NavLink className='inventory__content--btn-edit'><img src={editIcon}/></NavLink>
                    </div>
                </div>    
                <div className='inventory__list'>
                    <div className='inventory__content'>

                        <div className='inventory__content--left'>
                            <div className='inventory__content--item'>
                                <h4 className=' inventory__subtitle--mobile'>INVENTORY ITEM</h4>
                                <p className='inventory__item-text'>Television<img src={arrow}/></p>
                            </div>

                            <div className='inventory__content--category'>
                                <h4 className='inventory__subtitle--mobile'>CATEGORY</h4>
                                <p className='inventory__category-text'>Electronics</p>
                            </div>
                        </div>

                        <div className='inventory__content--right'>
                            <div className='inventory__content--status'>
                                <h4 className='inventory__subtitle--mobile'>STATUS</h4>
                                <p className='inventory__status--invalid'>OUT OF STOCK</p>
                            </div>
                            <div className='inventory__content--qty'>
                                <h4 className='inventory__subtitle--mobile'>QTY</h4>
                                <p className='inventory__qty-text'>500</p>
                            </div>

                            <div className='inventory__content--warehouse'>
                                <h4 className='inventory__subtitle--mobile'>QTY</h4>
                                <p className='inventory__warehouse-text'>Manhattan</p>
                            </div>
                        </div>

                        
                        </div>
                        <div className='inventory__content--btn'>
                            <NavLink className='inventory__content--btn-delete'><img src={deleteIcon}/></NavLink>
                            <NavLink className='inventory__content--btn-edit'><img src={editIcon}/></NavLink>
                        </div>
                    </div>

            </div>

        </div>
        </> 

    )

}

export default InventoriesPage;