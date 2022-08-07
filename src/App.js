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
import { UserRoute, GuestRoute } from './components/routes/AuthRoute';
import Protected from './components/routes/Protected';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycart" element={<Cart />} />
        <Route path="/products">
          <Route path=":id" element={<DetailProduct />} />
        </Route>

        {/* Guest Route */}
        <Route path="/" element={<GuestRoute />} >
          <Route path="/login" element={<Login />} />
        </Route>

        {/* User Route */}
        <Route path="/" element={<UserRoute />} >
          <Route path="/protected" element={<Protected />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
