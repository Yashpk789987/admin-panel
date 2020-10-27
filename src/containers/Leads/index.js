import React, {useState} from 'react';
import Header from '../../components/common/Header'
import OnboardingSteps from '../../components/common/OnboardingSteps'
import HeadingBox from '../../components/common/HeadingBox'
import ItemCard from '../../components/cards/ItemCard'
import LeftSideBar from '../../components/cards/LeftSideBar'
import ListSideBar from '../../components/cards/ListSideBar'
import TableContent from '../../components/common/TableContent'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CustomIcon from '../../components/common/CustomIcon'
import NavigationArrow from '../../components/common/NavigationArrow'
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';

const columns = [
  {label: 'Date', key: 'date'}, 
  {label: 'Customer Type', key: 'customer_type'}, 
  {label: 'First Name', key: 'first_name', type: 'name'}, 
  {label: 'Last Name', key: 'last_name'}, 
  {label: 'Email Address', key: 'email'},
  {label: 'Phone number', key: 'phone_no'},
  {label: 'Last Purchase', key: 'last_purchase'}, 
  {label: 'City', key: 'city'},
  {label: 'State', key: 'state'},
  {label: 'Assign to', key: 'assign_to', type: 'assign_to', type: 'name'},
  {label: 'Assign on', key: 'assign_to', type: 'assign_on'},
  {label: 'Status', key: 'status'}
]

const data = [
  {
    date: 'date',
    customer_type: 'test',
    first_name: 'test123',
    last_name: 'test123',
    email: 'test name',
    
    phone_no: 'city',
    last_purchase: 'test',

    city: 'test city',
    state: 'test',
    assign_to: 'test state',
    assign_on: 'test name',
    state: 'test'
  },
  {
    date: 'date',
    customer_type: 'test',
    first_name: 'test123',
    last_name: 'test123',
    email: 'test name',
    
    phone_no: 'city',
    last_purchase: 'test',

    city: 'test city',
    state: 'test',
    assign_to: 'test state',
    assign_on: 'test name',
    state: 'test'
  },
  {
    date: 'date',
    customer_type: 'test',
    first_name: 'test123',
    last_name: 'test123',
    email: 'test name',
    
    phone_no: 'city',
    last_purchase: 'test',

    city: 'test city',
    state: 'test',
    assign_to: 'test state',
    assign_on: 'test name',
    state: 'test'
  },
  {
    date: 'date',
    customer_type: 'test',
    first_name: 'test123',
    last_name: 'test123',
    email: 'test name',
    
    phone_no: 'city',
    last_purchase: 'test',

    city: 'test city',
    state: 'test',
    assign_to: 'test state',
    assign_on: 'test name',
    state: 'test'
  }
]

const bottomTabs = ["All", "Unassign", "Assigned"]

function Leads(props) {
  console.log(props, 'test123')

  return (
    <>
      <Header history={props.history} />
      <div className="contentContainerFull">
        <div className="innerFullCon">
          <div className="cardHeader noborder">
            <h4>Leads</h4>
            <p>Manage your leads and assign to team member.</p>
            <div className="topActionBar">
              {/*<button className="btn">Saving...</button>*/}
              <div className="searchTabs">
                <CustomIcon icon="Search" />
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <div className="bottomTabs">
                <HeadingBox
                  activeTab={0}
                  tabs={bottomTabs}
                  noRightSection
                  //onChangeTab={onChangeTab}
                />
              </div>
              <button className="sendBtn attach">
                <CustomIcon icon="Header/Icon/More" />
              </button>
              <button className="sendBtn ">
                <CustomIcon icon="Header/Icon/Add" />
              </button>
            </div>
            
          </div>
          <div className="tableBox">
            <TableContent columns={columns} data={data} />
            <div className="addNewItem">
              <a href="">+ Add lead</a> or 
              <a href="" className="blue_link">Select Customer</a>
            </div>
          </div>
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
)(Leads);