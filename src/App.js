import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditWarehouse } from './components/EditWarehouse/EditWarehouse';
import { AddWarehouse } from './components/AddWarehouse/AddWarehouse';
import { WarehousePage } from './Pages/WarehousePage/WarehousePage';
import WarehousesPage from './Pages/WarehousesPage/WarehousesPage';
import InventoriesPage  from './Pages/InventoriesPage/InventoriesPage';
import InventoryItemPage from './Pages/InventoryItemPage/InventoryItemPage';
import InventoryFormPage from './Pages/InventoryFormPage/InventoryFormPage';
import { DeleteModal } from './components/DeleteModal/DeleteModal';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
         
          <Route
            path = '/inventories'
            element = {<InventoriesPage/>}
          />
          <Route
            path = '/inventory/:id'
            element = {<InventoryItemPage/>}
          />
          <Route 
            path= '/InventoryFormPage'
            element = {<InventoryFormPage />}
          />
          <Route
            path = '/warehouses'
            element = {<WarehousesPage/>}
          /> 
          <Route
            path= '/warehouse/:id'
            element = {<WarehousePage/>}
          /> 
        </Routes>
      </BrowserRouter>
      {/* <DeleteModal />
      <EditWarehouse /> */}
      <AddWarehouse />
    </div>
  );
}

export default App;
