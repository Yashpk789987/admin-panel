import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";
import { setCustomers } from "../actions/customer";

export const getCustomers = (page, customOptions) => {
  let url = `customers?page=${page || 1}`;
  if (customOptions) {
    url += customOptions;
  } else {
    url += `&limit=30`;
  }
  var options = GenerateOptions(url, "GET");
  console.log("options", options);
  return (dispatch) => {
    return MakeTheApiCall(options)
      .then((response) => {
        console.log(response, "response");
        dispatch(setCustomers(response.data, page));
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  };
};
