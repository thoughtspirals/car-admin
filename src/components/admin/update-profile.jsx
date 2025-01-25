import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/global.css";
import "../../styles/admin-components/login.css";
import { AdminContext } from "../../context/admin-context";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { adminDetails, setAdminDetails } = useContext(AdminContext);

  const defaultAdminDetails = {
    name: "",
    username: "",
    email: "",
    phone: "",
    title: "",
  };

  // Update the state if adminDetails is undefined or null
  const [adminDetailsState, setAdminDetailsState] = useState(
    adminDetails || defaultAdminDetails
  );

  // Fetch admin details when the component mounts
  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const res = await axios.get("/admin/api/v1/admin"); // Adjust the endpoint as needed
        setAdminDetails(res.data); // Assuming the response contains admin details
      } catch (error) {
        setError(
          error.response?.data?.message || "Failed to fetch admin details"
        );
      }
    };

    fetchAdminDetails();
  }, [setAdminDetails]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await axios.put("admin/api/v1/update-admin", {
        ...adminDetails,
      });
      setSuccess("Profile Updated Successfully");
      alert("Profile Updated Successfully");
      navigate("/user-management");
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field) => (e) => {
    setAdminDetails((prevDetails) => ({
      ...prevDetails,
      [field]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="title">
        <h1>Admin Profile Update</h1>
      </div>

      <div className="AdminBody container">
        <div className="admin-card card">
          <div className="card-body">
            <form onSubmit={handleUpdate}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={adminDetails.name}
                  onChange={handleChange("name")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  value={adminDetails.username}
                  onChange={handleChange("username")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={adminDetails.email}
                  onChange={handleChange("email")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={adminDetails.phone}
                  onChange={handleChange("phone")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  value={adminDetails.title}
                  onChange={handleChange("title")}
                />
              </div>

              <div className="loginSubmit d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save Updates"}
                </button>
              </div>

              {error && <div className="alert alert-danger mt-3">{error}</div>}
              {success && (
                <div className="alert alert-success mt-3">{success}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
