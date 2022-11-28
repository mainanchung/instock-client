import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';  
import '../WarehousesPage/WarehousesPage.scss';

import sortIcon from '../../Assets/Icons/sort-24px.svg';
import deleteIcon from '../../Assets/Icons/delete_outline-24px.svg';
import editIcon from '../../Assets/Icons/edit-24px.svg';
import arrow from '../../Assets/Icons/chevron_right-24px.svg';


const WarehousesPage = () => {

    const [warehouseList, setWareHouseList] = useState([])

    useEffect( () => {
        axios.get(
            `http://localhost:8080/warehouse`
        ).then((grab) => {
            let warehouseList = grab.data;
            console.log(warehouseList); 
            // displayTheList = warehouseList;
            setWareHouseList(warehouseList);
        }).catch ((error) =>{
            console.log(`Check it over man --> ${error}`);
        })
// keep line 26 in your mind in terms of potential errors 
    }, [])

    // let displayTheList;

    let mapArray = warehouseList;

    return (

        <div className="warehouses">
            <div className="warehouses__container"> 
                <div className= "warehouses__top">
                    <h1 className="warehouses__title">Warehouses</h1>
                    <div className='warehouses__function'>
                            <input className='warehouses__function--click warehouses__function--search' 
                            type="search" id="search" name="search" placeholder='Search...'/>
                            {/* <NavLink className='warehouses__link' to ='/addWarehouse'> */}
                                <button  className='warehouses__function--click 
                                warehouses__function--btn'>+ Add New Warehouse</button>
                            {/* </NavLink> */}
                    </div>
                </div>

                        <div className = "warehouses__center--header"> 
                            
                            {/* <div className = "warehouse__center--left"></div>
                            <div className = "warehouse__center--right"></div> */}

                            <div className='warehouses__subtitle--box-location'>
                                <h4 className='warehouses__subtitle--text'>WAREHOUSE</h4>
                                <img className='warehouses__subtitle--img' 
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
                mapArray.map ((change) => {
                    
                    
                    return(
                        // <NavLink to= {`/${change.id}`} key={change.id}/>  
                        <div className= "warehouses__center">

                            {/*  */}
                            <div className="warehouses__list">

                                <div className= "warehouses__content">

                                    <div className="warehouses__content--location">
                                        <div className="warehouses__content--where">
                                            <h4 className=' warehouses__subtitle--mobile'>WAREHOUSE</h4>
                                            {/* <NavLink className='warehouses__link' to ='/addWarehouse'> */}
                                                <p className='warehouses__item-text'>{change.city}
                                                <img src={arrow}/></p>
                                            {/* </NavLink> */}
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
                                    <NavLink className='warehouses__content--btn-delete'><img src={deleteIcon}/></NavLink>
                                    <NavLink className='warehouses__content--btn-edit'><img src={editIcon}/></NavLink>
                                </div>

                            </div>
                        </div>
                    )
                    })
                    }
            </div>
        </div>


        

        

    )


}
export default WarehousesPage;