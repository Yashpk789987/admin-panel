import React, {useState} from 'react';

function SideDrawer(props) {
	const [open, setOpen] = useState(false);
  return (
    <div className={open ? 'opened' : ''}>
    	<button className="sideDrawerBtn" onClick={() => setOpen(!open)}>
    		<i className="fas fa-chevron-left"></i>
    	</button>
    	<div className="sideDrawerCon">
    		<div className="innerDrawerCon">
    			<h4>Log History</h4>
    			<ul>
    				<li>
    					Admin has assign to <a>Darryl Weidkamp.</a>
    					<span>1m ago</span>
    				</li>
    				<li>
    					Admin has updated the city.
    					<span>5d ago</span>
    				</li>
    				<li>
    					Admin assign this customer to Armando Gonzele
    					<span>07/20/2020</span>
    				</li>
    			</ul>
    		</div>
    	</div>
    </div>
  );
}

export default SideDrawer;
