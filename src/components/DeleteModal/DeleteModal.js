import './DeleteModal.scss'
import errorIcon from '../../Assets/Icons/close-24px.svg'

function DeleteModal() {

    const deleteHandler = (e) => {
        e.preventDefault()
        console.log("y u delete me 4")
    }

    return (
        <div className="delete">
            <div className="delete-container">
                <button className="button__close"><img src={errorIcon} alt="error icon" /></button>
                <div className="delete__header-container">
                    <h2 className="delete__header">Delete television inventory item?</h2>
                    <p className="delete__description">Please confirm that you'd like to delete $television
                        from the inventory list. You won't be able to undo this action.
                    </p>
                    <div className="button__container">
                        <button className="button__cancel">Cancel</button>
                        <button onSubmit={deleteHandler} className="button__delete">Delete</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export { DeleteModal }