import types from "../types";

const initialState = {
  allTeam: [],
  allDepartments: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALL_TEAM:
      let allItems = [...state.allTeam]
      if (action.page === 1) {
        allItems = action.data;
      } else {
        allItems = allItems.concat(action.data)  
      }
      
      console.log(allItems, ';allItems')
      return {
        ...state,
        allTeam: allItems
      };

    case types.SET_ALL_DEPARTMENTS:
    return {
      ...state,
      allDepartments: action.data
    }

    default:
      return state;
  }
};