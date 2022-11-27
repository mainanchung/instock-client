import { NavLink, useParams } from 'react-router-dom';
import "../InventoryItemPage/InventoryItemPage.scss";
import backIcon from '../../Assets/Icons/arrow_back-24px.svg'
import editIcon from '../../Assets/Icons/edit-24px.svg'  
import { useEffect, useState } from 'react';
import axios from 'axios';
import { EditInventoryItem } from '../../components/EditInventoryItem/EditInventoryItem';

const InventoryItemPage = () => {

    const [singleItem, setSingleItem] = useState("");
    const [warehouseName, setWarehouseName] = useState("")
    const itemId = useParams().id;
    const [editItem, setEditItem] = useState(false)

    useEffect(() => {
        if(itemId){
        axios.get(`http://localhost:8080/inventory/${itemId}`).then((response) => {
                setSingleItem(response.data)
                axios.get(`http://localhost:8080/warehouse/${response.data[0].warehouse_id}`).then((response)=>{
                    setWarehouseName(response.data[0].warehouse_name)
                }).catch((error)=>{
                    console.log(error)
                })   
            }).catch((error)=>{
                console.log(error)
        })}
    },[singleItem]) 
    
    const handleEdit = (e) => {
        e.preventDefault();
        setEditItem(true)
    }
    
    if(!editItem){
    return (
        <>
        {singleItem?
        <>
        <div className="inventory-item">
        <div className="inventory-item__container">
            <div className="inventory-item__title-container">
                <div className="inventory-item__icon-title">
                <NavLink to={"/inventories"}><img src={backIcon} /></NavLink>
                    <h2>{singleItem[0].item_name}</h2>
                </div>
                <button onClick={handleEdit} className="inventory-item__edit-button"><img  className="inventory-item__edit-icon" src={editIcon}/><p  className="inventory-item__edit-text">Edit</p></button>
            </div>
        
            <div className="inventory-item__about">    
                <div className='inventory-item__about--left'> 
                    <div className="inventory-item__description">
                        <h3 className="inventory-item__subtitle">ITEM DESCRIPTION</h3>
                        <p className="inventory-item__text">{singleItem[0].description}</p>
                    </div>
                    <div className="inventory-item__category">
                        <h3 className="inventory-item__subtitle">CATEGORY</h3>
                        <p className="inventory-item__text">{singleItem[0].category}</p>
                    </div>
                </div>

                <div className='inventory-item__about--right'> 
                   <div className='inventory-item__about--top'>
                        <div className="inventory-item__status">
                            <h3 className="inventory-item__subtitle">STATUS</h3>
                            {singleItem[0].quantity !== 0?<>
                        <p className='inventory-item__status--valid'>IN STOCK</p>
                        </>: <> <p className='inventory-item__status--invalid'>OUT OF STOCK</p></>}
                        </div>

                        <div className="inventory-item__quantity">
                            <h3 className="inventory-item__subtitle">QUANTITY</h3>
                            <p className="inventory-item__text">{singleItem[0].quantity}</p>
                        </div>
                    </div>

                    <div className='inventory-item__about--down'>
                        <h3 className="inventory-item__subtitle">WAREHOUSE</h3>
                        <p className="inventory-item__text">{warehouseName}</p>
                    </div>
                </div>
            </div>
        </div> 
        </div>  
        </> : ""}
        </>
    )}
    if(editItem){
        return(
            <>
            <EditInventoryItem setEditItem={setEditItem} singleItem={singleItem}/>
            </>
        )
    }
}

export default InventoryItemPage;