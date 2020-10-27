import React, { useState, useEffect } from 'react';
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
import { getCustomers } from '../../api/customer'
import InfiniteScroll from 'react-infinite-scroller';

const columns = [
  { label: 'First Name', key: 'firstName', type: 'name' },
  { label: 'Last Name', key: 'lastName' },
  { label: 'Email Address', key: 'email' },
  { label: 'Type', key: 'type' },
  { label: 'Phone number', key: 'phone' },
  { label: 'Country', key: 'country' },
  { label: 'State', key: 'state' },
  { label: 'City', key: 'city' },
  { label: 'Zip Code', key: 'zipcode' },
  { label: 'Assign to', key: 'assign_to', type: 'name' },
  { label: 'Product', key: 'product' },
  { label: 'Purchased on', key: 'purchased_on' },
  { label: 'Service Due', key: 'service_due' }
]

function Customers(props) {
  console.log(props, 'test123')
  const [loading, setloading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    fetchCustomers()
  }, [])

  const fetchCustomers = () => {
    setloading(true)
    props.dispatch(getCustomers(page)).then(res => {
      setloading(false)
      setPage(page+1)
      if (res.length < 10) {
        setHasMore(false)
      }
    })
  }

  const addNew = () => {
    //props.dispatch(addNewProducts())
  }

  const loadFunc = () => {
    if (!loading) {
      console.log(page, 'page')  
      fetchCustomers();
    }
  }

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
            <NavLink to="/archivedcustomers">
              <DropdownItem>
                <CustomIcon icon="Archive" />
                  View Archive
                </DropdownItem>
            </NavLink>
          </DropdownMenu>
        </UncontrolledDropdown>
      </button>
      <button className="sendBtn" onClick={() => props.history.push('customerdetail')}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  }

  return (
    <>
      <Header history={props.history} />
      <div className="contentContainerFull">
        <div className="innerFullCon">
          <div className="cardHeader noborder">
            <h4>Customers</h4>
            <p>Add or import products and manage it.</p>
            <div className="topActionBar">
              {/*<button className="btn">Saving...</button>*/}
              <div className="searchTabs">
                <CustomIcon icon="Search" />
                <input type="text" className="form-control" placeholder="Search by customer name" />
              </div>
              <UncontrolledDropdown className="moreOptionsCon" >
                <DropdownToggle>
                  <button className="sendBtn">
                    <CustomIcon icon="Header/Icon/More" />
                  </button>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <CustomIcon icon="File" />
                    Import CSV
                  </DropdownItem>
                  <NavLink to="/archivedcustomers">
                    <DropdownItem>
                      <CustomIcon icon="Archive" />
                      View Archive
                    </DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <button className="sendBtn ">
                <CustomIcon icon="Header/Icon/Add" />
              </button>
            </div>

          </div>
          <div className="tableBox">
            <InfiniteScroll
              pageStart={page}
              loadMore={loadFunc}
              hasMore={hasMore}
              loader={<div className="tableLoading" key={0}>Loading ...</div>}
              threshold={150}
              useWindow={false}
              initialLoad={false}
            >
              <TableContent columns={columns} data={props.customer.allCustomers.length ? props.customer.allCustomers : []} tableActions={renderTableActions()} />
              {/*<div className="addNewItem">
                <a>+ Add a customer</a>
              </div>*/}
            </InfiniteScroll>
          </div>
        </div>
      </div>


    </>
  );
}


const mapStateToProps = state => ({
  customer: state.customer
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);