import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";
import { saveUserAuth, togglefavScript, addFavScripts } from "../actions/auth";
import subscribeUser from "../subscription";

export const loginUser = (data) => {
  data["domain"] = "cbops";
  var options = GenerateOptions("auth/login", "POST", data);
  console.log("options", options);
  return (dispatch) => {
    return MakeTheApiCall(options)
      .then((response) => {
        console.log(response, "response");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        subscribeUser();
        return response;
      })
      .catch((error) => {
        return error.response.data;
      });
  };
};

export const addProduct = (data) => {
  var options = GenerateOptions("products", "POST", data);
  options.headers = {
    Accept: "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  return (dispatch) => {
    return MakeTheApiCall(options)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response.data;
      });
  };
};

export const getProducts = () => {
  var options = GenerateOptions("products??limit=3&page=1", "GET");
  options.headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  return (dispatch) => {
    return MakeTheApiCall(options)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response.data;
      });
  };
};

export const addCustomer = (data) => {
  var options = GenerateOptions("customers", "POST", data);
  options.headers = {
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEZWVyZSIsImVtYWlsIjoiYWRtaW5Aam9obmRlZXJlLmNvbSIsInBob25lTnVtYmVyIjpudWxsLCJzaGFyZUNvdW50IjoiMCIsImNsaWVudCI6eyJpZCI6MSwibmFtZSI6IkMgJiBCIE9wZXJhdGlvbnMiLCJkb21haW4iOiJjYm9wcyJ9LCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQWRtaW4ifX0sImlhdCI6MTYwMzM3NTE3NiwiZXhwIjoxNjAzNDYxNTc2fQ.PBE6tLvZuOFA7x5Hib94K8EoXJIzPG0C_Fe58vKg6ts",
  };
  return (dispatch) => {
    return MakeTheApiCall(options)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response.data;
      });
  };
};

export const sendCode = (data) => {
  let apiData = { email: data.email };
  let URL = "auth/forgotpassword";
  if (!data.email) {
    let apiData = { phonenumber: data.phone };
    URL = "auth/sendotp";
  }
  var options = GenerateOptions(URL, "POST", apiData);
  return (dispatch) => {
    return MakeTheApiCall(options)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  };
};

export const resetPassword = (data) => {
  let apiData = {
    email: data.email,
    token: data.token,
    password: data.password,
  };
  let URL = "auth/changepassword";
  if (!data.email) {
    let apiData = { phonenumber: data.phone, otp: data.token };
    URL = "auth/verifyotp";
  }

  var options = GenerateOptions(URL, "POST", apiData);
  return (dispatch) => {
    return MakeTheApiCall(options)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error, "error");
        return error.response.data;
      });
  };
};
