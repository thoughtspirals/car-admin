import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/reusable_components/navbar";
import Dashboard from "./components/dashboard/dashboard";
import Footer from "./components/reusable_components/footer";
import Home from "./components/home";

//Admin
import AdminLogin from "./components/admin/admin-login.jsx";
import UpdateProfile from "./components/admin/update-profile.jsx";
import CreateProfile from "./components/admin/create-profile.jsx";
import DeleteProfile from "./components/admin/delete-profile.jsx";
import ForgotPassword from "./components/admin/forgot-password.jsx";

//inventory related imports
import InventoryManagement from "./components/inventory/inventory-management";
import CreateProduct from "./components/inventory/inventory-components/create-product.jsx";
import UpdateProduct from "./components/inventory/inventory-components/update-product.jsx";
import DeleteProduct from "./components/inventory/inventory-components/delete-product.jsx";

import { Routes, Route, Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/delete-profile" element={<DeleteProfile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* inventory related routes */}
          <Route
            path="/inventory-management"
            element={<InventoryManagement />}
          />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/update-product" element={<UpdateProduct />} />
          <Route path="/delete-product" element={<DeleteProduct />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
