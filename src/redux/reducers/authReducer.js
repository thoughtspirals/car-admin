// redux/reducers/authReducer.js
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

export default authReducer;
