import {
  SET_CHAT_CONVERSATION,
  ADD_MESSAGE_TO_CONVERSATION,
  CLEAR_CHAT_CONVERSATION,
} from "../actions/chat";

const initialState = {
  name: "",
  messages: [],
  type: "", // customer, group, sales
  id: null,
  created_at: null,
};

export default function chatConversation(state = initialState, action) {
  switch (action.type) {
    case SET_CHAT_CONVERSATION:
      return action.conversation;
    case ADD_MESSAGE_TO_CONVERSATION:
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    case CLEAR_CHAT_CONVERSATION:
      return { ...initialState };
    default:
      return state;
  }
}
