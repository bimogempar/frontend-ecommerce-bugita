import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import DetailProduct from './pages/DetailProduct';
import Admin from './pages/admin/Admin';
import Transactions from './pages/admin/Transactions';
import Add from './pages/admin/Add';
import ListUser from './pages/admin/ListUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycart" element={<Cart />} />
        <Route path="products">
          <Route path=":id" element={<DetailProduct />} />
        </Route>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/transactions" element={<Transactions/>} />
        <Route path="/add" element={<Add/>} />
        <Route path='/listuser' element={<ListUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
