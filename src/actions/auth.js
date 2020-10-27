import Cookies from "js-cookie";
import types from "../types";
import { loginAPI } from "../api/auth";

export const setCurrentUser = (user) => (dispatch) =>
  new Promise((resolve) => {
    dispatch({
      type: types.SET_CURRENT_USER,
      user,
    });

    Cookies.set("mywebsite", user);

    dispatch({
      type: types.AUTHENTICATE,
      authenticated: true,
    });

    resolve(user);
  });

export const establishCurrentUser = () => (dispatch) =>
  new Promise((resolve) => {
    let userFromCookie = Cookies.getJSON("mywebsite");
    console.log("userFromCookie === ", userFromCookie);

    if (userFromCookie) {
      dispatch(setCurrentUser(userFromCookie));
      resolve(userFromCookie);
    } else {
      let userFromLocalStorage = localStorage.getItem("userData");
      if (userFromLocalStorage) {
        const user = JSON.parse(userFromLocalStorage);
        dispatch(setCurrentUser(user));
        resolve(user);
      } else {
        resolve({});
      }
    }
  });

export const loginUser = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    const user = {
      email,
      password,
      name: "Awesome User",
    };

    dispatch(setCurrentUser(user));
    resolve(user);
  });

export const logoutUser = () => (dispatch) =>
  new Promise((resolve) => {
    dispatch({
      type: types.AUTHENTICATE,
      authenticated: false,
    });

    dispatch({
      type: types.SET_CURRENT_USER,
      user: {},
    });

    Cookies.remove("mywebsite");
    resolve({});
  });
