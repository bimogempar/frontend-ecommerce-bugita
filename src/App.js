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
import { UserRoute, GuestRoute } from './components/routes/AuthRoute';
import Notification from './pages/Notification';
import AllProducts from './pages/AllProducts';
import Tes from './pages/Tes';
import Category from './pages/Category';

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

        {/* Guest Route */}
        <Route element={<GuestRoute />} >
          <Route path="/login" element={<Login />}></Route>
        </Route>

        {/* User Route */}
        <Route element={<UserRoute />} >
          <Route path="/userprofile" element={<UserProfile />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
        </Route>

        <Route path="/tes" element={<Tes />} />
        <Route path="/category">
          <Route path="/category" element={<Category />} />
          <Route path=":category" element={<Category />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
