import React, { createContext, useState } from "react";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState("");
  const [updateAdminData, setUpdateAdminData] = useState(false);

  // Consolidate all admin-related details into a single object
  const [adminDetails, setAdminDetails] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    title: "",
  });

  // Clear the context
  const clearContext = () => {
    setAdmin(null);
    setToken("");
    setUpdateAdminData(false);
    setAdminDetails({
      name: "",
      username: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      title: "",
    });
  };

  // Dynamic handler for updating admin details
  const updateAdminDetails = (field, value) => {
    setAdminDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  return (
    <AdminContext.Provider
      value={{
        admin,
        setAdmin,
        adminDetails,
        setAdminDetails,
        updateAdminDetails,
        token,
        setToken,
        updateAdminData,
        setUpdateAdminData,
        clearContext,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminProvider };
