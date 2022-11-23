import './EditWarehouse.scss'
import ArrowBack from '../../Assets/Icons/arrow_back-24px.svg'
import axios from 'axios';
import { useState, useEffect } from 'react';

const EditWarehouse = () => {

    // Connect to backend
    // https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el

    const [warehouseValues,setWarehouseValues] = useState();
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8080/warehouse/150a36cf-f38e-4f59-8e31-39974207372d')
        .then(res => {
            // res.find()
            let data = res.data[0]

            const editWarehouseValues = {
                id: data.id ,
                warehouse_name: data.warehouse_name,
                address: data.address,
                city: data.city,
                country: data.country,
                contact_name: data.contact_name,
                contact_position: data.contact_position,
                contact_phone: data.contact_phone,
                contact_email: data.contact_email
            };

            console.log(res.data)


            setWarehouseValues(editWarehouseValues)
            setIsLoaded(true)
            // console.log(res.data[0].warehouse_name)
            // console.log(editWarehouseValues)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    
        
    // console.log(warehouseValues)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWarehouseValues({
          ...warehouseValues,
          [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(warehouseValues)
    }


    return (
        <div className="edit-warehouse">
            {
                isLoaded ? 
                    <form className="edit-warehouse__form" onSubmit={handleSubmit}>
                        <div className="edit-warehouse__heading-container">
                            <img className="edit-warehouse__heading-img" src={ArrowBack} alt="arrow-back" />
                            <h1 className="edit-warehouse__heading">Edit Warehouse</h1>
                        </div>
                        <div className="edit-warehouse__content-container">
                            <div className="edit-warehouse__content">
                                <h3 className="edit-warehouse__subheading">Warehouse Details</h3>
                                <div className="edit-warehouse__form-list">
                                    <div className="edit-warehouse__form-item">
                                        <label className="edit-warehouse__label" htmlFor="">Warehouse Name</label>
                                        <input className="edit-warehouse__input" type="text" name="warehouse_name" value={warehouseValues.warehouse_name} onChange={handleInputChange}/>
                                    </div>
                                    <div className="edit-warehouse__form-item">
                                        <label className="edit-warehouse__label" htmlFor="">Street Address</label>
                                        <input className="edit-warehouse__input" type="text" placeholder="ex. 33 Pearl Street SW" name="address" value={warehouseValues.address} onChange={handleInputChange}/>
                                    </div>
                                    <div className="edit-warehouse__form-item">
                                        <label className="edit-warehouse__label" htmlFor="">City</label>
                                        <input className="edit-warehouse__input" type="text" placeholder="ex. Washington" name='city' value={warehouseValues.city} onChange={handleInputChange}/>
                                    </div>
                                    <div className="edit-warehouse__form-item">
                                        <label className="edit-warehouse__label" htmlFor="">Country</label>
                                        <input className="edit-warehouse__input" type="text" placeholder="ex. USA" name='country' value={warehouseValues.country} onChange={handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <hr className="edit-warehouse__hr"/>
                            <div className="edit-warehouse__content">
                                <h3 className="edit-warehouse__subheading">Contact Details</h3>
                                <div className="edit-warehouse__item">
                                <div className="edit-warehouse__form-item">
                                    <label className="edit-warehouse__label" htmlFor="">Contact Name</label>
                                    <input className="edit-warehouse__input" type="text" placeholder="ex. Graeme Lyon" name='contact_name' value={warehouseValues.contact_name} onChange={handleInputChange}/>
                                </div>
                                <div className="edit-warehouse__form-item">
                                    <label className="edit-warehouse__label" htmlFor="">Position</label>
                                    <input className="edit-warehouse__input" type="text" placeholder="ex. Warehouse Manager" name='contact_position' value={warehouseValues.contact_position} onChange={handleInputChange}/>
                                </div>
                                <div className="edit-warehouse__form-item">
                                    <label className="edit-warehouse__label" htmlFor="">Phone Number</label>
                                    <input className="edit-warehouse__input" type="text" placeholder="ex. +1 (647) 504-0911" name='contact_phone' value={warehouseValues.contact_phone} onChange={handleInputChange}/>
                                </div>
                                <div className="edit-warehouse__form-item">
                                    <label className="edit-warehouse__label" htmlFor="">Email</label>
                                    <input className="edit-warehouse__input" type="text" placeholder="ex. glyon@instock.com" name='contact_email' value={warehouseValues.contact_email} onChange={handleInputChange}/>
                                </div>
                                </div>
                            </div>
                        </div>
                            <div className="edit-warehouse__btn-container">
                                <button className="edit-warehouse__btn edit-warehouse__cancel">Cancel</button>
                                <button className="edit-warehouse__btn edit-warehouse__save" type='submit'>Save</button>
                            </div>
                    </form> 
                    : 
                    <p> Component not loaded</p>
            }
            
        </div>
    )
}


export { EditWarehouse }