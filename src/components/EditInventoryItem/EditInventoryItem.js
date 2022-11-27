import backIcon from '../../Assets/Icons/arrow_back-24px.svg'
import './EditInventoryItem.scss';
import { useRef } from 'react';

function EditInventoryItem() {

    const formRef = useRef()

    const editVideo = (e) => {
        e.preventDefault()
        console.log(formRef.current.title.value)
    }
    return (
        <div className="edit">
            <div className="edit__header-container">
                <button className="edit__back-button">
                    <img className="edit__back-image" src={backIcon} />
                </button>
                <h2 className="edit__header">Edit Inventory Item</h2>
            </div>
            <form className="form" onSubmit={editVideo} ref={formRef}>
                <div className="form__details-container">
                    <h3>Item Details</h3>
                    <label className="form__label" htmlFor="item-name">Item Name</label>
                    <input
                        className="form__text-input"
                        id="title"
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
                        <option value="Electronics">Electronics</option>
                        <option value="Food">Food</option>
                        <option value="Accessory">Accessory</option>
                    </select>
                </div>
                <div className="form__availability-container">
                    <h2>Item Availability</h2>
                    <label className="form__label" htmlFor="status">Status</label>
                    <div className="form__radio-container">
                        <div>
                            <input type="radio" name="status" value="In stock" />
                            <label>In stock</label>
                        </div>
                        <div>
                            <input type="radio" id="oos" name="status" value="Out of stock" />
                            <label>Out of stock</label>
                        </div>
                    </div>
                    <label className="form__label" htmlFor="warehouse">Warehouse</label>
                    <select className="form__select" name="warehouse" id="warehouse">
                        <option value="">newyork</option>
                        <option value="">boston</option>
                        <option value="">miami</option>
                    </select>
                </div>
                <div className="form__buttons-container">
                    <button className="form__buttons-cancel" type="click">Cancel</button>
                    <button className="form__buttons-save">Save</button>
                </div>
            </form>
        </div>
    )
}

export { EditInventoryItem }