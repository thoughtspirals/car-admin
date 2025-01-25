import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import redux
import { login } from "../../redux/actions/authActions"; // Import login action
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize the hook here inside the component

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message

    // Dispatch the login action with username and password
    dispatch(login({ username, password }))
      .then((res) => {
        console.log("Login Response:", res); // Log the response
        if (res.success) {
          setErrorMessage(""); // Clear any previous error
          alert("Login successful!"); // Show success alert
          navigate("/dashboard"); // Navigate to the dashboard after successful login
        } else {
          setErrorMessage(res.message); // Set error message
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setErrorMessage("An error occurred while logging in."); // Set generic error message
      });
  };

  return (
    <div>
      <div className="title">
        <h1>Admin Login</h1>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}{" "}
      {/* Display error message */}
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
                <Link to="/forgotPassword">Forgot password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
