import { RECEIVE_CHAT_CUSTOMERS, ADD_NEW_CHAT_CUSTOMER } from "../actions/chat";

export default function chatCustomers(state = [], action) {
  switch (action.type) {
    case RECEIVE_CHAT_CUSTOMERS:
      return action.customers;
    case ADD_NEW_CHAT_CUSTOMER:
      return [...state, { ...action.customer }];
    default:
      return state;
  }
}
