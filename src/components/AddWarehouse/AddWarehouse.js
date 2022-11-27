import './AddWarehouse.scss'
import ArrowBack from '../../Assets/Icons/arrow_back-24px.svg'
import axios from 'axios';
import { useState } from 'react';

const AddWarehouse = () => {

    // Connect to backend
    // https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el

    // const [warehouseValues,setWarehouseValues] = useState();

    // axios.get('http://localhost:8080/warehouse/')
    //     .then(res => {
    //         // res.find()
    //         const editWarehouseValues = {
    //             // id: (useparams)
    //             warehouse_name: res.data
    //             // address: ,
    //             // city: ,
    //             // country: ,
    //             // contact_name: ,
    //             // contact_position: ,
    //             // contact_phone: ,
    //             // contact_email:
    //         };
    //         setWarehouseValues(editWarehouseValues.warehouse_name)
    //         console.log(res.data)
    //     })
    


    return (
        <div className="add-warehouse">
            <form className="add-warehouse__form">
                <div className="add-warehouse__heading-container">
                    <img className="add-warehouse__heading-img" src={ArrowBack} alt="arrow-back" />
                    <h1 className="add-warehouse__heading">Add New Warehouse</h1>
                </div>
                {/* <hr className="add-warehouse__hr" /> */}
                <div className="add-warehouse__content-container">
                    <div className="add-warehouse__content">
                        <h3 className="add-warehouse__subheading">Warehouse Details</h3>
                        <div className="add-warehouse__form-list">
                            <div className="add-warehouse__form-item">
                                <label className="add-warehouse__label" htmlFor="">Warehouse Name</label>
                                <input className="add-warehouse__input" type="text" placeholder="Warehouse Name"/>
                            </div>
                            <div className="add-warehouse__form-item">
                                <label className="add-warehouse__label" htmlFor="">Street Address</label>
                                <input className="add-warehouse__input" type="text" placeholder="Street Address"/>
                            </div>
                            <div className="add-warehouse__form-item">
                                <label className="add-warehouse__label" htmlFor="">City</label>
                                <input className="add-warehouse__input" type="text" placeholder="City"/>
                            </div> 
                            <div className="add-warehouse__form-item">
                                <label className="add-warehouse__label" htmlFor="">Country</label>
                                <input className="add-warehouse__input" type="text" placeholder="Country"/>
                            </div>
                        </div>
                    </div>
                    <hr className="add-warehouse__hr"/>
                    {/*  */}
                    <div className="add-warehouse__content">
                        <h3 className="add-warehouse__subheading">Contact Details</h3>
                        <div className="add-warehouse__item">
                        <div className="add-warehouse__form-item">
                            <label className="add-warehouse__label" htmlFor="">Contact Name</label>
                            <input className="add-warehouse__input" type="text" placeholder="Contact Name"/>
                        </div>
                        <div className="add-warehouse__form-item">
                            <label className="add-warehouse__label" htmlFor="">Position</label>
                            <input className="add-warehouse__input" type="text" placeholder="Position"/>
                        </div>
                        <div className="add-warehouse__form-item">
                            <label className="add-warehouse__label" htmlFor="">Phone Number</label>
                            <input className="add-warehouse__input" type="text" placeholder="Phone Number"/>
                        </div>
                        <div className="add-warehouse__form-item">
                            <label className="add-warehouse__label" htmlFor="">Email</label>
                            <input className="add-warehouse__input" type="text" placeholder="Email"/>
                        </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                    <div className="add-warehouse__btn-container">
                        <button className="add-warehouse__btn add-warehouse__cancel">Cancel</button>
                        <button className="add-warehouse__btn add-warehouse__add">+ Add Warehouse</button>
                    </div>
            </form>
        </div>
    )
}


export { AddWarehouse }