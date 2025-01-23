import React from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";
import "../../styles/admin-components/login.css";

const AdminLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., save or update the product)
    console.log("Logged in");
  };

  return (
    <div>
      <div className="title">
        <h1>Admin Login</h1>
      </div>

      <div className="AdminBody container">
        <div className="admin-card card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                />
              </div>

              <div className="loginSubmit d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="forgotPassword my-2">
                <Link to="/forgotPassword">forgot password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
