import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { establishCurrentUser } from "../../actions/auth";
import Header from "../../components/common/Header";
import HeadingBox from "../../components/common/HeadingBox";
import ItemCard from "../../components/cards/ItemCard";
import ChatList from "../../components/cards/ChatList";
import CustomerDetail from "./ChatRightSecion";
import TableContent from "../../components/common/TableContent";
import CustomIcon from "../../components/common/CustomIcon";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import NavigationArrow from "../../components/common/NavigationArrow";
import ChatBody from "./ChatBody";
import CreateCustomerConversationModal from "./CreateCustomerConversationModal";
import CreateTeamConversationModal from "./CreateTeamConversationModal";
import CreateGroupModal from "./CreateGroupModal";

const modalTabs = ["My Customers", "All Customers"];

const Chat = (props) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [modalActiveTab, setModalActiveTab] = useState(0);
  const [barType, setBarType] = useState(null);
  const [isTeamTab, setIsTeamTab] = useState(false);
  const [
    openCreateConversationModal,
    setOpenCreateConversationModal,
  ] = useState(false);
  const [
    openCreateTeamConversationModal,
    setOpenCreateTeamConversationModal,
  ] = useState(false);
  const [openCreateGroupModal, setOpenCreateGroupModal] = useState(false);

  useEffect(() => {
    dispatch(establishCurrentUser());
  }, [dispatch]);

  const onChangeModalTab = (currentTab) => {
    setModalActiveTab(currentTab);
  };

  const openBar = (type) => {
    setBarType(type);
    if (type) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const renderModalTabs = () => {
    if (modalActiveTab === 0) {
      return (
        <div className="modalDetail">
          <h5 className="subHeading">Attach Product(s)</h5>
          <div className="itemList">
            <ul>
              <li>
                <div className="itemImgBox">
                  <img src="images/banner.jpg" />
                </div>
                <div className="itemContent">
                  <h5>2020 JHON DEERE 6145R</h5>
                  <p>
                    <span>#hours</span>
                    <span>#150</span>
                    <span>#2020</span>
                  </p>
                  <h6>$139,896</h6>
                </div>
              </li>
            </ul>
          </div>
          <div className="chipsCon">
            <div className="listBox">
              <ul>
                <li>
                  <a href="">
                    <div className="userCon">
                      <CustomIcon icon="Placeholder/Person/Small" />
                    </div>
                    White Jacques
                  </a>
                  <div className="iconCon">
                    <i className="fa fa-times" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <h5 className="subHeading">Suggested Customers</h5>
          <div className="listBox">
            <ul>
              <li>
                <a href="">
                  <div className="userCon">
                    <CustomIcon icon="Placeholder/Person/Small" />
                  </div>
                  White Jacques
                  <div className="iconCon">
                    <CustomIcon icon="Header/Icon/Add" />
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="userCon">
                    <CustomIcon icon="Placeholder/Person/Small" />
                  </div>
                  White Jacques
                  <div className="iconCon">
                    <CustomIcon icon="Header/Icon/Add" />
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="userCon">
                    <CustomIcon icon="Placeholder/Person/Small" />
                  </div>
                  White Jacques
                  <div className="iconCon">
                    <CustomIcon icon="Header/Icon/Add" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
    } else if (modalActiveTab === 1) {
      return (
        <div className="modalDetail">
          <h5 className="subHeading">Attach Product(s)</h5>
          <div className="itemList">
            <ul>
              <li>
                <div className="itemImgBox">
                  <img src="images/banner.jpg" />
                </div>
                <div className="itemContent">
                  <h5>2020 JHON DEERE 6145R</h5>
                  <p>
                    <span>#hours</span>
                    <span>#150</span>
                    <span>#2020</span>
                  </p>
                  <h6>$139,896</h6>
                </div>
              </li>
            </ul>
          </div>
          <div className="chipsCon">
            <div className="listBox">
              <ul>
                <li>
                  <a href="">
                    <div className="userCon">
                      <CustomIcon icon="Placeholder/Person/Small" />
                    </div>
                    White Jacques
                  </a>
                  <div className="iconCon">
                    <i className="fa fa-times" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <h5 className="subHeading">Suggested Customers</h5>
          <div className="listBox">
            <ul>
              <li>
                <a href="">
                  <div className="userCon">
                    <CustomIcon icon="Placeholder/Person/Small" />
                  </div>
                  White Jacques
                  <div className="iconCon">
                    <CustomIcon icon="Header/Icon/Add" />
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="userCon">
                    <CustomIcon icon="Placeholder/Person/Small" />
                  </div>
                  White Jacques
                  <div className="iconCon">
                    <CustomIcon icon="Header/Icon/Add" />
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="userCon">
                    <CustomIcon icon="Placeholder/Person/Small" />
                  </div>
                  White Jacques
                  <div className="iconCon">
                    <CustomIcon icon="Header/Icon/Add" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  };
  console.log(isTeamTab);
  return (
    <>
      <Header history={props.history} />
      <NavigationArrow openBar={openBar} />
      <div className="contentContainer fullHeight chatMainContainer">
        <div
          className={barType == "leftBar" ? "leftSidebar open" : "leftSidebar"}
        >
          <ChatList
            openModal={() => setOpenModal(true)}
            openBar={openBar}
            setIsTeamTab={setIsTeamTab}
            openCreateConversationModal={() =>
              setOpenCreateConversationModal(true)
            }
            openCreateTeamConversationModal={() =>
              setOpenCreateTeamConversationModal(true)
            }
            openCreateGroupModal={() => setOpenCreateGroupModal(true)}
            isTeamTab={isTeamTab}
          />
        </div>
        <ChatBody />
        <div
          className={
            barType == "rightBar" ? "rightSidebar open" : "rightSidebar"
          }
        >
          <CustomerDetail openBar={openBar} isTeamTab={isTeamTab} />
        </div>
      </div>
      <CreateCustomerConversationModal
        isModalOpen={openCreateConversationModal}
        toggle={() => setOpenCreateConversationModal(false)}
      />
      <CreateTeamConversationModal
        isModalOpen={openCreateTeamConversationModal}
        toggle={() => setOpenCreateTeamConversationModal(false)}
      />
      <CreateGroupModal
        isModalOpen={openCreateGroupModal}
        toggle={() => setOpenCreateGroupModal(false)}
      />
      <Modal isOpen={openModal} toggle={() => setOpenModal(false)}>
        <ModalBody>
          <div className="modalContent">
            <div className="modalHeader">
              <h3 className="heading">Message</h3>
              <HeadingBox
                activeTab={modalActiveTab}
                tabs={modalTabs}
                noRightSection
                onChangeTab={onChangeModalTab}
              />
            </div>
            {renderModalTabs()}
          </div>
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button color="secondary">Cancel</Button>{" "}
          <Button color="primary">Share</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Chat;
