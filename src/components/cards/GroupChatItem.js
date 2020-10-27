import React from "react";
import { getChatWithGroup } from "../../api/chat";
import ChatItem from "./ChatItem";

const GroupChatItem = ({ chatGroup }) => {
  const [latestMessage, setLatestMessage] = React.useState({
    message: "",
    created_at: "",
  });

  React.useEffect(() => {
    getChatWithGroup(chatGroup.groupId).then((messages) => {
      if (messages && messages.length) {
        setLatestMessage(messages[0]);
      }
    });
  }, []);

  return (
    <ChatItem
      message={latestMessage.message}
      date={latestMessage.created_at}
      name={chatGroup.group.name}
      id={chatGroup.groupId}
      type="group"
    />
  );
};

export default GroupChatItem;
