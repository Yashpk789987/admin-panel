import { RECEIVE_CHAT_SALES, ADD_NEW_CHAT_SALES } from "../actions/chat";

export default function chatSales(state = [], action) {
  switch (action.type) {
    case RECEIVE_CHAT_SALES:
      return action.sales;
    case ADD_NEW_CHAT_SALES:
      return [...state, { ...action.sales }];
    default:
      return state;
  }
}
