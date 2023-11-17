import * as types from "../constants/actionTypes";

const signIn = (username, password, fullname, email) => ({
  type: types.SIGN_IN,
  payload: {
    password, username, fullname, email
  }
});

export const signOut = () => ({
  type: types.SIGN_OUT,
});

export default signIn;

