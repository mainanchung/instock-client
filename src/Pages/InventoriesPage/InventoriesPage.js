import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../InventoriesPage/InventoriesPage.scss";
import sortIcon from '../../Assets/Icons/sort-24px.svg';
import InventoryList from '../../components/InventoryList/InventoryList';


const InventoriesPage = () => {
    const [inventories, setInventories] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/inventory').then((response)=>{
            console.log(response.data)
            setInventories(response.data)
        }).catch((error) => {
            console.log(error)
          })
    },[])


    return (
        
        <div className='inventory'>
            <div className='inventory__container'>
                <div className='inventory__top'>
                    <h1 className='inventory__title'>Inventory</h1>
                        <div className='inventory__function'>
                            <input className='inventory__function--search' type="search" id="search" name="search" placeholder='Search...'/>
                            <NavLink to ='/inventory-form'>
                                <button  className='inventory__function--btn'>+ Add New Item</button>
                            </NavLink>
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

                {inventories.map((item)=>{
                    return(
                        <InventoryList
                        key={item.id} 
                        inventoryItem={item}/>
                        )
                    }) 
                }

            </div>

        </div>
    
    )

}

export default InventoriesPage;