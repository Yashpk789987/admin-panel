import React, { useState } from 'react';
import CustomIcon from './CustomIcon'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';

function Header(props) {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const toggleDrawer = (bool) => {
    setDrawerOpen(bool)
  }

  const onLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userData')
    props.history.push('/')
  }

  const renderMenu = () => {
    return <div className="centerSideheader">
      <ul>
        <li>
          <NavLink exact to="/dashboard" activeClassName="active">Dashborad</NavLink>
        </li>
        <li>
          <NavLink exact to="/products" activeClassName="active">Products</NavLink>
        </li>
        <li>
          <NavLink exact to="/customers" activeClassName="active">Customers</NavLink>
        </li>
        <li>
          <NavLink exact to="/sales" activeClassName="active">Sales</NavLink>
        </li>
        <li>
          <NavLink exact to="/team" activeClassName="active">Team</NavLink>
        </li>
        <li>
          <NavLink exact to="/rolepermission" activeClassName="active">Roles & Permissions</NavLink>
        </li>
        <li>
          <NavLink exact to="/leads" activeClassName="active">Leads</NavLink>
        </li>
        <li>
          <NavLink exact to="/chat" activeClassName="active">Chat</NavLink>
        </li>

      </ul>
    </div>
  }

  return (
    <div className="header">
      <div className="leftSide">
        <a href="" className="logoLink">
          <img src="images/logo.png" alt="logo" />
        </a>
      </div>
      {renderMenu()}
      <div className="rightSide">
        <ul className="iconList">
          <li>
            <a href="javascript:void(0);">
              <CustomIcon icon="Navigation/Notifications/Regular" />
            </a>
          </li>
          <li>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle>
                <a className="defaultBG" onClick={() => toggle()}>
                  <CustomIcon icon="Placeholder/Person/Regular" />
                </a>
              </DropdownToggle>
              <DropdownMenu>
                <NavLink to="/profile" activeClassName="active">
                  <DropdownItem>Profile</DropdownItem>
                </NavLink>
                <DropdownItem onClick={() => onLogout()}>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
          <li className="onMobile">
            <a onClick={() => toggleDrawer(true)}>
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>
      </div>

      <Drawer anchor={'right'} open={drawerOpen} onClose={() => toggleDrawer(false)}>
        {renderMenu()}
      </Drawer>
    </div>
  );
}

export default Header;
