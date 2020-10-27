import React from 'react';
import CustomIcon from './CustomIcon'

function Departments(props) {

	const renderDepartments = () => {
		if (props.loading) {
			return <div className="tableLoading">Loading...</div>
		} else {
			return <ul className="listCon">
				<li className={`listItem ${props.filter === 'all' && 'active'}`} onClick={() => props.filterTeam('all')}>
          All
      		<button className="sendBtn">
            <CustomIcon icon="Header/Icon/More" />
          </button>
        </li>
				{props.team.allDepartments.map((item, i) => {
					return <li className={`listItem ${props.filter === item.id && 'active'}`} key={i} onClick={() => props.filterTeam(item.id)}>
			            {item.name}
			        		<button className="sendBtn">
			              <CustomIcon icon="Header/Icon/More" />
			            </button>
			          </li>
				})}
			</ul>
		}
	}
  return (
    <>
    	<div className="cardHeader">
        <h4>Departments</h4>
        <p>Add or manage department.</p>
      </div>
      <div className="tableBox">
      	{renderDepartments()}
        {!props.loading ? 
        	<div className="addNewItem noborder">
            <a className="add">+ Add department</a>
          </div>
          :
          null
        }
      </div>
      <div className="bottomBtnCon">
        <button className="btn" onClick={() => props.history.push('orgchart')}>Org-Chart View</button>
      </div>
    </>
  );
}

export default Departments;
