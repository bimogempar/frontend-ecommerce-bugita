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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
