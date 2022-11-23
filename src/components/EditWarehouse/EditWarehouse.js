import './EditWarehouse.scss'
import ArrowBack from '../../Assets/Icons/arrow_back-24px.svg'
import axios from 'axios';
import { useState } from 'react';

const EditWarehouse = () => {

    // Connect to backend
    // https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el

    // const [warehouseValues,setWarehouseValues] = useState();

    // axios.get('http://localhost:8080/warehouse/');
    //     .then(res => {
    //         res.find()
    //         // const editWarehouseValues = {
    //         //     // id: (useparams)
    //         //     warehouse_name: res.data.warehouse_name
    //         //     // address: ,
    //         //     // city: ,
    //         //     // country: ,
    //         //     // contact_name: ,
    //         //     // contact_position: ,
    //         //     // contact_phone: ,
    //         //     // contact_email:
    //         // };
    //         setWarehouseValues(editWarehouseValues.warehouse_name)
    //         console.log(res.data)
    //     })
    


    return (
        <div className="edit-warehouse">
            <form className="edit-warehouse__form">
                <div className="edit-warehouse__heading-container">
                    <img className="edit-warehouse__heading-img" src={ArrowBack} alt="arrow-back" />
                    <h1 className="edit-warehouse__heading">Edit Warehouse</h1>
                </div>
                {/* <hr className="edit-warehouse__hr" /> */}
                <div className="edit-warehouse__content-container">
                    <div className="edit-warehouse__content">
                        <h3 className="edit-warehouse__subheading">Warehouse Details</h3>
                        <div className="edit-warehouse__form-list">
                            <div className="edit-warehouse__form-item">
                                <label className="edit-warehouse__label" htmlFor="">Warehouse Name</label>
                                <input className="edit-warehouse__input" type="text" placeholder="ex. Washington"/>
                            </div>
                            <div className="edit-warehouse__form-item">
                                <label className="edit-warehouse__label" htmlFor="">Street Address</label>
                                <input className="edit-warehouse__input" type="text" placeholder="ex. 33 Pearl Street SW"/>
                            </div>
                            <div className="edit-warehouse__form-item">
                                <label className="edit-warehouse__label" htmlFor="">City</label>
                                <input className="edit-warehouse__input" type="text" placeholder="ex. Washington"/>
                            </div>
                            <div className="edit-warehouse__form-item">
                                <label className="edit-warehouse__label" htmlFor="">Country</label>
                                <input className="edit-warehouse__input" type="text" placeholder="ex. USA"/>
                            </div>
                        </div>
                    </div>
                    <hr className="edit-warehouse__hr"/>
                    <div className="edit-warehouse__content">
                        <h3 className="edit-warehouse__subheading">Contact Details</h3>
                        <div className="edit-warehouse__item">
                        <div className="edit-warehouse__form-item">
                            <label className="edit-warehouse__label" htmlFor="">Contact Name</label>
                            <input className="edit-warehouse__input" type="text" placeholder="ex. Graeme Lyon"/>
                        </div>
                        <div className="edit-warehouse__form-item">
                            <label className="edit-warehouse__label" htmlFor="">Position</label>
                            <input className="edit-warehouse__input" type="text" placeholder="ex. Warehouse Manager"/>
                        </div>
                        <div className="edit-warehouse__form-item">
                            <label className="edit-warehouse__label" htmlFor="">Phone Number</label>
                            <input className="edit-warehouse__input" type="text" placeholder="ex. +1 (647) 504-0911"/>
                        </div>
                        <div className="edit-warehouse__form-item">
                            <label className="edit-warehouse__label" htmlFor="">Email</label>
                            <input className="edit-warehouse__input" type="text" placeholder="ex. glyon@instock.com"/>
                        </div>
                        </div>
                    </div>
                </div>
                    <div className="edit-warehouse__btn-container">
                        <button className="edit-warehouse__btn edit-warehouse__cancel">Cancel</button>
                        <button className="edit-warehouse__btn edit-warehouse__save">Save</button>
                    </div>
            </form>
        </div>
    )
}


export { EditWarehouse }