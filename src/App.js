import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditWarehouse } from './components/EditWarehouse/EditWarehouse'
import { AddWarehouse } from './components/AddWarehouse/AddWarehouse'
import { WarehousePage } from './Pages/WarehousePage/WarehousePage'
import WarehousesPage from './Pages/WarehousesPage/WarehousesPage';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          {/* <Route

            path = '/inventory'
            element = {<InventoryPage/>}
          />
          <Route
            path = '/inventories'
            element = {<InventoriesPage/>}
          />
          <Route
            path = '/inventory/:id'
            element = {<InventoryItemPage/>}
          /> */}
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
      <EditWarehouse />
      <AddWarehouse />
    </div>
  );
}

export default App;
