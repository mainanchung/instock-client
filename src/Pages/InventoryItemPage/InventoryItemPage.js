import { NavLink } from 'react-router-dom';
import "../InventoryItemPage/InventoryItemPage.scss";
import backIcon from '../../Assets/Icons/arrow_back-24px.svg'
import editIcon from '../../Assets/Icons/edit-24px.svg'  

const InventoryItemPage = () => {

    return (
        <>
        <div className="inventory-item">
            <div className="inventory-item__title-container">
                <div className="inventory-item__icon-title">
                    <img src={backIcon} />
                    <h2>Television</h2>
                </div>
                <button className="inventory-item__edit-button"><img src={editIcon} /><p>Edit</p></button>
            </div>
        </div>   
            <div className="inventory-item__about">
                
                <div className='inventory-item__about--left'> 
                    <div className="inventory-item__description">
                        <h3>ITEM DESCRIPTION</h3>
                        <p>This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
                    </div>
                    <div className="inventory-item__category">
                        <h3>CATEGORY</h3>
                        <p>Electronics</p>
                    </div>
                </div>

                <div className='inventory-item__about--right'> 
                   <div className='inventory-item__about--top'>
                        <div className="inventory-item__status">
                            <h3>STATUS</h3>
                            <p>IN STOCK</p>
                            <p>OUT OF STOCK</p>
                        </div>

                        <div className="inventory-item__quantity">
                            <h3>QUANTITY</h3>
                            <p>500</p>
                        </div>
                    </div>

                    <div className='inventory-item__about--down'>
                        <h3>WAREHOUSE</h3>
                        <p>Manhattan</p>
                    </div>
                </div>
        </div>
        </>
    )
}

export default InventoryItemPage;