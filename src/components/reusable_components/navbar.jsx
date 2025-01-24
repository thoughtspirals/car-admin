import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo/carworkslogo.png";
import "../../styles/reusable_components/navbar.css"; // Updated styles for sidebar
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-logo">
          {/* Logo */}
          <Link to="/" className="sidebar-brand">
            <img src={logo} alt="CarWorks Logo" className="sidebar-logo-img" />
          </Link>
        </div>

        {/* Sidebar links */}
        <ul className="sidebar-links">
          {isAuthenticated ? (
            <>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/user-management">
                  User Management
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/inventory-management">
                  Inventory Management
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="#">
                  Service Request
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="#">
                  Billing
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="#">
                  Analytics
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
