import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeadingBox from "../common/HeadingBox";
import CustomIcon from "../common/CustomIcon";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { handleReceiveChatContact } from "../../actions/chat";
import CustomerChatItem from "./CustomerChatItem";
import GroupChatItem from "./GroupChatItem";
import SalesChatItem from "./SalesChatItem";

const userTabs = ["Inbox", "Team"];

const ChatList = (props) => {
  const dispatch = useDispatch();
  const chatGroups = useSelector((state) => state.chatGroups);
  const chatCustomers = useSelector((state) => state.chatCustomers);
  const chatSales = useSelector((state) => state.chatSales);
  const [activeTab, setActiveTab] = useState(0);

  React.useEffect(() => {
    dispatch(handleReceiveChatContact());
  }, []);

  const renderTabs = () => {
    if (activeTab === 0) {
      return (
        <Accordion
          allowMultipleExpanded
          preExpanded={["group1", "directMessage1"]}
          style={{ marginTop: 5 }}
        >
          <AccordionItem uuid="group1">
            <AccordionItemHeading>
              <AccordionItemButton>
                All Customers
                <i>
                  <CustomIcon icon="Header/Icon/Add" />
                </i>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="listBox">
                <ul>
                  {chatCustomers.map((chatCustomer, index) => (
                    <CustomerChatItem key={index} chatCustomer={chatCustomer} />
                  ))}
                </ul>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      );
    } else if (activeTab === 1) {
      return (
        <Accordion
          allowMultipleExpanded
          preExpanded={["group", "directMessage"]}
          style={{ marginTop: 5 }}
        >
          <AccordionItem uuid="directMessage1">
            <AccordionItemHeading>
              <AccordionItemButton>
                Direct Messages
                <i>
                  <CustomIcon icon="Header/Icon/Add" />
                </i>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="listBox">
                <ul>
                  {chatSales.map((chatSale, index) => (
                    <SalesChatItem key={index} chatSale={chatSale} />
                  ))}
                </ul>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem uuid="directMessage1">
            <AccordionItemHeading>
              <AccordionItemButton>
                Groups
                <i onClick={props.openCreateGroupModal}>
                  <CustomIcon icon="Header/Icon/Add" />
                </i>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="listBox">
                <ul>
                  {chatGroups.map((chatGroup, index) => (
                    <GroupChatItem key={index} chatGroup={chatGroup} />
                  ))}
                </ul>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          
        </Accordion>
      );
    }
  };

  const onChangeTab = (currentTab) => {
    console.log(currentTab, "test");
    setActiveTab(currentTab);
    if (currentTab === 1) {
      props.setIsTeamTab(true);
    } else {
      props.setIsTeamTab(false);
    }
  };

  const handlePenIconClick = () => {
    if (props.isTeamTab) {
      props.openCreateTeamConversationModal();
    } else {
      props.openCreateConversationModal();
    }
  };

  return (
    <div className="leftSidebarContent chatList">
      <div className="crossSection">
        <i className="fa fa-times" onClick={() => props.openBar(null)}></i>
      </div>
      <h4>
        Chat
        <button className="transparentBtn" onClick={() => props.openModal()}>
          <CustomIcon icon="Header/Icon/More" />
        </button>
        <button className="transparentBtn" onClick={handlePenIconClick}>
          <CustomIcon icon="Pen" />
        </button>
      </h4>
      <div className="searchBar">
        <i>
          <CustomIcon icon="Search" />
        </i>
        <input type="text" placeholder="Search" />
      </div>
      <div className="tabCon">
        <HeadingBox
          activeTab={activeTab}
          tabs={userTabs}
          noRightSection
          onChangeTab={onChangeTab}
        />
      </div>
      {renderTabs()}
    </div>
  );
};

export default ChatList;
