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

const columns = [
  { label: 'Model', key: 'model' },
  { label: 'Model name', key: 'model_name' },
  { label: 'Make', key: 'make' },
  { label: 'Hours', key: 'hours' },
  { label: 'Location', key: 'location' },
  { label: 'Category', key: 'category' },
  { label: 'Status', key: 'status' },
  { label: 'Stock No', key: 'stock_no' },
  { label: 'VIN No', key: 'vin_no' },
  { label: 'Price', key: 'price' },
  { label: 'Tags', key: 'tag', type: 'chips' },
  { label: 'Customer', key: 'customer' },
  { label: 'Sold by', key: 'sold_by' }
]

const data = [
  {
    model: 'test123',
    model_name: 'test123',
    make: 'test name',
    hours: '10',
    Location: 'city',
    category: 'test no',
    status: 'test state',
    stock_no: '12345',
    vin_no: '098765',
    price: 'test city',
    tag: 'test zip',   
    customer: 'test name',
    sold_by: 'test state',
  }
]

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
          <NavLink to="/productsarchived">
            <DropdownItem>

              <CustomIcon icon="Archive" />
                      View Archive
                    </DropdownItem>
          </NavLink>
        </DropdownMenu>
      </UncontrolledDropdown>
    </button>
    <button className="sendBtn">
      <i className="fas fa-times"></i>
    </button>
  </div>
}

class ProductDetail extends React.Component {

  render(){
  return (
    <>
      <Header history={this.props.history} />
      <div className="contentContainerFull productDetail">
        <div className="innerFullCon">
          <div className="tableBox">
            <TableContent columns={columns} data={data} tableActions={renderTableActions()} />
          </div>
          <div className="leftCon">
            <div className="cardHeader ">
              <h4>Cover Photos</h4>
              <p>This photo will be visible to customers.</p>
            </div>
            <div className="leftCon">
              <div className="cardHeader ">
                <h4>Cover Photos</h4>
                <p>This photo will be visible to customers.</p>
              </div>
              <div className="imagesSection">
                <div className="imgCon">
                  <div className="img noBorder">
                    <img src="images/banner.jpg" />
                  </div>
                  <p className="imgText">1. Preview</p>
                  <i className="delete"><CustomIcon icon="Delete" /></i>
                </div>
                <div className="imgCon">
                  <div className="img"></div>
                  <p className="imgText">2</p>
                  <i><CustomIcon icon="Header/Icon/Add" /></i>
                </div>
                <div className="imgCon">
                  <div className="img"></div>
                  <p className="imgText">3</p>
                  <i><CustomIcon icon="Header/Icon/Add" /></i>
                </div>
                <div className="imgCon">
                  <div className="img"></div>
                  <p className="imgText">4</p>
                  <i><CustomIcon icon="Header/Icon/Add" /></i>
                </div>
              </div>
              <div className="cardHeader ">
                <h4>Other Photos</h4>
                <p>Other than cover photos can be listed here.</p>
              </div>
              <div className="imagesSection">
                <div className="imgCon">
                  <div className="img noBorder">
                    <img src="images/banner.jpg" />
                  </div>
                  <i className="delete"><CustomIcon icon="Delete" /></i>
                </div>
                <div className="imgCon">
                  <div className="img noBorder">
                    <img src="images/banner.jpg" />
                  </div>
                  <i className="delete"><CustomIcon icon="Delete" /></i>
                </div>
                <div className="imgCon">
                  <div className="img noBorder">
                    <img src="images/banner.jpg" />
                  </div>
                  <i className="delete"><CustomIcon icon="Delete" /></i>
                </div>
                <div className="imgCon">
                  <div className="img noBorder">
                    <img src="images/banner.jpg" />
                  </div>
                  <i className="delete"><CustomIcon icon="Delete" /></i>
                </div>
                <div className="imgCon">
                  <div className="img noBorder">
                    <img src="images/banner.jpg" />
                  </div>
                  <i className="delete"><CustomIcon icon="Delete" /></i>
                </div>
                <div className="imgCon">
                  <div className="img noBorder">
                    <img src="images/banner.jpg" />
                  </div>
                  <i className="delete"><CustomIcon icon="Delete" /></i>
                </div>
                <div className="imgCon">
                  <div className="img noBorder">
                    <img src="images/banner.jpg" />
                  </div>
                  <i className="delete"><CustomIcon icon="Delete" /></i>
                </div>
                <div className="imgCon">
                  <div className="img noBorder">
                    <img src="images/banner.jpg" />
                  </div>
                  <i className="delete"><CustomIcon icon="Delete" /></i>
                </div>
                <div className="imgCon">
                  <div className="img noBorder">
                    <img src="images/banner.jpg" />
                  </div>
                  <i className="delete"><CustomIcon icon="Delete" /></i>
                </div>
                <div className="imgCon">
                  <div className="img noBorder">
                    <img src="images/banner.jpg" />
                  </div>
                  <i className="delete"><CustomIcon icon="Delete" /></i>
                </div>
                <div className="imgCon">
                  <div className="img noBorder">
                    <img src="images/banner.jpg" />
                  </div>
                  <i className="delete"><CustomIcon icon="Delete" /></i>
                </div>
                <div className="imgCon">
                  <div className="img noBorder">
                    <img src="images/banner.jpg" />
                  </div>
                  <i className="delete"><CustomIcon icon="Delete" /></i>
                </div>
                <div className="imgCon">
                  <div className="img"></div>
                  <i className="fas fa-image"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  
      </>
    );
  }
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
)(ProductDetail);