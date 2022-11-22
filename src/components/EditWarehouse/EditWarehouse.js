import './EditWarehouse.scss'
import ArrowBack from '../../Assets/Icons/arrow_back-24px.svg'

const EditWarehouse = () => {
    return (
        <div className="edit-warehouse">
            <form className="edit-warehouse__form">
                <div className="edit-warehouse__container">
                    <img className="edit-warehouse__img" src={ArrowBack} alt="arrow-back" />
                    <h1 className="edit-warehouse__heading">Edit Warehouse</h1>
                </div>
                <div className="edit-warehouse__content-container">
                    <hr className="edit-warehouse__hr" />
                    <div className="edit-warehouse__content">
                        <h3 className="edit-warehouse__subheading">Warehouse Details</h3>
                        <div className="edit-warehouse__item">
                            <label className="edit-warehouse__label" htmlFor="">Warehouse Name</label>
                            <input className="edit-warehouse__input" type="text" placeholder="ex. Washington"/>
                            <label className="edit-warehouse__label" htmlFor="">Street Address</label>
                            <input className="edit-warehouse__input" type="text" placeholder="ex. 33 Pearl Street SW"/>
                            <label className="edit-warehouse__label" htmlFor="">City</label>
                            <input className="edit-warehouse__input" type="text" placeholder="ex. Washington"/>
                            <label className="edit-warehouse__label" htmlFor="">Country</label>
                            <input className="edit-warehouse__input" type="text" placeholder="ex. USA"/>
                        </div>
                    </div>
                    <hr className="edit-warehouse__hr"/>
                    <div className="edit-warehouse__content">
                        <h3 className="edit-warehouse__subheading">Contact Details</h3>
                        <div className="edit-warehouse__item">
                            <label className="edit-warehouse__label" htmlFor="">Contact Name</label>
                            <input className="edit-warehouse__input" type="text" />
                            <label className="edit-warehouse__label" htmlFor="">Position</label>
                            <input className="edit-warehouse__input" type="text" />
                            <label className="edit-warehouse__label" htmlFor="">Phone Number</label>
                            <input className="edit-warehouse__input" type="text" />
                            <label className="edit-warehouse__label" htmlFor="">Email</label>
                            <input className="edit-warehouse__input" type="text" />
                        </div>
                    </div>
                    <div className="edit-warehouse__btn-container">
                        <button className="edit-warehouse__btn edit-warehouse__cancel">Cancel</button>
                        <button className="edit-warehouse__btn edit-warehouse__save">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export { EditWarehouse }