import './AddWarehouse.scss'
import ArrowBack from '../../Assets/Icons/arrow_back-24px.svg'
import axios from 'axios';
import { useState } from 'react';
import Error from '../../Assets/Icons/error-24px.svg';

const AddWarehouse = () => {

    // Connect to backend
    // https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el

    const [warehouseValues,setWarehouseValues] = useState({
        id: "",
        warehouse_name: "",
        address: "",
        city: "",
        country: "",
        contact_name: "",
        contact_position: "",
        contact_phone: "",
        contact_email: ""
    });

    const [warehouseAttempt,setWarehouseAttempt] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWarehouseValues({
          ...warehouseValues,
          [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setWarehouseAttempt(true)
        if (warehouseValues.warehouse_name && warehouseValues.address && warehouseValues.city && warehouseValues.country && warehouseValues.contact_name && warehouseValues.contact_position && warehouseValues.contact_phone && warehouseValues.contact_email) {
            axios.post('http://localhost:8080/warehouse/', warehouseValues)
        } 
    }
    console.log(warehouseValues)



    return (
        <div className="add-warehouse">
            <form className="add-warehouse__form" onSubmit={handleSubmit}>
                <div className="add-warehouse__heading-container">
                    <img className="add-warehouse__heading-img" src={ArrowBack} alt="arrow-back" />
                    <h1 className="add-warehouse__heading">Add New Warehouse</h1>
                </div>
                <div className="add-warehouse__content-container">
                    <div className="add-warehouse__content">
                        <h3 className="add-warehouse__subheading">Warehouse Details</h3>
                        <div className="add-warehouse__form-list">
                            <div className="add-warehouse__form-item">
                                <label className="add-warehouse__label" htmlFor="">Warehouse Name</label>
                                <input className={`add-warehouse__input ${warehouseAttempt && warehouseValues.warehouse_name === "" ? "add-warehouse__input--error" : ""}`} placeholder="Warehouse Name" type="text" name="warehouse_name" value={warehouseValues.warehouse_name} onChange={handleInputChange}/>
                                <p className={`${warehouseAttempt && warehouseValues.warehouse_name === "" ? "add-warehouse__error" : "add-warehouse__error--none"}`} ><img src={Error} className="add-warehouse__error-img" alt="error" /> This field is required</p>
                            </div>
                            <div className="add-warehouse__form-item">
                                <label className="add-warehouse__label" htmlFor="">Street Address</label>
                                <input className={`add-warehouse__input ${warehouseAttempt && warehouseValues.address === "" ? "add-warehouse__input--error" : ""}`} placeholder="Street Address" type="text" name="address" value={warehouseValues.address} onChange={handleInputChange}/>
                                <p className={`${warehouseAttempt && warehouseValues.warehouse_name === "" ? "add-warehouse__error" : "add-warehouse__error--none"}`} ><img src={Error} className="add-warehouse__error-img" alt="error" /> This field is required</p>
                            </div>
                            <div className="add-warehouse__form-item">
                                <label className="add-warehouse__label" htmlFor="">City</label>
                                <input className={`add-warehouse__input ${warehouseAttempt && warehouseValues.city === "" ? "add-warehouse__input--error" : ""}`} placeholder="City" type="text" name="city" value={warehouseValues.city} onChange={handleInputChange}/>
                                <p className={`${warehouseAttempt && warehouseValues.warehouse_name === "" ? "add-warehouse__error" : "add-warehouse__error--none"}`} ><img src={Error} className="add-warehouse__error-img" alt="error" /> This field is required</p>
                            </div>
                            <div className="add-warehouse__form-item">
                                <label className="add-warehouse__label" htmlFor="">Country</label>
                                <input className={`add-warehouse__input ${warehouseAttempt && warehouseValues.country === "" ? "add-warehouse__input--error" : ""}`} placeholder="Country" type="text" name="country" value={warehouseValues.country} onChange={handleInputChange}/>
                                <p className={`${warehouseAttempt && warehouseValues.warehouse_name === "" ? "add-warehouse__error" : "add-warehouse__error--none"}`} ><img src={Error} className="add-warehouse__error-img" alt="error" /> This field is required</p>
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
                            <input className={`add-warehouse__input ${warehouseAttempt && warehouseValues.contact_name === "" ? "add-warehouse__input--error" : ""}`} placeholder="Contact Name" type="text" name="contact_name" value={warehouseValues.contact_name} onChange={handleInputChange}/>
                            <p className={`${warehouseAttempt && warehouseValues.warehouse_name === "" ? "add-warehouse__error" : "add-warehouse__error--none"}`} ><img src={Error} className="add-warehouse__error-img" alt="error" /> This field is required</p>
                        </div>
                        <div className="add-warehouse__form-item">
                            <label className="add-warehouse__label" htmlFor="">Position</label>
                            <input className={`add-warehouse__input ${warehouseAttempt && warehouseValues.contact_position === "" ? "add-warehouse__input--error" : ""}`} placeholder="Position" type="text" name="contact_position" value={warehouseValues.contact_position} onChange={handleInputChange}/>
                            <p className={`${warehouseAttempt && warehouseValues.warehouse_name === "" ? "add-warehouse__error" : "add-warehouse__error--none"}`} ><img src={Error} className="add-warehouse__error-img" alt="error" /> This field is required</p>
                        </div>
                        <div className="add-warehouse__form-item">
                            <label className="add-warehouse__label" htmlFor="">Phone Number</label>
                            <input className={`add-warehouse__input ${warehouseAttempt && warehouseValues.contact_phone === "" ? "add-warehouse__input--error" : ""}`} placeholder="Phone Number" type="text" name="contact_phone" value={warehouseValues.contact_phone} onChange={handleInputChange}/>
                            <p className={`${warehouseAttempt && warehouseValues.warehouse_name === "" ? "add-warehouse__error" : "add-warehouse__error--none"}`} ><img src={Error} className="add-warehouse__error-img" alt="error" /> This field is required</p>
                        </div>
                        <div className="add-warehouse__form-item">
                            <label className="add-warehouse__label" htmlFor="">Email</label>
                            <input className={`add-warehouse__input ${warehouseAttempt && warehouseValues.contact_email === "" ? "add-warehouse__input--error" : ""}`} placeholder="Email" type="text" name="contact_email" value={warehouseValues.contact_email} onChange={handleInputChange}/>
                            <p className={`${warehouseAttempt && warehouseValues.warehouse_name === "" ? "add-warehouse__error" : "add-warehouse__error--none"}`} ><img src={Error} className="add-warehouse__error-img" alt="error" /> This field is required</p>
                        </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                    <div className="add-warehouse__btn-container">
                        <button className="add-warehouse__btn add-warehouse__cancel">Cancel</button>
                        <button className="add-warehouse__btn add-warehouse__add" type='submit'>+ Add Warehouse</button>
                    </div>
            </form>
        </div>
    )
}


export { AddWarehouse }