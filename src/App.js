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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mycart" element={<Cart />} />
        <Route path="products">
          <Route path=":id" element={<DetailProduct />} />
        </Route>

        {/* Guest Route */}
        <Route element={<GuestRoute />} >
          <Route path="login" element={<Login />}></Route>
        </Route>

        {/* User Route */}
        <Route element={<UserRoute />} >
          <Route path="user-profile" element={<UserProfile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
