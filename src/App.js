import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditWarehouse } from './components/EditWarehouse/EditWarehouse'
import { AddWarehouse } from './components/AddWarehouse/AddWarehouse'
import { WarehousePage } from './Pages/WarehousePage/WarehousePage'
import InventoriesPage  from './Pages/InventoriesPage/InventoriesPage';
import InventoryItemPage from './Pages/InventoryItemPage/InventoryItemPage';


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
          {/* <Route
            path = '/warehouses'
            element = {<WareHousesPage/>}

          /> */}
          <Route
            path= '/warehouse/:id'
            element = {<WarehousePage/>}
          /> 
        </Routes>
      </BrowserRouter>
      <EditWarehouse />
      <AddWarehouse />
    </div>
  );
}

export default App;
