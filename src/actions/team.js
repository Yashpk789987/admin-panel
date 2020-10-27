import types from "../types";

export const setTeam = (data, page) => {
  return {
    type: types.SET_ALL_TEAM,
    data,
    page
  };
}

export const setDepartments = (data) => {
  return {
    type: types.SET_ALL_DEPARTMENTS,
    data
  };
}

