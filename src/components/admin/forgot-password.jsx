import React from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";
import "../../styles/admin-components/login.css";

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Profile Updates");
  };

  return (
    <div>
      <div className="title">
        <h1>Forgot Password</h1>
      </div>

      <div className="AdminBody container">
        <div className="admin-card card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Employee Id</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Username</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Confirm New Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                />
              </div>

              <div className="loginSubmit d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
