import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/global.css";
import "../../styles/admin-components/login.css";
import { useDispatch } from "react-redux"; // Import redux
import { login } from "../../redux/actions/authActions"; // Import login action
import axios from "axios"; // Axios import

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/admin/api/v1/admin-login",
        { username, password },
        { withCredentials: true }
      );
      dispatch(login(response.data));

      console.log("Response data:", response.data);

      if (response.data.success) {
        const adminData = response.data.admin; // Assuming you get admin data in the response
        dispatch(login(adminData)); // Dispatch the login action
        navigate("/admin/dashboard"); // Redirect to the admin dashboard
      } else {
        console.log("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
