import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";

export const getUsers = async (page, customOptions) => {
  try {
    let url = `users?page=${page || 1}`;
    if (customOptions) {
      url += customOptions;
    } else {
      url += `&limit=30`;
    }
    var options = GenerateOptions(url, "GET");
    const { data } = await MakeTheApiCall(options);
    console.log("%cresponse data:::", "color:green; background-color:black;");
    console.log(data);
    return data;
  } catch (e) {
    throw e;
  }
};
