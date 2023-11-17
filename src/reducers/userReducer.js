// userReducer.js
import * as types from "../constants/actionTypes";

const initialState = {
  username: "",
  password: "",
  fullname: "",
  email: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
        fullname: action.payload.fullname,
      };
    case types.SIGN_OUT:
      return {
        ...state,
        username: "",
        password: "",
        email: "",
        fullname: "",
      };
    default:
      return state;
  }
};

export default userReducer;
