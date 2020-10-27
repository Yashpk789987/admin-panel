import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import CustomIcon from "../../components/common/CustomIcon";
import GroupDetails from "./GroupDetails";

const ChatRightSecion = (props) => {
  if (props.isTeamTab) {
    return <GroupDetails />;
  } else {
    return (
      <div className="leftSidebarContent customerDetail chatRightSidebar">
        <div className="cardHeader">
          <h4>Details</h4>
          <p>Personal details and purchase history.</p>
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
                <h4>Timothy Diermann</h4>
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
            <li className="listItem active">
              <div className="userCard">
                <div className="userCon">
                  <CustomIcon icon="Placeholder/Person/Small" />
                </div>
                <span>Sales Manager</span>
              </div>
              <div className="infoBox">
                <h4>Timothy Diermann</h4>
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
        </div>
        <div className="cardHeader">
          <h4>Purchase History</h4>
        </div>
        <div className="chatList historyCon">
          <div className="listBox">
            <ul>
              <li>
                <a href="">
                  <div className="userName">
                    <span className="name">Jhon Due</span>
                    <span className="text">Riyan King: tiam dolor aenean</span>
                  </div>
                  <span className="time">09:30 AM</span>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="userName">
                    <span className="name">Jhon Due</span>
                    <span className="text">Riyan King: tiam dolor aenean</span>
                  </div>
                  <span className="time">09:30 AM</span>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="userName">
                    <span className="name">Jhon Due</span>
                    <span className="text">Riyan King: tiam dolor aenean</span>
                  </div>
                  <span className="time">09:30 AM</span>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="userName">
                    <span className="name">Jhon Due</span>
                    <span className="text">Riyan King: tiam dolor aenean</span>
                  </div>
                  <span className="time">09:30 AM</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="crossSection">
          <i className="fa fa-times" onClick={() => props.openBar(null)}></i>
        </div>
      </div>
    );
  }
};

export default ChatRightSecion;
