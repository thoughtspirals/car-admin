import Cookies from "js-cookie"; // Make sure to install js-cookie

const initialState = {
  isAuthenticated: false,
  adminData: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        adminData: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        adminData: null,
      };
    default:
      return state;
  }
};

// Check token validity on app load
const checkTokenValidity = () => {
  const token = Cookies.get("admin_token");
  if (token) {
    return true; // Token is valid
  }
  return false; // No token found
};

export { checkTokenValidity };
export default authReducer;
