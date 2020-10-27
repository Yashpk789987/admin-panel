import types from "../types";

const initialState = {
  allCustomers: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALL_CUSTOMER:
      let allItems = [...state.allCustomers]
      if (action.page === 1) {
        allItems = action.data;
      } else {
        allItems = allItems.concat(action.data)  
      }
      
      console.log(allItems, ';allItems')
      return {
        ...state,
        allCustomers: allItems
      };

    default:
      return state;
  }
};