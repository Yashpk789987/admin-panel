import { RECEIVE_CHAT_GROUPS } from "../actions/chat";

export default function chatGroups(state = [], action) {
  switch (action.type) {
    case RECEIVE_CHAT_GROUPS:
      return action.groups;
    default:
      return state;
  }
}
