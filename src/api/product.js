import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";
import { setProducts, setNewProduct } from "../actions/product";

export const getProducts = page => {
  var options = GenerateOptions(`products?limit=30&page=${page}`, "GET");
  console.log("options",options)
  return dispatch => {
    return MakeTheApiCall(options)
      .then(response => {
        console.log(response, 'response')
        dispatch(setProducts(response.data, page))
        return response.data;
      })
      .catch(error => {
        return error.response.data;
      });
  };
};

export const addProducts = (item, index) => {
  var options = GenerateOptions(`products`, "POST", item);
  console.log("options",options)
  return dispatch => {
    return MakeTheApiCall(options)
      .then(response => {
        console.log(response, 'response123')
        dispatch(setNewProduct(response.data, index))
        return response.data;
      })
      .catch(error => {
        console.log(error, 'error')
        return error;
      });
  };
};

