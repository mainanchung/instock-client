import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../../Pages/InventoriesPage/InventoriesPage.scss";
import deleteIcon from '../../Assets/Icons/delete_outline-24px.svg';
import editIcon from '../../Assets/Icons/edit-24px.svg';
import arrow from '../../Assets/Icons/chevron_right-24px.svg'


const InventoryList = ({inventoryItem}) =>{
const {id, item_name, category, status, quantity, warehouse_id} = inventoryItem;
const [warehouseName, setWarehouseName] = useState("") 

useEffect(() => {
    if(warehouse_id){
    axios.get('http://localhost:8080/warehouse').then((response)=>{
        console.log(response.data)
        let allWarehouse = response.data
        let targetWarehouseName = allWarehouse.find( info => info.id === warehouse_id).warehouse_name
        console.log(targetWarehouseName)
        setWarehouseName(targetWarehouseName)
    }).catch((error)=>{
        console.log(error)
    })
}},[])

return(
        <div className='inventory__list'>
            <div className='inventory__content'>

                <div className='inventory__content--left'>
                    <div className='inventory__content--item'>
                        <h4 className='inventory__subtitle--mobile'>INVENTORY ITEM</h4>
                        <NavLink to={'/inventory/'+ id} className='inventory__item-text--link'>
                            <p className='inventory__item-text'>{item_name}<img src={arrow} alt='arrow'/></p> 
                        </NavLink>
                    </div>
                    <div className='inventory__content--category'>
                        <h4 className='inventory__subtitle--mobile'>CATEGORY</h4>
                        <p className='inventory__category-text'>{category}</p>
                    </div>
                </div>

                <div className='inventory__content--right'>
                    <div className='inventory__content--status'>
                        <h4 className='inventory__subtitle--mobile'>STATUS</h4>
                        {quantity !== 0?<>
                        <p className='inventory__status--valid'>{status}</p>
                        </>: <><p className='inventory__status--invalid'>{status}</p></>}
                    </div>
                    <div className='inventory__content--qty'>
                        <h4 className='inventory__subtitle--mobile'>QTY</h4>
                        <p className='inventory__qty-text'>{quantity}</p>
                    </div>

                    <div className='inventory__content--warehouse'>
                        <h4 className='inventory__subtitle--mobile'>WAREHOUSE</h4>
                        <p className='inventory__warehouse-text'>{warehouseName}</p>
                    </div>
                </div>
            </div>

            <div className='inventory__content--btn'>
                    <NavLink className='inventory__content--btn-delete'><img src={deleteIcon} alt='delete' /></NavLink>
                    <NavLink className='inventory__content--btn-edit'><img src={editIcon} alt='edit'/></NavLink>
            </div>
    </div>
    )
}


export default InventoryList;