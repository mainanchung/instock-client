import './DeleteModal.scss'
import errorIcon from '../../Assets/Icons/close-24px.svg'
import axios from 'axios'

function DeleteModal({setDeleteModal, deleteWarehouseId}) {

    const deleteHandler = () => {
        console.log(deleteWarehouseId)
        axios.delete(`http://localhost:8080/warehouse/${deleteWarehouseId}`)
        .then((response) =>{
            console.log(response.data)
            setDeleteModal(false)
        })
        .catch((error) => {
            console.log(error)
        })

    }

    const handleCancel = (e) => {
        e.preventDefault()
        setDeleteModal(false)
    }

    return (
        <div className="delete">
            <div className="delete-container">
                <button type="click" className="button__close" onClick={handleCancel} ><img src={errorIcon} alt="error icon" /></button>
                <div className="delete__header-container">
                    <h2 className="delete__header">Delete television inventory item?</h2>
                    <p className="delete__description">Please confirm that you'd like to delete $television
                        from the inventory list. You won't be able to undo this action.
                    </p>
                    <div className="button__container">
                        <button type="click" onClick={handleCancel} className="button__cancel">Cancel</button>
                        <button type="submit" onClick={deleteHandler} className="button__delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { DeleteModal }