import './App.scss';
// import { EditWarehouse } from './components/EditWarehouse/EditWarehouse'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { WarehousePage } from './Pages/WarehousePage/WarehousePage'
import { DeleteModal } from './components/DeleteModal/DeleteModal';


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
          />
          <Route
            path = '/warehouses'
            element = {<WareHousesPage/>}

          /> */}
          <Route
            path= '/warehouse/:id'
            element = {<WarehousePage/>}
          />
        </Routes>
      </BrowserRouter>
      <DeleteModal />
      {/* <EditWarehouse />  */}

    </div>
  );
}

export default App;
