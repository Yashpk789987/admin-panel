import types from "../types";

export const setCustomers = (data, page) => {
  return {
    type: types.SET_ALL_CUSTOMER,
    data,
    page
  };
}