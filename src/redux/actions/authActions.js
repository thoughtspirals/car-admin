// redux/actions/authActions.js
import axios from "axios";

export const login = (adminData) => ({
  type: "LOGIN",
  payload: adminData,
});

export const logout = () => ({
  type: "LOGOUT",
});

// Use Axios for the fetchCurrentAdmin action
export const fetchCurrentAdmin = () => {
  return (dispatch) => {
    axios
      .get("admin/api/v1/admin")
      .then((response) => {
        dispatch({
          type: "SET_CURRENT_ADMIN",
          payload: response.data, // Axios already parses the JSON for you
        });
      })
      .catch((error) => {
        console.error("Error fetching current admin:", error);
        // You could dispatch an error action here if needed
      });
  };
};
