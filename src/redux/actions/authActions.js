import axios from "axios";
import Cookies from "js-cookie"; // Make sure to install js-cookie

export const login = (adminData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/admin/api/v1/admin-login", adminData, {
        withCredentials: true,
      });
      console.log("Server Response:", res); // Log the entire response

      if (res.data.admin) {
        // Store token in cookies
        const token = res.data.token; // Assuming the token is in the response
        Cookies.set("admin_token", token, { expires: 1 / 24 }); // Expires in 1 hour

        dispatch({
          type: "LOGIN",
          payload: res.data.admin, // Assuming user data is in response
        });
        return res.data; // Return the response data
      } else {
        console.log("Login failed:", res.data.message || "No message provided");
        return { success: false, message: res.data.message }; // Return failure message
      }
    } catch (error) {
      console.error(
        "Error logging in:",
        error.response ? error.res.data : error
      );
      return { success: false, message: "An error occurred while logging in." }; // Return generic error message
    }
  };
};

export const logout = () => {
  Cookies.remove("admin_token"); // Remove token from cookies
  return {
    type: "LOGOUT",
  };
};

// Use Axios for the fetchCurrentAdmin action
export const fetchCurrentAdmin = () => {
  return (dispatch) => {
    const token = Cookies.get("admin_token");
    if (!token) {
      console.error("No token found, user is not authenticated.");
      return; // Exit if no token is found
    }

    axios
      .get("admin/api/v1/admin", { withCredentials: true }) // Ensure withCredentials is set
      .then((res) => {
        dispatch({
          type: "SET_CURRENT_ADMIN",
          payload: res.data, // Axios already parses the JSON for you
        });
      })
      .catch((error) => {
        console.error("Error fetching current admin:", error);
        // You could dispatch an error action here if needed
      });
  };
};
