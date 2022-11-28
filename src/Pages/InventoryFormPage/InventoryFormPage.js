import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import {useState} from 'react';
// import { useEffect} from 'react';
import "./InventoryFormPage.scss";  
import ArrowBack from '../../Assets/Icons/arrow_back-24px.svg';
import axios from 'axios';

const InventoryFormPage = () => {

    const [form, setForm] = useState([]);
    const item_name = useRef(); 
    const description = useRef();
    const status = useRef();
    const quantity = useRef();
    const warehouse = useRef();

    //useParams

    const navigate = useNavigate();

    const createInventoryItem = (e) => {
        e.preventDefault();
        // console.log(itemName)
        // console.log(description.current.value)
        // console.log(status.current.value)
        // console.log(quantity.current.value)
        // console.log(warehouse.current.value)
        let newInventoryItem = {
            //set uuid
            // warehouse_id: uuid(),
            item_name: item_name.current.value,
            description: description.current.value,
            status: status.current.value,
            quantity: quantity.current.value,
            warehouse: warehouse.current.value
        }
        console.log(newInventoryItem); 
        axios.post('http://localhost:8080/inventory', newInventoryItem).then ((res) =>{
            console.log(res.data)
            //set it to what it is, but adding a new
            setForm([...form, res.data]);
            }).catch((error) => {
            console.log(error);
        })

        item_name.current.value = '';
        description.current.value = '';  
        status.current.value = '';
        quantity.current.value = '';
        warehouse.current.value = ''; 

    }

    // useEffect(() => {
    //     createInventoryItem();
    //  }, [id])
    



    return (

        <div className = "inventory-app">
            <form onSubmit={ (createInventoryItem)} className = "inventory-app__form">
                <div className = 'inventory-app__heading-box'>
                    <img className="inventory-app__heading-img" src={ArrowBack} 
                    alt="arrow-back" />
                    <h1 className="inventory-app__header">
                    Add New Inventory</h1>
                </div> 
                <div className ="inventory-app__content-container">
                    <section className="inventory-app__content">
                        <h3 className="inventory-app__subheading">
                        Item Details</h3>
                        <div className = "inventory-app__form-list">
                            <div className="inventory-app__form-item">
                                {/*  */}
                                <label className="inventory-app__label" htmlFor="">Item Name</label>
                                <input className="inventory-app__input" ref={item_name}  type="text" placeholder="Item Name"/>
                            </div>
                            <div className="inventory-app__form-item">
                                <label className="inventory-app__label" htmlFor="">Description</label>
                                <input className="inventory-app__input" ref={description} type="text" 
                                placeholder="Please enter a brief item description..."/>
                            </div>
                            <div className="inventory-app__form-item">
                                    <label className="inventory-app__label" htmlFor="">Category</label>
                                    <select name="category">
                                        <option value="Accessories" selected>Accessories</option>
                                        <option value="Apparel">Apparel</option>
                                        <option value="Gear">Gear</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Health">Health</option>
                                    </select>
                            </div>
                        </div> 
                    </section>

                    <section className = "inventory-app__content">
                        <h3 className="inventory-app__subheading">
                        Item Availability</h3>
                        <div className='inventory-app__presence'>
                            <div className='inventory-app__status'>
                                <label className="inventory-app__label inventory-app__label--change" htmlFor="">Status</label>
                            </div>
                            <div className='inventory-app__stock'>
                                <div className='inventory-app__stock--left'>
                                    <input type="radio" name="stock" ref={status} value="In Stock" checked/>In stock
                                </div>
                                <div className='inventory-app__stock--right'>
                                    <input type="radio" name="stock" ref={status} value="Out of stock" />Out of stock
                                </div>
                            </div>
                        </div>
                        <div className="inventory-app__form-item">
                                <label className="inventory-app__label" htmlFor="">Quantity</label>
                                <input className="inventory-app__input" ref={quantity} type="text" placeholder="0"/>
                            </div>
                        <div className=''></div>
                            <div className="inventory-app__form-item">
                                    <label className="inventory-app__label" htmlFor="">Warehouse</label>
                                    <select name="category" ref={warehouse}>
                                        <option value="Manhattan" selected>Manhattan</option>
                                        <option value="Washington">Washington</option>
                                        <option value="Jersey">Jersey</option>
                                        <option value="San Fran">San Fran</option>
                                        <option value="Santa Monica">Santa Monica</option>
                                        <option value="Seattle">Seattle</option>
                                        <option value="Miami">Miami</option>
                                    </select>
                            </div>

                        

                    </section>

                    <div className="add-warehouse__btn-container">
                        <button className="add-warehouse__btn add-warehouse__cancel">Cancel</button>
                        <button className="add-warehouse__btn add-warehouse__add">+ Add Item</button>
                    </div>
                </div>
            </form>
        </div>

    )


}

export default InventoryFormPage;