import './warehouse.scss'
import backIcon from '../../assets/Icons/arrow_back-24px.svg'
import editIcon from '../../assets/Icons/edit-24px.svg'

function Warehouse() {
    return (
        <div className="warehouse">
            <div className="warehouse__title-container">
                <div className="warehouse__icon-title">
                    <img src={backIcon} />
                    <h2>Washington</h2>
                </div>
                <button className="warehouse__edit-button"><img src={editIcon} /></button>
            </div>
            <div className="warehouse__about">
                <div className="warehouse__address">
                    <h3>WAREHOUSE ADDRESS:</h3>
                    <p>33 PEARL STREET SW, WASHINGTON, USA</p>
                </div>
                <div className="warehouse__contact-name">
                    <h3>CONTACT NAME:</h3>
                    <p>Graeme Lyon</p>
                    <p>Warehouse Manager</p>
                </div>
                <div className="warehouse__contact-information">
                    <h3>CONTACT INFORMATION:</h3>
                    <p>+1 (647)504-0911</p>
                    <p>glyon@instock.com</p>
                </div>
            </div>
        </div>
    )
}

export { Warehouse };