import React, { useState } from "react";
import Header from "../../components/common/Header";
import OnboardingSteps from "../../components/common/OnboardingSteps";
import HeadingBox from "../../components/common/HeadingBox";
import ItemCard from "../../components/cards/ItemCard";
import LeftSideBar from "../../components/cards/LeftSideBar";
import ListSideBar from "../../components/cards/ListSideBar";
import TableContent from "../../components/common/TableContent";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import CustomIcon from "../../components/common/CustomIcon";
import NavigationArrow from "../../components/common/NavigationArrow";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";

const columns = [
  { label: "Model", key: "model" },
  { label: "Model name", key: "model_name" },
  { label: "Make", key: "make" },
  { label: "Hours", key: "hours" },
  { label: "Location", key: "location" },
  { label: "Category", key: "category" },
  { label: "Status", key: "status" },
  { label: "Stock No", key: "stock_no" },
  { label: "VIN No", key: "vin_no", type: "chips" },
  { label: "Price", key: "price" },
  { label: "Tags", key: "tag", type: "chips" },
  { label: "Report", key: "report", type: "name" },
];

const data = [
  {
    model: "test123",
    model_name: "test123",
    make: "test name",
    hours: "10",
    location: "city",
    category: "test no",
    stock_no: "12345",
    price: "test city",
    vin_no: "test vin",
    tag: "test zip",
    status: "test state",
    report: "test name",
  },
  {
    model: "test123",
    model_name: "test123",
    make: "test name",
    hours: "10",
    location: "city",
    category: "test no",
    stock_no: "12345",
    price: "test city",
    vin_no: "test vin",
    tag: "test zip",
    status: "test state",
    report: "test name",
  },
  {
    model: "test123",
    model_name: "test123",
    make: "test name",
    hours: "10",
    location: "city",
    category: "test no",
    stock_no: "12345",
    price: "test city",
    vin_no: "test vin",
    tag: "test zip",
    status: "test state",
    report: "test name",
  },
  {
    model: "test123",
    model_name: "test123",
    make: "test name",
    hours: "10",
    location: "city",
    category: "test no",
    stock_no: "12345",
    price: "test city",
    vin_no: "test vin",
    tag: "test zip",
    status: "test state",
    report: "test name",
  },
];

const renderTableActions = () => {
  return (
    <div className="table-actions">
      <UncontrolledDropdown className="moreOptionsConnew" direction="left">
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
  );
};

function ArchivedProducts(props) {
  console.log(props, "test123");

  return (
    <>
      <Header history={props.history} />
      <div className="contentContainerFull">
        <div className="innerFullCon">
          <div className="cardHeader noborder">
            <h4>Products / Archived</h4>
            <p>Delete and restore the product.</p>
            <div className="topActionBar">
              {/*<button className="btn">Saving...</button>*/}
              <div className="searchTabs">
                <CustomIcon icon="Search" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="tableBox">
            <TableContent
              columns={columns}
              data={data}
              tableActions={renderTableActions()}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(ArchivedProducts);
