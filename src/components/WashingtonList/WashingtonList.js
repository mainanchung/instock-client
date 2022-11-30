import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../../Pages/WarehousePage/WarehousePage.scss";
import deleteIcon from '../../Assets/Icons/delete_outline-24px.svg';
import editIcon from '../../Assets/Icons/edit-24px.svg';
import arrow from '../../Assets/Icons/chevron_right-24px.svg'

const WashingtonList = ({washingtonItem}) =>{
    const {id, item_name, category, status, quantity, warehouse_id} = washingtonItem;
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
            <div className='washington__list'>
                <div className='washington__content'>
    
                    <div className='washington__content--left'>
                        <div className='washington__content--item'>
                            <h4 className='washington__subtitle--mobile'>washington ITEM</h4>
                            <NavLink to={'/washington/'+ id} className='washington__item-text--link'>
                                <p className='washington__item-text'>{item_name}<img src={arrow} alt='arrow'/></p> 
                            </NavLink>
                        </div>
                        <div className='washington__content--category'>
                            <h4 className='washington__subtitle--mobile'>CATEGORY</h4>
                            <p className='washington__category-text'>{category}</p>
                        </div>
                    </div>
    
                    <div className='washington__content--right'>
                        <div className='washington__content--status'>
                            <h4 className='washington__subtitle--mobile'>STATUS</h4>
                            {quantity !== 0?<>
                            <p className='washington__status--valid'>{status}</p>
                            </>: <><p className='washington__status--invalid'>{status}</p></>}
                        </div>
                        <div className='washington__content--qty'>
                            <h4 className='washington__subtitle--mobile'>QTY</h4>
                            <p className='washington__qty-text'>{quantity}</p>
                        </div>
    
                        <div className='washington__content--warehouse'>
                            <h4 className='washington__subtitle--mobile'>WAREHOUSE</h4>
                            <p className='washington__warehouse-text'>{warehouseName}</p>
                        </div>
                    </div>
                </div>
    
                <div className='washington__content--btn'>
                        <NavLink className='washington__content--btn-delete'><img src={deleteIcon} alt='delete' /></NavLink>
                        <NavLink className='washington__content--btn-edit'><img src={editIcon} alt='edit'/></NavLink>
                </div>
        </div>
        )
    }
    
    
    export default WashingtonList;