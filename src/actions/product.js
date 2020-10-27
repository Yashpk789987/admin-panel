import types from "../types";

export const setProducts = (data, page) => {
  return {
    type: types.SET_ALL_PRODUCTS,
    data,
    page
  };
}

export const addNewProducts = (form) => {
  return {
    type: types.SET_NEW_PRODUCT,
    form
  };
}

export const onChangeProduct = (value, key, item, index) => {
  return {
    type: types.ONCHANGE_PRODUCT,
    value, 
    key, 
    item, 
    index
  };
}

export const setNewProduct = (item, index) => {
  return {
    type: types.SET_NEW_PRODUCT_ITEM,
    item,
    index
  };
}

export const removeNewProducts = (index) => {
  return {
    type: types.REMOVE_NEW_PRODUCT_ITEM,
    index
  };
}


