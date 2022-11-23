import './App.scss';
import { EditWarehouse } from './components/EditWarehouse/EditWarehouse'
import { AddWarehouse } from './components/AddWarehouse/AddWarehouse'
// import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route
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
          />
          <Route
            path = '/warehouses'
            element = {<WareHousesPage/>}
          />
          <Route
            path= '/warehouse/:id'
            element = {<WareHousePage/>}
          />
        </Routes>
      </BrowserRouter> */}
      <EditWarehouse />
      <AddWarehouse />
    </div>
  );
}

export default App;
