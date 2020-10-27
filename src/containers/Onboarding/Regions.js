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
{label: 'Dealer Name*', key: 'dealer_name'}, 
{label: 'Address*', key: 'address'}, 
{label: 'Email*', key: 'email'},
{label: 'Phone number', key: 'phone_no'}, 
{label: 'Zip Code', key: 'zip_code'},
]

const data = [
	{
		dealer_name: 'test123',
		phone_no: 'test no',
		address: 'test address',
		email: 'test state',
		zip_code: 'test zip',
	},
	{
		dealer_name: 'test123',
    phone_no: 'test no',
    address: 'test address',
    email: 'test state',
    zip_code: 'test zip',
	},
	{
		dealer_name: 'test123',
    phone_no: 'test no',
    address: 'test address',
    email: 'test state',
    zip_code: 'test zip',
	},
	{
		dealer_name: 'test123',
    phone_no: 'test no',
    address: 'test address',
    email: 'test state',
    zip_code: 'test zip',
	}
]

function Regions(props) {
  console.log(props, 'test123')

  return (
    <>
      <OnboardingSteps step={2} onContinue={() => props.history.push('importteam')} />
      <div className="contentContainerFull teamDescription">
        <div className="innerFullCon leftSideBar">
          <div className="cardHeader">
            <h4>Regions</h4>
            <p>Manage your country list.</p>
          </div>
          <div className="tableBox">
            <ul className="listCon">
            	<li className="listItem active">
            		North America
            		<button className="sendBtn">
		              <CustomIcon icon="Header/Icon/More" />
		            </button>
            	</li>
            	<li className="listItem">
            		Canada
            		<button className="sendBtn">
		              <CustomIcon icon="Header/Icon/More" />
		            </button>
		          </li>
            	<li className="listItem">
            		USA
            		<button className="sendBtn">
		              <CustomIcon icon="Header/Icon/More" />
		            </button>
            	</li>
            	<li className="listItem">
            		Mexico
            		<button className="sendBtn">
		              <CustomIcon icon="Header/Icon/More" />
		            </button>
            	</li>
            	<li className="listItem">
            		Africa
            		<button className="sendBtn">
		              <CustomIcon icon="Header/Icon/More" />
		            </button>
            	</li>
            	<li className="listItem">
            		Asia
            		<button className="sendBtn">
		              <CustomIcon icon="Header/Icon/More" />
		            </button>
            	</li>
            </ul>
            <div className="addNewItem noborder">
              <a className="add">+ Add Country</a>
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
              <a className="add">+ Add Dealer</a>
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
)(Regions);