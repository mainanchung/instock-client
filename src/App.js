import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddWarehouse } from './components/AddWarehouse/AddWarehouse';
import { WarehousePage } from './Pages/WarehousePage/WarehousePage';
import WarehousesPage from './Pages/WarehousesPage/WarehousesPage';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import InventoriesPage  from './Pages/InventoriesPage/InventoriesPage';
import InventoryItemPage from './Pages/InventoryItemPage/InventoryItemPage';
import InventoryFormPage from './Pages/InventoryFormPage/InventoryFormPage';
import { EditInventoryItemPage } from './Pages/EditInventoryItemPage/EditInventoryItemPage';
import { EditWarehouse } from './components/EditWarehouse/EditWarehouse';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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
            path= '/inventory-form'
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
          <Route
            path = "/warehouse/:id/edit-inventory"
            element = {<EditInventoryItemPage/>}
          /> 
          <Route
            path= '/add-warehouse'
            element = {<AddWarehouse/>}
          />
          <Route
            path= '/warehouse/:id/edit-warehouse'
            element = {<EditWarehouse/>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <EditWarehouse />
      <AddWarehouse /> */}

    </div>
  );
}

export default App;
