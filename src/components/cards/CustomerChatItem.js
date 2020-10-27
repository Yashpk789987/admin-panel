import React from "react";
import { getChatWithCustomer } from "../../api/chat";
import ChatItem from "./ChatItem";

const CustomerChatItem = ({ chatCustomer }) => {
  const [latestMessage, setLatestMessage] = React.useState({
    message: "",
    created_at: "",
  });

  React.useEffect(() => {
    getChatWithCustomer(chatCustomer.toCustomerId).then((messages) => {
      if (messages && messages.length) {
        setLatestMessage(messages[0]);
      }
    });
  }, []);

  return (
    <ChatItem
      message={latestMessage.message}
      date={latestMessage.created_at}
      name={chatCustomer.toCustomer.firstName}
      id={chatCustomer.toCustomerId}
      type="customer"
    />
  );
};

export default CustomerChatItem;
