import { toast } from "react-toastify";

import {
  getChatContact,
  getChatWithGroup,
  getChatWithSales,
  getChatWithCustomer,
  sendMessage,
  getChatGroupDetails,
} from "../api/chat";

export const RECEIVE_CHAT_GROUPS = "RECEIVE_CHAT_GROUPS";
export const RECEIVE_CHAT_CUSTOMERS = "RECEIVE_CHAT_CUSTOMERS";
export const RECEIVE_CHAT_SALES = "RECEIVE_CHAT_SALES";
export const SET_CHAT_CONVERSATION = "SET_CHAT_CONVERSATION";
export const ADD_MESSAGE_TO_CONVERSATION = "ADD_MESSAGE_TO_CONVERSATION";
export const CLEAR_CHAT_CONVERSATION = "CLEAR_CHAT_CONVERSATION";
export const RECEIVE_CHAT_GROUP_DETAILS = "RECEIVE_CHAT_GROUP_DETAILS";
export const ADD_NEW_CHAT_CUSTOMER = "ADD_NEW_CHAT_CUSTOMER";
export const ADD_NEW_CHAT_SALES = "ADD_NEW_CHAT_SALES";

const receiveChatGroups = (groups) => ({
  type: RECEIVE_CHAT_GROUPS,
  groups,
});

const receiveChatCustomers = (customers) => ({
  type: RECEIVE_CHAT_CUSTOMERS,
  customers,
});

const receiveChatSales = (sales) => ({
  type: RECEIVE_CHAT_SALES,
  sales,
});

const setChatConversation = (conversation) => ({
  type: SET_CHAT_CONVERSATION,
  conversation,
});

const addMessageToConversation = (message) => ({
  type: ADD_MESSAGE_TO_CONVERSATION,
  message,
});

const clearChatConversation = () => ({
  type: CLEAR_CHAT_CONVERSATION,
});

const receiveChatGroupDetails = (group) => ({
  type: RECEIVE_CHAT_GROUP_DETAILS,
  group,
});

const addNewChatCustomer = (customer) => ({
  type: ADD_NEW_CHAT_CUSTOMER,
  customer,
});

const addNewChatSales = (sales) => ({
  type: ADD_NEW_CHAT_SALES,
  sales,
});

export const handleReceiveChatContact = () => async (dispatch) => {
  try {
    const { groups, customers, salesReps } = await getChatContact();
    dispatch(receiveChatGroups(groups));
    dispatch(receiveChatCustomers(customers));
    dispatch(receiveChatSales(salesReps));
    if (customers.length) {
      dispatch(
        handleSetChatConversation({
          id: customers[0].toCustomerId,
          name: customers[0].toCustomer.firstName,
          type: "customer",
        })
      );
    }
  } catch (e) {
    console.log(e);
  }
};

export const handleSetChatConversation = ({ type, name, id }) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(clearChatConversation());
    const { currentUser } = getState().auth;
    let messages = [];
    switch (type) {
      case "group": {
        messages = await getChatWithGroup(id);
        messages = messages
          .map((message) => ({
            ...message,
            sent: message.fromUserId,
            name: message.fromUserId
              ? currentUser.firstName + " " + currentUser.lastName
              : name,
          }))
          .reverse();
        dispatch(handleReceiveChatGroupDetails(id));
        break;
      }
      case "sales": {
        messages = await getChatWithSales(id);
        messages = messages
          .map((message) => ({
            ...message,
            sent: message.fromUserId,
            name: message.fromUserId
              ? currentUser.firstName + " " + currentUser.lastName
              : name,
          }))
          .reverse();
        break;
      }
      case "customer": {
        messages = await getChatWithCustomer(id);
        messages = messages
          .map((message) => ({
            ...message,
            sent: message.fromUserId,
            name: message.fromUserId
              ? currentUser.firstName + " " + currentUser.lastName
              : name,
          }))
          .reverse();
        break;
      }
      default:
        break;
    }
    const conversation = {
      type,
      messages,
      name,
      id,
      created_at: messages.length
        ? new Date(messages[messages.length - 1].created_at)
        : new Date(),
    };
    dispatch(setChatConversation(conversation));
  } catch (e) {
    console.log(e);
  }
};

export const handleSendMessage = (message) => async (dispatch, getState) => {
  try {
    const { type, id } = getState().chatConversation;
    await sendMessage({ message, type, id });
    toast.success("Message is sent successfully");
    dispatch(
      addMessageToConversation({
        message,
        created_at: new Date(),
        sent: true,
      })
    );
  } catch (e) {
    console.log(e);
  }
};

const handleReceiveChatGroupDetails = (id) => async (dispatch) => {
  try {
    const group = await getChatGroupDetails(id);
    dispatch(receiveChatGroupDetails(group));
  } catch (e) {
    console.log(e);
  }
};

export const handleSetNewChatConversation = ({ type, item }) => (
  dispatch,
  getState
) => {
  switch (type) {
    case "customer": {
      const { chatCustomers } = getState();
      let conversationAlreadyExists = chatCustomers.some(
        (c) => c.toCustomerId === item.id
      );
      if (conversationAlreadyExists) {
        dispatch(
          handleSetChatConversation({ type, id: item.id, name: item.firstName })
        );
      } else {
        const customer = {
          toCustomerId: item.id,
          toCustomer: {
            id: item.id,
            firstName: item.firstName,
          },
        };
        dispatch(addNewChatCustomer(customer));
        const conversation = {
          type,
          messages: [],
          name: item.firstName,
          id: item.id,
          created_at: new Date(),
        };
        dispatch(setChatConversation(conversation));
      }
      break;
    }
    case "sales": {
      const { chatSales } = getState();
      let conversationAlreadyExists = chatSales.some(
        (c) => c.toUserId === item.id
      );
      if (conversationAlreadyExists) {
        dispatch(
          handleSetChatConversation({
            type,
            id: item.id,
            name: item.firstName + " " + item.lastName,
          })
        );
      } else {
        const sales = {
          toUserId: item.id,
          toUser: {
            id: item.id,
            firstName: item.firstName,
          },
        };
        dispatch(addNewChatSales(sales));
        const conversation = {
          type,
          messages: [],
          name: item.firstName + " " + item.lastName,
          id: item.id,
          created_at: new Date(),
        };
        dispatch(setChatConversation(conversation));
      }
      break;
    }
    case "group": {
      dispatch(
        handleSetChatConversation({
          type,
          id: item.groupId,
          name: item.group.name,
        })
      );
      break;
    }
    default:
      break;
  }
};
