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
	{ label: 'Role', key: 'role' },
	{ label: 'Reporting to', key: 'report_to' },
	{ label: 'User', key: 'user' },
	{ label: 'Customer', key: 'customer' },
	{ label: 'Product', key: 'product' },
	{ label: 'Text & Chat', key: 'text_chat' },
	{ label: 'Lead', key: 'lead' },
	{ label: 'Report', key: 'report' },
	{ label: 'Platform', key: 'platform' }
]

const data = [
	{
		first_name: 'test123',
		last_name: 'test123',
		bussiness_name: 'test name',
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
		phone_no: 'test no',
		address: 'test address',
		state: 'test state',
		city: 'test city',
		zip_code: 'test zip',
	}
]

function RolePermission(props) {
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
						<h4>Roles & Permissions</h4>
						<p>Add or Manage a Roles.</p>
						<div className="topActionBar">
							<button className="sendBtn ">
								<CustomIcon icon="Header/Icon/Add" />
							</button>
							<button className="sendBtn attach">
								<CustomIcon icon="Header/Icon/More" />
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
)(RolePermission);