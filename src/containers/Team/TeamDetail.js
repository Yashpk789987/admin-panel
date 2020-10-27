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
  { label: 'Date', key: 'date' },
  { label: 'Customer Name', key: 'customer_name' },
  { label: 'Email', key: 'email' },
  { label: 'Phone number', key: 'phone_no' },
  { label: 'Type', key: 'type' },
  { label: 'Product', key: 'product' },
  { label: 'Price', key: 'price' },
  { label: 'Via', key: 'via' },
  { label: 'Country', key: 'country' },
  { label: 'State', key: 'state' },
  { label: 'City', key: 'city' },

]

const data = [
  {
    date: 'test123',
    customer_name: 'test123',
    email: 'test name',
    phone_no: 'test no',
    type: 'test address',
    product: 'test product',
    price: 'test price',
    via: 'test via',
    country: 'test cpountry',
    state: 'test state',
    city: 'test city',
  },
  {
    date: 'test123',
    customer_name: 'test123',
    email: 'test name',
    phone_no: 'test no',
    type: 'test address',
    product: 'test product',
    price: 'test price',
    via: 'test via',
    country: 'test cpountry',
    state: 'test state',
    city: 'test city',
  },
  {
    date: 'test123',
    customer_name: 'test123',
    email: 'test name',
    phone_no: 'test no',
    type: 'test address',
    product: 'test product',
    price: 'test price',
    via: 'test via',
    country: 'test cpountry',
    state: 'test state',
    city: 'test city',
  }
]

const bottomTabs = ["DealMode", "Customers", "Shared", "Order Out", "Order In", "Sold"]

function TeamDetail(props) {
  console.log(props, 'test123')
  const [activeTab, setActiveTab] = useState(0)

  const onChangeTab = (currentTab) => {
    setActiveTab(currentTab)
  }

  return (
    <>
      <Header history={props.history} />
      <div className="contentContainerFull teamDescription fullHeight">
        <div className="innerFullCon leftSideBar">
          <div className="tableBox">
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
                    Timothy Diermann
                    <CustomIcon icon="Header/Icon/More" />
                  </h4>
                  <p>Windom</p>
                  <p>Assign on 07/24/2020</p>
                  <ul className="userActions">
                    <li>
                      <a href="">
                        <CustomIcon icon="Icon/Chat%20Regular" />
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
                        <CustomIcon icon="Icon/Chat%20Regular" />
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
                        <CustomIcon icon="Icon/Chat%20Regular" />
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
                        <CustomIcon icon="Icon/Chat%20Regular" />
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
                  <h4>
                    5 Team Members
                    <i><CustomIcon icon="Header/Icon/Add" /></i>
                  </h4>
                </div>
                <ul>
                  <li>
                    <a href="">
                      <div className="userCon">
                        <CustomIcon icon="Navigation/Customers/Regular" />
                      </div>
                      <div className="userName">
                        <span className="name">Ryan King</span>
                        <span className="text">Sales Rep</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="userCon">
                        <CustomIcon icon="Navigation/Customers/Regular" />
                      </div>
                      <div className="userName">
                        <span className="name">Ryan King</span>
                        <span className="text">Sales Rep</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="userCon">
                        <CustomIcon icon="Navigation/Customers/Regular" />
                      </div>
                      <div className="userName">
                        <span className="name">Ryan King</span>
                        <span className="text">Sales Rep</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="userCon">
                        <CustomIcon icon="Navigation/Customers/Regular" />
                      </div>
                      <div className="userName">
                        <span className="name">Ryan King</span>
                        <span className="text">Sales Rep</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="innerFullCon rightSection">
          <div className="detailCards overviewCards" style={{ marginTop: 20 }}>
            <div className="cardBox">
              <div className="innerCardCon gray">
                <div className="iconBar">
                  <i className="fa fa-bars" />
                </div>
                <h5>0</h5>
                <h4>shared</h4>
                <h3>$0.0</h3>
              </div>
            </div>
            <div className="cardBox">
              <div className="innerCardCon blueLign">
                <div className="iconBar">
                  <i className="fa fa-arrow-up" />
                </div>
                <h5>0</h5>
                <h4>order out</h4>
                <h3>$0.0</h3>
              </div>
            </div>
            <div className="cardBox">
              <div className="innerCardCon blue">
                <div className="iconBar">
                  <i className="fa fa-arrow-down" />
                </div>
                <h5>0</h5>
                <h4>order in</h4>
                <h3>$0.0</h3>
              </div>
            </div>
            <div className="cardBox">
              <div className="innerCardCon green">
                <div className="iconBar">
                  <i className="fa fa-dollar-sign" />
                </div>
                <h5>0</h5>
                <h4>sold</h4>
                <h3>$0.0</h3>
              </div>
            </div>
          </div>
          <div className="cardHeader noborder lessPadding">
            <div className="bottomTabs">
              <HeadingBox
                activeTab={activeTab}
                tabs={bottomTabs}
                noRightSection
                onChangeTab={onChangeTab}
              />
            </div>
            <div className="topActionBar">
              {/*<button className="btn">Saving...</button>*/}
              <div className="searchTabs">
                <CustomIcon icon="Search" />
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className="tableBox">
            <TableContent columns={columns} data={data} />
            <div className="addNewItem">
              <a className="add">+ Add</a>
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
)(TeamDetail);