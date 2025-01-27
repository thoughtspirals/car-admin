import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/global.css";
import "../../styles/admin-components/login.css";
import { AdminContext } from "../../context/admin-context";

const DeleteProfile = () => {
  const navigate = useNavigate();
  const { adminDetails, setAdminDetails } = useContext(AdminContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.delete(
        "/admin/api/v1/delete-admin", // Backend endpoint
        {
          data: { ...adminDetails }, // Axios `delete` doesn't send body directly
          withCredentials: true, // Send cookies with the request
        }
      );

      setSuccess(response.data.message); // Display success message
      setAdminDetails({ employeeId: "", password: "" }); // Clear form fields

      setTimeout(() => {
        navigate("/user-management"); // Redirect after successful deletion
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="title">
        <h1>Delete Profile</h1>
      </div>

      <div className="AdminBody container">
        <div className="admin-card card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <div className="form-group">
                <label htmlFor="employeeId">Employee ID</label>
                <input
                  type="text"
                  id="employeeId"
                  name="employeeId"
                  className="form-control"
                  value={adminDetails.employeeId || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={adminDetails.password || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="loginSubmit d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Deleting..." : "Delete Profile"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProfile;
