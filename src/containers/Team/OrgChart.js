import React, { useState } from 'react';
import Header from '../../components/common/Header'
import OnboardingSteps from '../../components/common/OnboardingSteps'
import HeadingBox from '../../components/common/HeadingBox'
import ItemCard from '../../components/cards/ItemCard'
import LeftSideBar from '../../components/cards/LeftSideBar'
import ListSideBar from '../../components/cards/ListSideBar'
import TableContent from '../../components/common/TableContent'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CustomIcon from '../../components/common/CustomIcon'
import NavigationArrow from '../../components/common/NavigationArrow'
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { Link, NavLink } from 'react-router-dom'


function OrgChart(props) {
  console.log(props, 'test123')

  const renderTableActions = () => {
    return <div className="table-actions">
      <button className="sendBtn">
        <UncontrolledDropdown className="moreOptionsConnew" direction="left">
          <DropdownToggle>
            <button className="sendBtn">
              <CustomIcon icon="Header/Icon/More" />
            </button>
          </DropdownToggle>
          <DropdownMenu>
            <NavLink to="/archivedteam">
              <DropdownItem>
                <CustomIcon icon="Archive" />
                      View Archive
                    </DropdownItem>
            </NavLink>
          </DropdownMenu>
        </UncontrolledDropdown>
      </button>
      <button className="sendBtn" onClick={() => props.history.push('teamdetail')}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  }

  return (
    <>
      <Header history={props.history} />
      <div className="contentContainerFull teamDescription">
        <div className="innerFullCon leftSideBar">
          <div className="cardHeader">
            <h4>Departments</h4>
            <p>Add or manage department.</p>
          </div>
          <div className="tableBox">
            <ul className="listCon">
              <li className="listItem active">
                All
            		<button className="sendBtn">
                  <CustomIcon icon="Header/Icon/More" />
                </button>
              </li>
              <li className="listItem">
                Administration
            		<button className="sendBtn">
                  <CustomIcon icon="Header/Icon/More" />
                </button>
              </li>
              <li className="listItem">
                Accounting
            		<button className="sendBtn">
                  <CustomIcon icon="Header/Icon/More" />
                </button>
              </li>
              <li className="listItem">
                Finance
            		<button className="sendBtn">
                  <CustomIcon icon="Header/Icon/More" />
                </button>
              </li>
              <li className="listItem">
                Sales
            		<button className="sendBtn">
                  <CustomIcon icon="Header/Icon/More" />
                </button>
              </li>
              <li className="listItem">
                Management
            		<button className="sendBtn">
                  <CustomIcon icon="Header/Icon/More" />
                </button>
              </li>
            </ul>
            <div className="addNewItem noborder">
              <a className="add">+ Add department</a>
            </div>
          </div>
          <div className="bottomBtnCon">
            <button className="btn" onClick={() => props.history.push('team')}>List View</button>
          </div>
        </div>
        <div className="innerFullCon rightSection">
          test
        </div>
      </div>
    </>
  );
}


const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrgChart);