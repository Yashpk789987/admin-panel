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
{label: 'First name', key: 'first_name', type: 'name'}, 
{label: 'Last name', key: 'last_name'}, 
{label: 'Email address', key: 'email'}, 
{label: 'Role', key: 'role'},
{label: 'Department', key: 'department'}, 
{label: 'Reporting to', key: 'reporting_to'}, 
{label: 'Phone number', key: 'phone_no'}, 
{label: 'State', key: 'state'}, 
{label: 'City', key: 'city'},
]

const data = [
	{
		first_name: 'test123',
		last_name: 'test123',
		email: 'test name',
    role: 'test role',
    department: 'test department',
    reporting_to: 'test report to',
		phone_no: 'test no',
		state: 'test state',
		city: 'test city',
	},
  {
    first_name: 'test123',
    last_name: 'test123',
    email: 'test name',
    role: 'test role',
    department: 'test department',
    reporting_to: 'test report to',
    phone_no: 'test no',
    state: 'test state',
    city: 'test city',
  },
  {
    first_name: 'test123',
    last_name: 'test123',
    email: 'test name',
    role: 'test role',
    department: 'test department',
    reporting_to: 'test report to',
    phone_no: 'test no',
    state: 'test state',
    city: 'test city',
  }
]

function ImportTeam(props) {
  console.log(props, 'test123')

  return (
    <>
      <OnboardingSteps step={3} onContinue={() => props.history.push('importproducts')} />
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
        </div>
        <div className="innerFullCon rightSection">
          <div className="cardHeader noborder">
            <h4>All departments</h4>
            <p>Add or manage team members.</p>
            <div className="topActionBar">
              <button className="btn">Import CSV</button>
              <button className="sendBtn attach">
                <CustomIcon icon="Header/Icon/Add" />
              </button>
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
)(ImportTeam);