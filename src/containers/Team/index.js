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
import { getTeam, getDepartments } from '../../api/team'
import InfiniteScroll from 'react-infinite-scroller';
import Departments from '../../components/common/Departments'
import { setTeam } from '../../actions/team'

const columns = [
  { label: 'First name', key: 'firstName' },
  { label: 'Last name', key: 'lastName' },
  { label: 'Department', key: 'departments', innerKey: 'name' },
  { label: 'Role', key: 'role' },
  { label: 'Email address', key: 'email' },
  { label: 'Phone number', key: 'phoneNumber' },
  { label: 'Country', key: 'country' },
  { label: 'State', key: 'state' },
  { label: 'City', key: 'city' },
  { label: 'Zip Code', key: 'zip_code' },
  { label: 'Report To', key: 'report_to', type: 'name' }
]

function Team(props) {
  console.log(props, 'test123')
  const [loading, setloading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loadingSidebar, setloadingSidebar] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchTeam()
    fetchDepartments()
  }, [])

  const fetchTeam = (currentFilter, currentPage) => {
    currentFilter = currentFilter ? currentFilter : filter;
    currentPage = currentPage ? currentPage : page;
    setloading(true)
    props.dispatch(getTeam(currentPage, currentFilter)).then(res => {
      setloading(false)
      if (res.length < 10) {
        setHasMore(false)
      } else {
        setHasMore(true)
        setPage(page+1)
      }
    })
  }

  const fetchDepartments = () => {
    setloadingSidebar(true)
    props.dispatch(getDepartments()).then(res => {
      setloadingSidebar(false)
    })
  }

  const addNew = () => {
    //props.dispatch(addNewProducts())
  }

  const loadFunc = () => {
    if (!loading) {
      console.log(page, 'page')  
      fetchTeam();
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

  const filterTeam = async (currentFilter) => {
    console.log(currentFilter)
    setHasMore(true)
    props.dispatch(setTeam([], 1))
    await setFilter(currentFilter)
    await setPage(1)
    fetchTeam(currentFilter, 1)
  }

  return (
    <>
      <Header history={props.history} />
      <div className="contentContainerFull teamDescription">
        <div className="innerFullCon leftSideBar">
          <Departments {...props} loading={loadingSidebar} filterTeam={filterTeam} filter={filter} />
        </div>
        <div className="innerFullCon rightSection">
          <div className="cardHeader noborder">
            <h4>All Team Members</h4>
            <div className="topActionBar">
              {/*<button className="btn">Saving...</button>*/}
              <div className="searchTabs">
                <CustomIcon icon="Search" />
                <input type="text" className="form-control" placeholder="Search by name and role" />
              </div>
              <button className="sendBtn ">
                <CustomIcon icon="Header/Icon/Add" />
              </button>
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
                  <NavLink to="/archivedteam">
                    <DropdownItem>
                      <CustomIcon icon="Archive" />
                      View Archive
                    </DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>

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
              <TableContent columns={columns} data={props.team.allTeam} tableActions={renderTableActions()} loading={loading} />
              {/*<div className="addNewItem">
                <a className="add">+ Add team member</a>
              </div>*/}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
}


const mapStateToProps = state => ({
  team: state.team
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Team);