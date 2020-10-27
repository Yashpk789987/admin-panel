import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";
import { setTeam, setDepartments } from "../actions/team";

export const getTeam = (page, filter) => {
  let url = `users?limit=30&page=${page}`;
  if (filter !== 'all') {
    url = `departments/${filter}/users/?limit=30&page=${page}`
  }
  var options = GenerateOptions(url, "GET");
  return dispatch => {
    return MakeTheApiCall(options)
      .then(response => {
        let result = filter === 'all' ? response.data.rows : response.data[0].users
        dispatch(setTeam(result, page))
        return result;
      })
      .catch(error => {
        return error.response.data;
      });
  };
};

export const getDepartments = () => {
  var options = GenerateOptions(`departments?limit=100&page=1`, "GET");
  return dispatch => {
    return MakeTheApiCall(options)
      .then(response => {
        dispatch(setDepartments(response.data))
        return response.data;
      })
      .catch(error => {
        return error.response.data;
      });
  };
};

