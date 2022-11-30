import { NavLink } from 'react-router-dom';
import {useRef, useState, useEffect} from 'react';
import "./InventoryFormPage.scss";  
import ArrowBack from '../../Assets/Icons/arrow_back-24px.svg';
import axios from 'axios';

const InventoryFormPage = () => {
    const [form, setForm] = useState([]);
    const clickRef = useRef();
    const [warehouses, setWarehouses] = useState([]);
    const [stock, setStock] = useState(false)

    const createInventoryItem = (e) => {
        e.preventDefault();

        let clickStock = clickRef.current.quantity.value;
        if (clickRef.current.stock.value === "Out of Stock"){
            clickStock= 0; 
        }

        const newInventoryItem = {
            warehouse_id:clickRef.current.warehouse_id.value,
            item_name: clickRef.current.item_name.value,
            description: clickRef.current.description.value,
            category: clickRef.current.category.value,
            quantity: clickStock,
            status: clickRef.current.stock.value
        }
        console.log(newInventoryItem); 

        const {item_name, description, category, quantity, stock, warehouse_id} = newInventoryItem;
        if(item_name && description && category && quantity && stock !== ""){
            axios.post('http://localhost:8080/inventory', newInventoryItem).then ((res) =>{
            setForm([...form, res.data]);
            }).catch((error) => {
            console.log(error);
        })
        }else {
            alert("Please fill in missing fields")
        }

        clickRef.current.item_name.value = '';
        clickRef.current.description.value = ''; 
        clickRef.current.category.value = '';
        clickRef.current.quantity.value = ''; 
        clickRef.current.stockvalue = '';
    }

    const handleStock = (e) => {
        if (e.target.value === "Out of Stock") {
            setStock(false)
        } if (e.target.value === "In Stock") {
            setStock(true)
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8080/warehouse').then ((res) => {
            setWarehouses(res.data)
        }).catch((error) => {
            console.log(error);
        })
     }, [])

    return (
        <div className = "inventory-app">
            <form onSubmit={ (createInventoryItem)} ref={clickRef} className = "inventory-app__form">
                <div className = 'inventory-app__heading-box'>
                <NavLink to="/inventories">
                    <img className="inventory-app__heading-img" src={ArrowBack} 
                    alt="arrow-back" />
                </NavLink>
                    <h1 className="inventory-app__header">
                    Add New Inventory</h1>
                </div> 
                <div className ="inventory-app__content-container">

                    <div className = "inventory-app__sub-container">
                        <section className="inventory-app__content">
                            <h3 className="inventory-app__subheading">
                            Item Details</h3>
                            <div className = "inventory-app__form-list">
                                <div className="inventory-app__form-item">
                                    
                                    <label className="inventory-app__label" htmlFor="">Item Name</label>
                                    
                                    <input id='item_name' className="inventory-app__input" type="text" placeholder="Item Name"/>
                                </div>
                                <div className="inventory-app__form-item">
                                    <label className="inventory-app__label" htmlFor="">Description</label>
                            
                                    <input className="inventory-app__input inventory-app__input--height" type="text" id="description"
                                    placeholder="Please enter a brief item description..."/>
                                </div>
                                <div className="inventory-app__form-item">
                                        <label className="inventory-app__label" htmlFor="category">Category</label>
                                        <select className='inventory-app__scrolling' name='category' id="category">                                    
                                            <option value="Accessories" selected>Accessories</option>
                                            <option value="Apparel">Apparel</option>
                                            <option value="Gear">Gear</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Health">Health</option>
                                        </select>

                                </div>
                            </div> 
                        </section>

                        <hr className = "inventory-app__hr"></hr>

                        <section className = "inventory-app__content">
                            <h3 className="inventory-app__subheading">
                            Item Availability</h3>
                            <div className='inventory-app__presence'>
                                <div className='inventory-app__status'>
                                    <label className="inventory-app__label inventory-app__label--change" htmlFor="">Status</label>
                                </div>
                                <div className='inventory-app__stock'>
                                    <div className='inventory-app__stock--left'>
                                        <input type="radio" name="stock"  value="In Stock" onClick={handleStock}/>
                                        <label>In stock</label>
                                    </div>
                                    <div className='inventory-app__stock--right'>
                                        <input type="radio" name="stock" value="Out of Stock" onClick={handleStock} />
                                        <label>Out of stock</label>
                                    </div>
                                </div>
                            </div>
                            <div className="inventory-app__form-item">
                                    <label className={stock ? "inventory-app__label" : "empty"} htmlFor="quantity">Quantity</label>
                                    <input type="number" className={stock ? "inventory-app__input" : "empty"} name="quantity" id="quantity"/>
                                </div>
                                <div className="inventory-app__form-item">
                                        <label className="inventory-app__label" htmlFor="">Warehouse</label>
                                        <select className="inventory-app__scrolling" id="warehouse_id">
                                            {
                                                warehouses.map( (item) => {
                                                    return (
                                                        <option value={item.id} key = {item.id}>
                                                            {item.warehouse_name}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select>
                                </div>
                        </section>
                    </div>

                    <div className="inventory-app__btn-container">
                        <button className="inventory-app__btn inventory-app__cancel">Cancel</button>
                        <button className="inventory-app__btn inventory-app__add">+ Add Item</button>
                    </div>
                </div>
            </form>
        </div>

    )


}

export default InventoryFormPage;