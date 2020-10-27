import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSendMessage } from "../../actions/chat";
import formatMessageDate, {
  getDayName,
  getMonthName,
  nth,
} from "../../util/formatMessageDate";
import CustomIcon from "../../components/common/CustomIcon";

const ChatBody = () => {
  const dispatch = useDispatch();
  const conversation = useSelector((state) => state.chatConversation);
  const [text, setText] = React.useState("");
  const chatBody = React.useRef();

  React.useEffect(() => {
    chatBody.current.scrollTop = chatBody.current.scrollHeight;
  }, [conversation]);

  if (!conversation) return <div>Please select a conversation...</div>;

  const handleSendButtonClick = (e) => {
    e.preventDefault();
    if (text) {
      setText("");
      dispatch(handleSendMessage(text));
    }
  };

  return (
    <div className="centerContent">
      <div className="centerBoxContainer">
        <div className="chatboxCon">
          <div className="chatHeader">
            <div className="userCard">
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              {conversation.name}
              <p>Windom</p>
            </div>
            <button className="sendBtn attach">
              <CustomIcon icon="Header/Icon/More" />
            </button>
            <button className="sendBtn">
              <CustomIcon icon="Dropdown/List/Oneline/List/Single%20line/Icon/Info" />
            </button>
          </div>

          <div className="chatBody" ref={chatBody}>
            <ul>
              <li className="align-center">
                <div className="dateCon">
                  {conversation.created_at
                    ? getDayName(conversation.created_at) +
                      ", " +
                      getMonthName(conversation.created_at) +
                      " " +
                      conversation.created_at.getDate() +
                      nth(conversation.created_at)
                    : "Loading"}
                </div>
              </li>
              {conversation.messages.map((message, index) => (
                <li key={index} className={message.sent ? "send" : ""}>
                  <div className="userCard">
                    <div className="userCon">
                      <div className="userConInner">
                        <CustomIcon icon="Placeholder/Person/Small" />
                      </div>
                      {renderPopover()}
                    </div>
                    <div className="userContent">
                      <h6>
                        {message.name}
                        <span>{formatMessageDate(message.created_at)}</span>
                      </h6>  
                      <p>{message.message}</p>
                    </div>
                  </div> 
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSendButtonClick} className="chatFooter">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message..."        
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="sendBtn share">
              <CustomIcon icon="Form/Options/share" />
            </button>
            <button className="sendBtn attach">
              <CustomIcon icon="Icon/Attach" />
            </button>
            {text ? 
             <button className="sendBtn" type="submit">
             <CustomIcon icon="Form/Options/ Send Enable" />
           </button>
           :
           <button className="sendBtn" type="submit">
           <CustomIcon icon="Form/Options/Send Disabled" />
         </button>  
          }
         
          </form>
        </div>
      </div>
    </div>
  );
};

const renderPopover = () => {
  return (
    <div className="sidePopover">
      <div className="infoBox">
        <div className="imgCon">
          <CustomIcon icon="Placeholder/Person/Small" />
        </div>
        <div className="popoverContent">
          <h4>Christopher Pawelski</h4>
          <p>Rachel Farming</p>
          <ul className="userActions">
            <li>
              <a href="">
                <CustomIcon icon="Icon/Chat%20Regular" />
              </a>
            </li>
            <li>
              <a href="">
                <CustomIcon icon="Icon/Email" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
