import { EditInventoryItem } from '../../components/EditInventoryItem/EditInventoryItem'
import { useParams } from 'react-router-dom'

function EditInventoryItemPage (props) {

    const { id } = useParams ()
    return (
        <>
        <EditInventoryItem />
        </>
    )
}

export { EditInventoryItemPage }