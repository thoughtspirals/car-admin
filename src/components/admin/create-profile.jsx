import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/global.css";
import "../../styles/admin-components/login.css";
import axios from "axios";
import { AdminContext } from "../../context/admin-context";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { adminDetails, updateAdminDetails } = useContext(AdminContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("admin/api/v1/create-admin", {
        ...adminDetails, // Spread adminDetails to send all fields
      });

      setSuccess("Profile Created Successfully");
      alert("Profile Created Successfully");
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="title">
        <h1>Create New Admin</h1>
      </div>

      <div className="AdminBody container">
        <div className="admin-card card">
          <div className="card-body">
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleSubmit}>
              {[
                "username",
                "name",
                "title",
                "email",
                "phone",
                "password",
                "confirmPassword",
              ].map((field) => (
                <div className="form-group" key={field}>
                  <label htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={
                      field === "password" || field === "confirmPassword"
                        ? "password"
                        : "text"
                    }
                    id={field}
                    name={field}
                    className="form-control"
                    value={adminDetails[field]}
                    onChange={(e) => updateAdminDetails(field, e.target.value)}
                  />
                </div>
              ))}

              <div className="loginSubmit d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Profile"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
