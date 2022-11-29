import './DeleteModal.scss'
import errorIcon from '../../Assets/Icons/close-24px.svg'
import axios from 'axios'

function DeleteModal({setDeleteModal, deleteUrl, clickedName, database, inventories, setInventories, deleteInventoryId}) {

    const deleteHandler = () => {
        axios.delete(deleteUrl)
        .then((response) =>{
            console.log(response.data)
            setDeleteModal(false)
            let invClone = [...inventories]
            console.log(deleteInventoryId)
            console.log(invClone[0])
            let filteredInv = invClone.filter(matches => deleteInventoryId !== matches.id)
            setInventories(filteredInv)
            console.log(filteredInv)
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
                    <h2 className="delete__header">{`Delete ${clickedName} ${database}`}</h2>
                    <p className="delete__description">Please confirm that you'd like to delete {clickedName} from the {database} list. You won't be able to undo this action.
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