import React, { useState } from 'react';
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
  { label: 'Customer', key: 'customer' },
  { label: 'Type', key: 'type' },
  { label: 'Product', key: 'product' },
  { label: 'Assign to', key: 'assign_to', type: 'name' },
  { label: 'Country', key: 'country' },
  { label: 'State', key: 'state' },
  { label: 'City', key: 'city' },
  { label: 'Amount', key: 'amount' },
  { label: 'Shared', key: 'shared' },
  { label: 'Order Out', key: 'order_out' },
  { label: 'Order In', key: 'order_in' },
  { label: 'Sold', key: 'sold' },
  { label: 'Sold on', key: 'sold_on' }
]

const data = [
  {
    customer: 'test123',
    type: '10',
    product: 'test',
    assign_to: 'test state',
    country: 'test no',
    state: '12345',
    city: 'test city',
    amount: 'test zip',
    shared: 'test name',
    order_out: 'test state',
    order_in: 'test',
    sold: 'test',
    sold_on: 'test'
  },
  {
    customer: 'test123',
    type: '10',
    product: 'test',
    assign_to: 'test state',
    country: 'test no',
    state: '12345',
    city: 'test city',
    amount: 'test zip',
    shared: 'test name',
    order_out: 'test state',
    order_in: 'test',
    sold: 'test',
    sold_on: 'test'
  },
  {
    customer: 'test123',
    type: '10',
    product: 'test',
    assign_to: 'test state',
    country: 'test no',
    state: '12345',
    city: 'test city',
    amount: 'test zip',
    shared: 'test name',
    order_out: 'test state',
    order_in: 'test',
    sold: 'test',
    sold_on: 'test'
  },
  {
    customer: 'test123',
    type: '10',
    product: 'test',
    assign_to: 'test state',
    country: 'test no',
    state: '12345',
    city: 'test city',
    amount: 'test zip',
    shared: 'test name',
    order_out: 'test state',
    order_in: 'test',
    sold: 'test',
    sold_on: 'test'
  }
]

const bottomTabs = ["Month", "Quarter", "Year"]

function Sales(props) {
  console.log(props, 'test123')

  return (
    <>
      <Header history={props.history} />
      <div className="contentContainerFull">
        <div className="innerFullCon">
          <div className="cardHeader noborder">
            <h4>Sales Report</h4>
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
            </div>
          </div>
          <div className="detailCards overviewCards">
          <div className="cardBox">
							<div className="innerCardCon gray">
								<div className="iconBar">
									<i className="fa fa-bars" />
								</div>
								{/* <h5>0</h5> */}
								<h4>VOLUME</h4>
								<h3>$0.0</h3>
							</div>
						</div>
						<div className="cardBox">
							<div className="innerCardCon gray">
								<div className="iconBar">
									<i className="fa fa-calendar" />
								</div>
								{/* <h5>0</h5> */}
								<h4>AVG. TURN</h4>
								<h3>$0.0</h3>
							</div>
						</div>
						<div className="cardBox">
							<div className="innerCardCon gray">
								<div className="iconBar">
									<i className="fa fa-hashtag" />
								</div>
								{/* <h5>0</h5> */}
								<h4>UNITS</h4>
								<h3>$0.0</h3>
							</div>
						</div>
						<div className="cardBox">
							<div className="innerCardCon gray">
								<div className="iconBar">
									<i className="fa fa-dollar-sign" />
								</div>
								{/* <h5>0</h5> */}
								<h4>EST. MARGIN</h4>
								<h3>$0.0</h3>
							</div>
						</div>
          </div>
          <div className="tableBox">
            <TableContent columns={columns} data={data} />
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
)(Sales);