import React, { useState } from 'react';
import Header from '../../components/common/Header'
import OnboardingSteps from '../../components/common/OnboardingSteps'
import HeadingBox from '../../components/common/HeadingBox'
import ItemCard from '../../components/cards/ItemCard'
import LeftSideBar from '../../components/cards/LeftSideBar'
import ListSideBar from '../../components/cards/ListSideBar'
import TableContent from '../../components/common/TableContent'

import CustomIcon from '../../components/common/CustomIcon'
import NavigationArrow from '../../components/common/NavigationArrow'
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'

const columns = [
  { label: 'First Name', key: 'first_name', type: 'name' },
  { label: 'Last Name', key: 'last_name' },
  { label: 'Email Address', key: 'email' },
  { label: 'Type', key: 'type' },
  { label: 'Phone number', key: 'phone_no' },
  { label: 'Country', key: 'country' },
  { label: 'State', key: 'state' },
  { label: 'City', key: 'city' },
  { label: 'Zip Code', key: 'zip_code' },
  { label: 'Assign to', key: 'assign_to', type: 'name' },
  { label: 'Product', key: 'product' },
  { label: 'Purchased on', key: 'purchased_on' },
  { label: 'Service Due', key: 'service_due' }
]

const data = [
  {
    first_name: 'test123',
    last_name: 'test123',
    email: 'test name',
    type: '10',
    phone_no: 'city',
    country: 'test no',
    state: '12345',
    city: 'test city',
    zip_code: 'test zip',
    assign_to: 'test state',
    product: 'test name',
    purchased_on: 'test state',
    service_due: 'test'
  },
  {
    first_name: 'test123',
    last_name: 'test123',
    email: 'test name',
    type: '10',
    phone_no: 'city',
    country: 'test no',
    state: '12345',
    city: 'test city',
    zip_code: 'test zip',
    assign_to: 'test state',
    product: 'test name',
    purchased_on: 'test state',
    service_due: 'test'
  },
  {
    first_name: 'test123',
    last_name: 'test123',
    email: 'test name',
    type: '10',
    phone_no: 'city',
    country: 'test no',
    state: '12345',
    city: 'test city',
    zip_code: 'test zip',
    assign_to: 'test state',
    product: 'test name',
    purchased_on: 'test state',
    service_due: 'test'
  },
  {
    first_name: 'test123',
    last_name: 'test123',
    email: 'test name',
    type: '10',
    phone_no: 'city',
    country: 'test no',
    state: '12345',
    city: 'test city',
    zip_code: 'test zip',
    assign_to: 'test state',
    product: 'test name',
    purchased_on: 'test state',
    service_due: 'test'
  }
]

function ArchivedCustomers(props) {
  console.log(props, 'test123')

  const renderTableActions = () => {
    return <div className="table-actions">
      <UncontrolledDropdown className="moreOptionsConnew" direction="left" >
        <DropdownToggle>
          <button className="sendBtn">
            <CustomIcon icon="Header/Icon/More" />
          </button>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <CustomIcon icon="Restore" />
                      Restore
                    </DropdownItem>
          <DropdownItem>
            <CustomIcon icon="Delete" />
                    Delete
                    </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  }

  return (
    <>
      <Header history={props.history} />
      <div className="contentContainerFull">
        <div className="innerFullCon">
          <div className="cardHeader noborder">
            <h4>Archived / Customers</h4>
            <p>Add or import products and manage it.</p>
            <div className="topActionBar">
              {/*<button className="btn">Saving...</button>*/}
              <div className="searchTabs">
                <CustomIcon icon="Search" />
                <input type="text" className="form-control" placeholder="Search by customer name" />
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
            <TableContent columns={columns} data={data} tableActions={renderTableActions()} />
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
)(ArchivedCustomers);