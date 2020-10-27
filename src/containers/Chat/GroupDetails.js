import React from "react";
import { useSelector } from "react-redux";
import CustomIcon from "../../components/common/CustomIcon";

const ChatRightSecion = () => {
  const group = useSelector((state) => state.chatGroup);

  if (!group) return null;

  return (
    <div className="leftSidebarContent customerDetail chatRightSidebar">
      <div className="crossSection">
        <i className="fa fa-times" />
      </div>
      <div className="cardHeader">
        <h4>{group.name}</h4>
        <p>{group.details}</p>
      </div>
      <div className="innerTimeLineCon">
        <ul className="listCon timeLineContainer">
          <li className="listItem active">
            <div className="userCard">
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              <span>Sales Manager</span>
            </div>
            <div className="infoBox">
              <h4>
                {group.createdBy.firstName + " " + group.createdBy.lastName}
                <CustomIcon icon="Header/Icon/More" />
              </h4>
              <p>Windom</p>
              <p>Assign on 07/24/2020</p>
              <ul className="userActions">
                <li>
                  <a href="">
                    <CustomIcon icon="Icon/Phone" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <CustomIcon icon="Icon/Email" />
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="listItem active closed">
            <div className="userCard">
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              <span>Sales Manager</span>
            </div>
            <div className="infoBox">
              <h4>
                {group.createdBy.firstName + " " + group.createdBy.lastName}
                <CustomIcon icon="Header/Icon/More" />
              </h4>
              <p>Windom</p>
              <p>Assign on 07/24/2020</p>
              <ul className="userActions">
                <li>
                  <a href="">
                    <CustomIcon icon="Icon/Phone" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <CustomIcon icon="Icon/Email" />
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="listItem active closed">
            <div className="userCard">
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              <span>Sales Manager</span>
            </div>
            <div className="infoBox">
              <h4>
                Timothy Diermann
                <CustomIcon icon="Header/Icon/More" />
              </h4>
              <p>Windom</p>
              <p>Assign on 07/24/2020</p>
              <ul className="userActions">
                <li>
                  <a href="">
                    <CustomIcon icon="Icon/Phone" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <CustomIcon icon="Icon/Email" />
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="listItem active closed">
            <div className="userCard">
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              <span>Sales Manager</span>
            </div>
            <div className="infoBox">
              <h4>
                Timothy Diermann
                <CustomIcon icon="Header/Icon/More" />
              </h4>
              <p>Windom</p>
              <p>Assign on 07/24/2020</p>
              <ul className="userActions">
                <li>
                  <a href="">
                    <CustomIcon icon="Icon/Phone" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <CustomIcon icon="Icon/Email" />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="modalContent chatList">
          <div className="listBox">
            <div className="leftHeader">
              <h4>{group.users.length} Team Members</h4>
            </div>
            <ul>
              {group.users.map((user, index) => (
                <li key={index}>
                  <a href="">
                    <div className="userCon">
                      <CustomIcon icon="Navigation/Customers/Regular" />
                    </div>
                    <div className="userName">
                      <span className="name">
                        {user.firstName + " " + user.lastName}
                      </span>
                      <span className="text">Sales Rep</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRightSecion;
