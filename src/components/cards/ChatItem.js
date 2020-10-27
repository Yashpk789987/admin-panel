import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSetChatConversation } from "../../actions/chat";
import formatMessageDate from "../../util/formatMessageDate";
import CustomIcon from "../common/CustomIcon";

const ChatItem = ({ name, message, date, type, id }) => {
  const dispatch = useDispatch();
  const conversation = useSelector((state) => state.chatConversation);

  const handleChatItemClick = () => {
    console.log("=???????????????",type);
    dispatch(handleSetChatConversation({ type, name, id }));
  };

  return (
    <li>
      <a onClick={handleChatItemClick}>
        <div className="userCon">
         {type=="group" ?
          <CustomIcon icon="Navigation/Customers/Regular" />
      :
      <CustomIcon icon="Placeholder/Person/Small" />
        }
        </div>
        <div className="userName">
          <span
            style={
              conversation &&
              conversation.id === id &&
              conversation.type === type
                ? { color: "#196EE5" }
                : null
            }
            className={
              conversation &&
              conversation.id === id &&
              conversation.type === type
                ? "nameactive"
                : "name"
            }
          >
            {name}
          </span>
          {/* <span className="text">Riyan King: tiam dolor aenean</span> */}
          <span className="text">{message.substr(0, 34)}</span>
        </div>
        <span className="time">{formatMessageDate(date)}</span>
      </a>
    </li>
  );
};

export default ChatItem;
