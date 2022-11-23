import { NavLink } from 'react-router-dom';
import "./WarehousePage.scss";
import { Warehouse } from '../../components/Warehouse/Warehouse'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const WarehousePage = () => {
    const { id } = useParams()
    const [warehouse, setWarehouse] = useState('')
    const [isloaded, setIsLoaded] = useState(false)
    const getWarehouse = () => {
        axios.get(`http://localhost:8080/warehouse/${id}`)
            .then((response) => {
                setWarehouse(response.data)
                setIsLoaded(true)
            })
            .catch((error) => {
                console.log(error)
            }
            )
    }

    useEffect(() => {
        getWarehouse()

    }, [id])

    if (isloaded) {
        return (
            <div className="warehousePage">
            <Warehouse warehouse={warehouse}/>
            </div>
        )
    }
}
export { WarehousePage }