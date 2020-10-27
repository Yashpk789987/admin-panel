import React, { useState } from 'react';
import CustomIcon from './CustomIcon'
import { Button } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';

const steps = [
{label: 'Company Profile', link: 'companyprofile'},
{label: 'Locations', link: 'regions'},
{label: 'Team', link: 'importteam'},
{label: 'Import Products', link: 'importproducts'},
{label: 'Import Customers', link: 'importcustomers'}
]

function OnboardingSteps(props) {
  console.log(props, 'test')

  const renderClass = (index) => {
    if (props.step > (index + 1)) {
      return 'passed'
    } else if ((index + 1) === props.step) {
      return 'active'
    }
  }
  
  const renderMenu = () => {
    return <div className="centerSide">
              <ul>
                {steps.map((item, i) => {
                  if (props.step > (i + 1)) {
                    return  <li className={renderClass(i)}>
                            <Link to={item.link}>
                              <span className="radioBtn"></span>
                              {item.label}
                            </Link>
                          </li>
                  } else {
                    return  <li className={renderClass(i)}>
                            <a>
                              <span className="radioBtn"></span>
                              {item.label}
                            </a>
                          </li>  
                  }
                })}
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
      			<Button color="primary" className="commonBtn" onClick={() => props.onContinue()}>Continue</Button>
      		</li>
      	</ul>
      </div>
    </div>
  );
}

export default OnboardingSteps;
