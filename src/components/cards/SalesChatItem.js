import React from "react";
import { getChatWithSales } from "../../api/chat";
import ChatItem from "./ChatItem";

const SalesChatItem = ({ chatSale }) => {
  const [latestMessage, setLatestMessage] = React.useState({
    message: "",
    created_at: "",
  });

  React.useEffect(() => {
    getChatWithSales(chatSale.toUserId).then((messages) => {
      if (messages && messages.length) {
        setLatestMessage(messages[0]);
      }
    });
  }, []);

  return (
    <ChatItem
      message={latestMessage.message}
      date={latestMessage.created_at}
      name={chatSale.toUser.firstName}
      id={chatSale.toUserId}
      type="sales"
    />
  );
};

export default SalesChatItem;
