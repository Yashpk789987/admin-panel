import { RECEIVE_CHAT_GROUP_DETAILS } from "../actions/chat";

export default function chatGroup(state = null, action) {
  switch (action.type) {
    case RECEIVE_CHAT_GROUP_DETAILS:
      return action.group;
    default:
      return state;
  }
}
