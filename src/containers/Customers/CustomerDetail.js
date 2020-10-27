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
import SideDrawer from '../../components/cards/SideDrawer'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'

const columns = [
	{ label: 'Date', key: 'date' },
	{ label: 'Product', key: 'product' },
	{ label: 'Price', key: 'price' },
	{ label: 'Via', key: 'via' },
	{ label: 'Assign to', key: 'assign_to' },
	{ label: 'Reporting to', key: 'report_to' }
]

const data = [
	{
		date: 'test123',
		product: 'test123',
		price: 'test name',
		via: 'test no',
		assign_to: 'test address',
		report_to: 'test state'
	},
	{
		date: 'test123',
		product: 'test123',
		price: 'test name',
		via: 'test no',
		assign_to: 'test address',
		report_to: 'test state'
	},
	{
		date: 'test123',
		product: 'test123',
		price: 'test name',
		via: 'test no',
		assign_to: 'test address',
		report_to: 'test state'
	},
	{
		date: 'test123',
		product: 'test123',
		price: 'test name',
		via: 'test no',
		assign_to: 'test address',
		report_to: 'test state'
	}
]

const bottomTabs = ["DealMode", "Shared", "Order Out", "Order In", "Sold"]

function CustomerDetail(props) {
	console.log(props, 'test123')
	const [activeTab, setActiveTab] = useState(0)

	const onChangeTab = (currentTab) => {
		setActiveTab(currentTab)
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
								Order In
						</DropdownItem>
							<DropdownItem>
								Order Out
						</DropdownItem>
							<DropdownItem>
								Sold
						</DropdownItem>
							<DropdownItem>
								View Details
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
			<div className="contentContainerFull teamDescription">
				<div className="innerFullCon leftSideBar">
					<div className="tableBox">
						<ul className="listCon timeLineContainer">
							<li className="listItem active">
								<div className="userCard">
									<div className="userCon">
										<CustomIcon icon="Placeholder/Person/Small" />
									</div>
									<span>Customer</span>
								</div>
								<div className="infoBox">
									<h4>
										Timothy Diermann
						        <CustomIcon icon="Header/Icon/More" />
									</h4>
									<p>Chris Farming</p>
									<p>Country RD 25, Windom, MN</p>
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
							<li className="listItem active">
								<div className="userCard">
									<div className="userCon">
										<CustomIcon icon="Placeholder/Person/Small" />
									</div>
									<span>Sales Rep</span>
								</div>
								<div className="infoBox">
									<h4>
										Timothy Diermann
						        <CustomIcon icon="Header/Icon/More" />
									</h4>
									<p>Chris Farming</p>
									<p>Country RD 25, Windom, MN</p>
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
									<p>Chris Farming</p>
									<p>Country RD 25, Windom, MN</p>
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
					</div>
				</div>
				<div className="innerFullCon rightSection">
					<div className="detailCards overviewCards" style={{ marginTop: 20 }}>
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
					<div className="cardHeader noborder lessPadding">
						<div className="bottomTabs">
							<HeadingBox
								activeTab={activeTab}
								tabs={bottomTabs}
								noRightSection
								onChangeTab={onChangeTab}
							/>
						</div>
						<SideDrawer />
						<div className="topActionBar">
							{/*<button className="btn">Saving...</button>*/}
							<div className="searchTabs">
								<CustomIcon icon="Search" />
								<input type="text" className="form-control" placeholder="Search" />
							</div>
						</div>
					</div>
					<div className="tableBox">
						<TableContent columns={columns} data={data} tableActions={renderTableActions()} />
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
)(CustomerDetail);