import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/reusable_components/navbar";
import Dashboard from "./components/dashboard/dashboard";
import Footer from "./components/reusable_components/footer";
import Home from "./components/home";

// Admin components
import AdminLogin from "./components/admin/admin-login.jsx";
import UpdateProfile from "./components/admin/update-profile.jsx";
import CreateProfile from "./components/admin/create-profile.jsx";
import DeleteProfile from "./components/admin/delete-profile.jsx";
import ForgotPassword from "./components/admin/forgot-password.jsx";
// import UserManagement from "./components/admin/user-management.jsx";

// Inventory-related components
import InventoryManagement from "./components/inventory/inventory-management";
import CreateProduct from "./components/inventory/inventory-components/create-product.jsx";
import UpdateProduct from "./components/inventory/inventory-components/update-product.jsx";
import DeleteProduct from "./components/inventory/inventory-components/delete-product.jsx";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentAdmin } from "./redux/actions/authActions.js";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Fetch current admin details on app load
  useEffect(() => {
    dispatch(fetchCurrentAdmin());
  }, [dispatch]);

  console.log("isAuthenticated", isAuthenticated);

  // Protected Route Component
  const ProtectedRoute = ({ element: Component }) => {
    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
  };

  return (
    <>
      <Navbar />
      <div className="app-content">
        <Routes>
          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute element={Home} />} />
          {/* update for UserManagement later */}
          <Route path="/" element={<ProtectedRoute element={Home} />} />
          <Route
            path="/update-profile"
            element={<ProtectedRoute element={UpdateProfile} />}
          />
          <Route
            path="/create-profile"
            element={<ProtectedRoute element={CreateProfile} />}
          />
          <Route
            path="/delete-profile"
            element={<ProtectedRoute element={DeleteProfile} />}
          />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={Dashboard} />}
          />
          {/* Inventory-related Protected Routes */}
          <Route
            path="/inventory-management"
            element={<ProtectedRoute element={InventoryManagement} />}
          />
          <Route
            path="/create-product"
            element={<ProtectedRoute element={CreateProduct} />}
          />
          <Route
            path="/update-product"
            element={<ProtectedRoute element={UpdateProduct} />}
          />
          <Route
            path="/delete-product"
            element={<ProtectedRoute element={DeleteProduct} />}
          />
        </Routes>
      </div>

      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
