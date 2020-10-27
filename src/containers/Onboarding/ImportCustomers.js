
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
import { toast } from "react-toastify";
import {addCustomer} from '../../api/auth'

const columns = [
{label: 'First name', key: 'first_name', type: 'name'}, 
{label: 'Last name', key: 'last_name'}, 
{label: 'Business name', key: 'bussiness_name'},
{label: 'Email Address', key: 'email'},
{label: 'Phone number', key: 'phone_no'}, 
{label: 'Address', key: 'address'}, 
{label: 'State', key: 'state'}, 
{label: 'City', key: 'city'},
{label: 'Zip Code', key: 'zip_code'},
]

const data = [
	{
		first_name: 'test123',
		last_name: 'test123',
		bussiness_name: 'test name',
		email: 'test email',
		phone_no: 'test no',
		address: 'test address',
		state: 'test state',
		city: 'test city',
		zip_code: 'test zip',
	},
	{
		first_name: 'test123',
		last_name: 'test123',
		bussiness_name: 'test name',
		email: 'test email',
		phone_no: 'test no',
		address: 'test address',
		state: 'test state',
		city: 'test city',
		zip_code: 'test zip',
	},
	{
		first_name: 'test123',
		last_name: 'test123',
		bussiness_name: 'test name',
		email: 'test email',
		phone_no: 'test no',
		address: 'test address',
		state: 'test state',
		city: 'test city',
		zip_code: 'test zip',
	},
	{
		first_name: 'test123',
		last_name: 'test123',
		bussiness_name: 'test name',
		email: 'test email',
		phone_no: 'test no',
		address: 'test address',
		state: 'test state',
		city: 'test city',
		zip_code: 'test zip',
	}
]

class ImportCustomers extends React.Component {

	handleSubmit = () => {
		this.props.dispatch(addCustomer({
			"firstName" : "Alex",
			"lastName" : "P",
			"email" : "KC180 Supreme Grinder",
			"phone" : 1234567890,
			"zipcode" : 12456,
			"cityId" : 1
		})).then(res => {
		  if (res.status === 200) {
			toast.success('Customer added successfully')
		  } else {
			toast.error(res.message);
		  }
		});
	  }
  
	render(){
		return (
			<>
			<OnboardingSteps step={5} onContinue={() => this.props.history.push('products')} />
			<div className="contentContainerFull">
				<div className="innerFullCon">
				<div className="cardHeader noborder">
					<h4>Customers</h4>
					<p>Add or import products and manage it.</p>
					<div className="topActionBar">
					<button className="btn">Import CSV</button>
					<button className="btn gsuite">Suite</button>
					<button className="sendBtn attach" onClick={this.handleSubmit}>
						<CustomIcon icon="Header/Icon/Add" />
					</button>
					</div>
				</div>
				<div className="tableBox">
					<TableContent columns={columns} data={data} />
					<div className="addNewItem">
					<a>+ Add a Customer</a>
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
)(ImportCustomers);