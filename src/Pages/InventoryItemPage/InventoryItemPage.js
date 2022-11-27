import { NavLink } from 'react-router-dom';
import "../InventoryItemPage/InventoryItemPage.scss";
import backIcon from '../../Assets/Icons/arrow_back-24px.svg'
import editIcon from '../../Assets/Icons/edit-24px.svg'  

const InventoryItemPage = () => {
    return (
        <>
        <div className="inventory-item">
        <div className="inventory-item__container">
            <div className="inventory-item__title-container">
                <div className="inventory-item__icon-title">
                    <img src={backIcon} />
                    <h2>Television</h2>
                </div>
                <button className="inventory-item__edit-button"><img  className="inventory-item__edit-icon" src={editIcon}/><p  className="inventory-item__edit-text">Edit</p></button>
            </div>
        
            <div className="inventory-item__about">    
                <div className='inventory-item__about--left'> 
                    <div className="inventory-item__description">
                        <h3 className="inventory-item__subtitle">ITEM DESCRIPTION</h3>
                        <p className="inventory-item__text">This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
                    </div>
                    <div className="inventory-item__category">
                        <h3 className="inventory-item__subtitle">CATEGORY</h3>
                        <p className="inventory-item__text">Electronics</p>
                    </div>
                </div>

                <div className='inventory-item__about--right'> 
                   <div className='inventory-item__about--top'>
                        <div className="inventory-item__status">
                            <h3 className="inventory-item__subtitle">STATUS</h3>
                            <p className='inventory-item__status--valid'>IN STOCK</p>
                            {/* <p className='inventory-item__status--invalid'>OUT OF STOCK</p> */}
                        </div>

                        <div className="inventory-item__quantity">
                            <h3 className="inventory-item__subtitle">QUANTITY</h3>
                            <p className="inventory-item__text">500</p>
                        </div>
                    </div>

                    <div className='inventory-item__about--down'>
                        <h3 className="inventory-item__subtitle">WAREHOUSE</h3>
                        <p className="inventory-item__text">Manhattan</p>
                    </div>
                </div>
            </div>
        </div> 
        </div>  
        </>
    )
}

export default InventoryItemPage;