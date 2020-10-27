import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";

export const getChatContact = async () => {
  try {
    let url = `chat/contacts`;
    var options = GenerateOptions(url, "GET");
    const { data } = await MakeTheApiCall(options);
    // console.log("%cresponse data:::", "color:green; background-color:black;");
    // console.log(data);
    return data;
  } catch (e) {
    throw e;
  }
};

export const getChatWithCustomer = async (customerId) => {
  try {
    let url = `chat/customer/${customerId}`;
    var options = GenerateOptions(url, "GET");
    const { data } = await MakeTheApiCall(options);
    // console.log("%cresponse data:::", "color:green; background-color:black;");
    // console.log(data);
    return data;
  } catch (e) {
    throw e;
  }
};

export const getChatWithGroup = async (groupId) => {
  try {
    let url = `chat/group/${groupId}`;
    var options = GenerateOptions(url, "GET");
    const { data } = await MakeTheApiCall(options);
    // console.log("%cresponse data:::", "color:green; background-color:black;");
    // console.log(data);
    return data;
  } catch (e) {
    throw e;
  }
};

export const getChatWithSales = async (userId) => {
  try {
    let url = `chat/user/${userId}`;
    var options = GenerateOptions(url, "GET");
    const { data } = await MakeTheApiCall(options);
    // console.log("%cresponse data:::", "color:green; background-color:black;");
    // console.log(data);
    return data;
  } catch (e) {
    throw e;
  }
};

export const sendMessage = async ({ type, id, message }) => {
  try {
    let data = { message };
    switch (type) {
      case "group": {
        data.toGroup = id;
        break;
      }
      case "customer": {
        data.toCustomer = id;
        break;
      }
      case "sales": {
        data.toUser = id;
        break;
      }
      default:
        break;
    }
    let url = `chat`;
    var options = GenerateOptions(url, "POST", data);
    await MakeTheApiCall(options);
    // console.log("%cresponse data:::", "color:green; background-color:black;");
    // console.log(data);
    return data;
  } catch (e) {
    throw e;
  }
};

export const getChatGroupDetails = async (groupId) => {
  try {
    let url = `chatgroups/${groupId}`;
    var options = GenerateOptions(url, "GET");
    const { data } = await MakeTheApiCall(options);
    console.log("%cresponse data:::", "color:green; background-color:black;");
    console.log(data);
    return data;
  } catch (e) {
    throw e;
  }
};
