import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [updateAdminData, setUpdateAdminData] = useState(false);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const clearContext = () => {
    setAdmin(null);
    setToken("");
    setIsAuthenticated(false);
    setUpdateAdminData(false);
  };

  return (
    <AdminContext.Provider
      value={{
        admin,
        setAdmin,
        token,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        updateAdminData,
        setUpdateAdminData,
        clearContext, // Provide the clearContext method
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminProvider };
