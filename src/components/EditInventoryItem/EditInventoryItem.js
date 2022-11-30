import backIcon from '../../Assets/Icons/arrow_back-24px.svg'
import './EditInventoryItem.scss';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function EditInventoryItem({ setEditItem, singleItem }) {

    const formRef = useRef()
    const [warehouses, setWarehouses] = useState([])
    const [stock, setStock] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        let stockQuantity = formRef.current.quantity.value
        if (formRef.current.status.value === "Out of stock") {
            stockQuantity = 0;
        }
        const updateObj = {
            item_name: formRef.current.name.value,
            description: formRef.current.description.value,
            category: formRef.current.category.value,
            status: formRef.current.status.value,
            quantity: stockQuantity,
            warehouse_id: formRef.current.warehouse.value
        }
        console.log(updateObj)
        const { item_name, description, category, status, quantity, warehouse_id } = updateObj;
        if (item_name && description && category && status && quantity !== "" && warehouse_id) {
            axios.patch(`http://localhost:8080/inventory/${singleItem[0].id}`, updateObj)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
            console.log(updateObj)
        }
        else {
            alert("Please fill in missing fields")
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setEditItem(false)
    }

    const handleStock = (e) => {
        if (e.target.value === "Out Of Stock") {
            setStock(false)
        } if (e.target.value === "In stock") {
            setStock(true)
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/warehouse`)
            .then((response) => {
                console.log(response.data)
                setWarehouses(response.data)
            })

    }, [])


    return (
        <div className="edit">
            <div className="edit__header-container">
                <button onClick={handleCancel} className="edit__back-button">
                    <img className="edit__back-image" src={backIcon} />
                </button>
                <h2 className="edit__header">Edit Inventory Item</h2>
            </div>
            <form className="form" onSubmit={handleSubmit} ref={formRef}>
                <div className="form__top-container">
                    <div className="form__details-container">
                        <h3 className="form__title">Item Details</h3>
                        <label className="form__label" htmlFor="item-name">Item Name</label>
                        <input
                            className="form__text-input"
                            id="name"
                            type="text"
                            name="item-name"
                            placeholder="Television"
                        />
                        <label className="form__label" htmlFor="description">Description</label>
                        <textarea
                            className="form__description"
                            id="description"
                            type="text"
                            rows="5"
                            name="description"></textarea>
                        <label className="form__label" htmlFor="category">Category</label>
                        <select className="form__select" name="category" id="category">
                            <option value="Accessories">Accessories</option>
                            <option value="Gear">Gear</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Health">Health</option>
                            <option value="Apparel">Apparel</option>
                        </select>
                    </div>
                    <div className="form__availability-container">
                        <h3 className="form__title">Item Availability</h3>
                        <label className="form__label" htmlFor="status">Status</label>
                        <div className="form__radio-container">
                            {/* // this is 5 */}
                            <div>
                                <input type="radio" name="status" value="In stock" onClick={handleStock} />
                                <label>In stock</label>
                            </div>
                            <div>
                                <input type="radio" id="oos" name="status" value="Out of stock" onClick={handleStock} />
                                <label>Out of stock</label>
                            </div>
                        </div>
                        <label className={stock ? "form__label" : "empty"} htmlFor="quantity">Quantity</label>
                        <input type="number" className={stock ? "form__text-input" : "empty"} name="quantity" id="quantity" />
                        <label className="form__label" htmlFor="warehouse">Warehouse</label>
                        <select className="form__select" htmlFor="warehouse" id="warehouse">
                            {warehouses.map((warehouse) => {
                                return (
                                    <option key={warehouse.id} value={warehouse.id} name="warehouse">{warehouse.warehouse_name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="form__buttons-container">
                    <button onClick={handleCancel} className="form__buttons-cancel" type="click">Cancel</button>
                    <button className="form__buttons-save">Save</button>
                </div>

            </form>
        </div>
    )

}

export { EditInventoryItem }