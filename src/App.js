import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import DetailProduct from './pages/DetailProduct';
import Login from './pages/auth/Login';
import UserProfile from './pages/UserProfile';
import { UserRoute, GuestRoute, AdminRoute } from './components/routes/AuthRoute';
import Notification from './pages/Notification';
import AllProducts from './pages/AllProducts';
import Category from './pages/Category';
import Transactions from './pages/admin/Transactions';
import Add from './pages/admin/Add';
import ListUser from './pages/admin/ListUser';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products">
          <Route path="/products" element={<AllProducts />} />
          <Route path=":id" element={<DetailProduct />} />
        </Route>

        <Route path="/category">
          <Route path=":idCategory" element={<Category />} />
        </Route>

        {/* Guest Route */}
        <Route element={<GuestRoute />} >
          <Route path="/login" element={<Login />}></Route>
        </Route>

        {/* User Route */}
        <Route exact element={<UserRoute />} >
          <Route path="/userprofile" element={<UserProfile />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
        </Route>

        {/* Admin Route */}
        <Route exact element={<AdminRoute />} >
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path='/add' element={<Add />} />
          <Route path='/listuser' element={<ListUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
