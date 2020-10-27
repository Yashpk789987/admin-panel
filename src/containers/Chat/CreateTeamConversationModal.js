import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleReceiveUsers } from "../../actions/users";
import { handleSetNewChatConversation } from "../../actions/chat";
import HeadingBox from "../../components/common/HeadingBox";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import CustomIcon from "../../components/common/CustomIcon";

const modalTabs = ["Employee", "Group"];

const CreateTeamConversationModal = ({ isModalOpen, toggle }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const groups = useSelector((state) => state.chatGroups);
  const [modalActiveTab, setModalActiveTab] = React.useState(0);

  React.useEffect(() => {
    if (isModalOpen) dispatch(handleReceiveUsers());
  }, [dispatch, isModalOpen, modalActiveTab]);

  const handleMessageIconClick = (item, type) => {
    dispatch(
      handleSetNewChatConversation({
        type,
        item,
      })
    );
    toggle();
  };

  const onChangeModalTab = (selectedTab) => {
    setModalActiveTab(selectedTab);
  };

  const renderModalTabs = () => {
    if (modalActiveTab === 0) {
      return (
        <React.Fragment>
          <div className="searchBar">
            <i>
              <CustomIcon icon="Search" />
            </i>
            <input
              type="text"
              placeholder="Search"
              style={{ background: "white" }}
            />
          </div>
          <div
            className="listBox"
            style={{ maxHeight: 500, overflowY: "scroll", overflowX: "hidden" }}
          >
            <ul>
              {users.map((user) => (
                <li>
                  <a onClick={() => handleMessageIconClick(user, "sales")}>
                    <div className="userCon">
                      <CustomIcon icon="Placeholder/Person/Small" />
                    </div>
                    {user.firstName + " " + user.lastName}
                    <div className="iconCon">
                      <CustomIcon icon="Message" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="searchBar">
            <i>
              <CustomIcon icon="Search" />
            </i>
            <input
              type="text"
              placeholder="Search"
              style={{ background: "white" }}
            />
          </div>
          <div
            className="listBox"
            style={{ maxHeight: 500, overflowY: "scroll", overflowX: "hidden" }}
          >
            <ul>
              {groups.map((group) => (
                <li>
                  <a onClick={() => handleMessageIconClick(group, "group")}>
                    <div className="userCon">
                      <CustomIcon icon="Placeholder/Person/Small" />
                    </div>
                    {group.group.name}
                    <div className="iconCon">
                      <CustomIcon icon="Message" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      );
    }
  };

  return (
    <Modal isOpen={isModalOpen} toggle={toggle}>
      <ModalBody>
        <div className="modalContent">
          <div className="modalHeader">
            <h3 className="heading">Select Employee or Group</h3>
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
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTeamConversationModal;
