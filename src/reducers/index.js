import { combineReducers } from "redux";

import auth from "./auth";
import product from "./product";
import customer from "./customer";
import team from "./team";
import chatGroups from "./chat-groups";
import chatCustomers from "./chat-customers";
import chatSales from "./chat-sales";
import chatConversation from "./chat-conversation";
import chatGroup from "./chat-group";
import users from "./users";

export default combineReducers({
  auth,
  product,
  customer,
  team,
  chatGroups,
  chatCustomers,
  chatSales,
  chatConversation,
  chatGroup,
  users,
});
