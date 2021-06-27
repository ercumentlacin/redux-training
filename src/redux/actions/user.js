/* eslint-disable no-debugger */
import { USER_LOGIN, USER_LOGOUT } from '../types/user';

export const login = (user) => {
  return {
    type: USER_LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: USER_LOGOUT,
  };
};
