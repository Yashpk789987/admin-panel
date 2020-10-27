import types from "../types";

const initialState = {
  allProducts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALL_PRODUCTS:
      let allItems = [...state.allProducts]
      if (action.page === 1) {
        allItems = action.data;
      } else {
        allItems = allItems.concat(action.data)  
      }
      
      console.log(allItems, ';allItems')
      return {
        ...state,
        allProducts: allItems
      };
  case types.SET_NEW_PRODUCT:
    let items = [...state.allProducts];
    items = [action.form, ...items]
    return {
      ...state,
      allProducts: items
    }
  case types.ONCHANGE_PRODUCT:
    let formRows = [...state.allProducts];
    formRows[action.index][action.key] = action.value;
    return {
      ...state,
      allProducts: formRows
    }
  case types.SET_NEW_PRODUCT_ITEM:
    let allProductsItems = [...state.allProducts];
    allProductsItems[action.index] = action.item;
    return {
      ...state,
      allProducts: allProductsItems
    }
  case types.REMOVE_NEW_PRODUCT_ITEM:

    let allProductsRow = [...state.allProducts];
    allProductsRow.splice(action.index, 1)
    return {
      ...state,
      allProducts: allProductsRow
    }
    default:
      return state;
  }
};