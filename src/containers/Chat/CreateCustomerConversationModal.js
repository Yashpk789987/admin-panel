import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../api/customer";
import { handleSetNewChatConversation } from "../../actions/chat";
import HeadingBox from "../../components/common/HeadingBox";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import CustomIcon from "../../components/common/CustomIcon";

const CreateCustomerConversationModal = ({ isModalOpen, toggle }) => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.allCustomers);

  React.useEffect(() => {
    if (isModalOpen) dispatch(getCustomers(1, "&limit=1000"));
  }, [dispatch, isModalOpen]);

  const handleMessageIconClick = (customer) => {
    dispatch(
      handleSetNewChatConversation({
        type: "customer",
        item: customer,
      })
    );
    toggle();
  };

  return (
    <Modal isOpen={isModalOpen} toggle={toggle}>
      <ModalBody>
        <div className="modalContent">
          <div className="modalHeader">
            <h3 className="heading">Select Customer</h3>
            {/* <HeadingBox
              activeTab={modalActiveTab}
              tabs={modalTabs}
              noRightSection
              onChangeTab={onChangeModalTab}
            /> */}
          </div>
          {/* {renderModalTabs()} */}
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
              {customers.map((customer) => (
                <li>
                  <a onClick={() => handleMessageIconClick(customer)}>
                    <div className="userCon">
                      <CustomIcon icon="Placeholder/Person/Small" />
                    </div>
                    {customer.firstName}
                    <div className="iconCon">
                      <CustomIcon icon="Message" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
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

export default CreateCustomerConversationModal;
