import './DeleteModal.scss'
import errorIcon from '../../Assets/Icons/close-24px.svg'

function DeleteModal(){

    return (
        <div>
            <button className="button__close"><img src={errorIcon}/></button>
            <div>
            <h2>Delete television inventory item?</h2>
            <p>Please confirm that you'd like to delete $television
                from the inventory list. You won't be able to undo this action.
            </p>
            </div>
            <div>
                <button className="button__cancel">Cancel</button>
                <button className="button__delete">Delete</button>
            </div>
        </div>
    )
}

export {DeleteModal}