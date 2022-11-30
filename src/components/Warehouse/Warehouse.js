import './warehouse.scss'
import backIcon from '../../Assets/Icons/arrow_back-24px.svg'
import whiteEditIcon from '../../Assets/Icons/white-edit-24px.svg'
import { NavLink } from 'react-router-dom';

function Warehouse({ warehouse }) {
    const { warehouse_name, address, contact_name, contact_position,
        contact_phone, contact_email, city, country } = warehouse[0];
    return (
        <div>
            <div className="warehouse">
                <div className="warehouse__title-container">
                    <div className="warehouse__icon-title">
                        <NavLink to='/' className="warehouse__back-button">
                        <img src={backIcon} alt="back button"/>
                        </NavLink>
                        <h2 className="warehouse__name">{warehouse_name}</h2>
                    </div>
                    <NavLink to={`/warehouse/${warehouse[0].id}/edit-warehouse`} className="warehouse__edit-button">
                        <img src={whiteEditIcon} className="warehouse__edit-image" alt="edit"/>
                        <p className="warehouse__button-text">Edit</p>
                    </NavLink>
                </div>
                <div className="warehouse__about">
                    <div className="warehouse__address">
                        <h3 className="warehouse__label">WAREHOUSE ADDRESS:</h3>
                        <div className="warehouse__location-container">
                            <p className="warehouse__description">{address}, </p>
                            <p className="warehouse__description">{city}, {country}</p>
                        </div>
                    </div>
                    <div className="warehouse__contact-right">
                        <div className="warehouse__contact-name">
                            <h3 className="warehouse__label">CONTACT NAME:</h3>
                            <p className="warehouse__description">{contact_name}</p>
                            <p className="warehouse__description">{contact_position}</p>
                        </div>
                        <div className="warehouse__contact-information">
                            <h3 className="warehouse__label">CONTACT INFORMATION:</h3>
                            <p className="warehouse__description">{contact_phone}</p>
                            <p className="warehouse__description">{contact_email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Warehouse };