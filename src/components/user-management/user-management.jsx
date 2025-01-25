import React from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";
import "../../styles/regular_components/inventory-management.css";
import { Row, Col } from "react-bootstrap";

const UserManagement = () => {
  return (
    <div>
      <div className="title">
        <h1>User Management</h1>
      </div>

      <div className="inventory-management-container">
        <section className="card-container">
          <Link to="/create-profile" className="action-card">
            <div className="card-content">
              <h3>Create Admin</h3>
              <p>Register a new admin user</p>
            </div>
          </Link>

          <Link to="/update-profile" className="action-card">
            <div className="card-content">
              <h3>Update Admin</h3>
              <p>Make changes to existing admin profile</p>
            </div>
          </Link>

          <Link to="/delete-profile" className="action-card">
            <div className="card-content">
              <h3>Delete Admin</h3>
              <p>Remove any existing admin</p>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default UserManagement;
