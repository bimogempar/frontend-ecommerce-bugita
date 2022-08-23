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
import AdminTransactions from './pages/admin/AdminTransactions';
import Add from './pages/admin/Add';
import AdminUsers from './pages/admin/AdminUsers';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />

        <Route path="products">
          <Route index element={<AllProducts />} />
          <Route path=":id" element={<DetailProduct />} />
        </Route>

        <Route path="category">
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
        <Route element={<AdminRoute />} >
          <Route path="/admin" >
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="transactions" element={<AdminTransactions />} />
            <Route path='add' element={<Add />} />
            <Route path='users' element={<AdminUsers />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
