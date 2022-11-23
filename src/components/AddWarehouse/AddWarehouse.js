import './AddWarehouse.scss'
import ArrowBack from '../../Assets/Icons/arrow_back-24px.svg'
import axios from 'axios';
import { useState } from 'react';

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
            {/* <form className="add-warehouse__form"> */}
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
                                <input className={`add-warehouse__input ${warehouseAttempt && warehouseValues.warehouse_name === "" ? "edit-warehouse__input--error" : ""}`} placeholder="Warehouse Name" type="text" name="warehouse_name" value={warehouseValues.warehouse_name} onChange={handleInputChange}/>
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
                    <div className="add-warehouse__btn-container">
                        <button className="add-warehouse__btn add-warehouse__cancel">Cancel</button>
                        <button className="add-warehouse__btn add-warehouse__add" type='submit'>+ Add Warehouse</button>
                    </div>
            </form>
        </div>
    )
}


export { AddWarehouse }