import React from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";
import "../../styles/admin-components/login.css";

const CreateProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Profile Updates");
  };

  return (
    <div>
      <div className="title">
        <h1>Create New Admin</h1>
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
                <label htmlFor="password">Name</label>
                <input
                  type="Name"
                  id="Name"
                  name="Name"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Title</label>
                <input
                  type="Title"
                  id="Title"
                  name="Title"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Email</label>
                <input
                  type="Email"
                  id="Email"
                  name="Email"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Phone</label>
                <input
                  type="Phone"
                  id="Phone"
                  name="Phone"
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
                  Create Profile
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
