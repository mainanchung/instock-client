import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './WarehousesPage.scss';

import sortIcon from '../../Assets/Icons/sort-24px.svg';
import deleteIcon from '../../Assets/Icons/delete_outline-24px.svg';
import editIcon from '../../Assets/Icons/edit-24px.svg';
import arrow from '../../Assets/Icons/chevron_right-24px.svg';
import { DeleteModal } from '../../components/DeleteModal/DeleteModal';


const WarehousesPage = () => {

    const [warehouseList, setWarehouseList] = useState([])
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteWarehouseUrl, setDeleteWarehouseUrl] = useState("")
    const [clickedWarehouseName, setClickedWarehouseName] = useState("")
    const [deleteWarehouseId, setDeleteWarehouseId] = useState("")
    const [sortOrder, setSortOrder] = useState(true)

    const handleModal = (obj) => {
        console.log(obj)
        setClickedWarehouseName(obj.city)
        setDeleteWarehouseUrl('http://localhost:8080/warehouse/' + obj.id)
        setDeleteModal(true)
    }

    useEffect(() => {
        axios.get(
            `http://localhost:8080/warehouse`
        ).then((grab) => {
            let warehouseList = grab.data;
       
            setWarehouseList(grab.data);
        }).catch((error) => {
            console.log(`Check it over man --> ${error}`);
        })
      
    }, [warehouseList, deleteWarehouseUrl])


    const sortWarehouse = (sortField) => {

        let sortWarehouse 
       
        if (sortOrder) {
            sortWarehouse = warehouseList.sort((a, b) => a[sortField].localeCompare(b[sortField])) // localeCompare for alphatical compare
        } else {
            sortWarehouse = warehouseList.sort((a, b) => b[sortField].localeCompare(a[sortField]))
        }
        console.log(sortWarehouse)
        setWarehouseList([...sortWarehouse])
    }


    return (

        <div className="warehouses">
            {deleteModal ?
                <DeleteModal
                    setDeleteModal={setDeleteModal}
                    deleteUrl={deleteWarehouseUrl}
                    clickedName={clickedWarehouseName}
                    database={"warehouse"}
                    />
                : ""
            }
            <div className="warehouses__container">
                <div className="warehouses__top">
                    <h1 className="warehouses__title">Warehouses</h1>
                    <div className='warehouses__function'>
                        <input className='warehouses__function--click warehouses__function--search'
                            type="search" id="search" name="search" placeholder='Search...' />
                        <NavLink className='warehouses__link' to='/add-warehouse'>
                            <button className='warehouses__function--click warehouses__function--btn'>+ Add New Warehouse</button>
                        </NavLink>
                    </div>
                </div>

                        <div className = "warehouses__center--header"> 

                            <div className='warehouses__subtitle--box-location'>
                                <h4 className='warehouses__subtitle--text'>WAREHOUSE</h4>
                                <img onClick={() => {sortWarehouse('warehouse_name'); setSortOrder(!sortOrder)}} className='warehouses__subtitle--img' 
                                src={sortIcon} alt='sort_logo'/>
                            </div>
                            <div className='warehouses__subtitle--box-address'>
                                <h4 className='warehouses__subtitle--text'>ADDRESS</h4>
                                <img className='warehouses__subtitle--img' 
                                src={sortIcon} alt='sort_logo'/>
                            </div>
                            <div className='warehouses__subtitle--box-name'>
                                <h4 className='warehouses__subtitle--text'>CONTACT NAME</h4>
                                <img className='warehouses__subtitle--img' 
                                src={sortIcon} alt='sort_logo'/>
                            </div>
                            <div className='warehouses__subtitle--box-info'>
                                <h4 className='warehouses__subtitle--text'>CONTACT INFORMATION</h4>
                                <img className='warehouses__subtitle--img' 
                                src={sortIcon} alt='sort_logo'/>
                            </div>
                            
                            <h4 className='warehouses__subtitle--text 
                            warehouses__subtitle--text-action'>ACTIONS</h4>

                        </div>
                {
                    warehouseList.map((change) =>  
                            <div className="warehouses__center">
                                <div className="warehouses__list">

                                    <div className="warehouses__content">

                                        <div className="warehouses__content--location">
                                            <div className="warehouses__content--where">
                                                <h4 className=' warehouses__subtitle--mobile'>WAREHOUSE</h4>
                                         
                                                <p className='warehouses__item-text'>{change.city}
                                                    <img src={arrow} alt="arrow" />
                                                </p>
                                            
                                            </div>
                                            <div className="warehouses__contect--address">
                                                <h4 className='warehouses__subtitle--mobile'>ADDRESS</h4>
                                                <p className='warehouses__category-text'>{change.address}</p>
                                            </div>
                                        </div>

                                        <div className="warehouses__content--contact">
                                            <div className='warehouses__content--contact-person'>
                                                <h4 className='warehouses__subtitle--mobile'>CONTACT NAME</h4>
                                                <p className='warehouses__status--name'>{change.contact_name}</p>
                                            </div>
                                            <div className='warehouses__content--contact-info'>
                                                <h4 className='warehouses__subtitle--mobile warehouses__subtitle--adjust'>CONTACT INFORMATION</h4>
                                                <h4 className='warehouses__subtitle--mobile-number'>{change.contact_phone}</h4>
                                                <p className='warehouses__qty-text'>{change.contact_email}</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='warehouses__content--btn'>
                                        <button className='warehouses__content--btn-delete' onClick={() => handleModal(change)}><img id={change.id} src={deleteIcon} /></button>
                                        <NavLink className='warehouses__content--btn-edit'><img src={editIcon} /></NavLink>
                                    </div>

                                </div>
                            </div>
                    )
                }
            </div>
        </div>






    )


}
export default WarehousesPage;