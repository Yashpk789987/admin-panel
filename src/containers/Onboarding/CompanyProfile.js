import React, { useState } from 'react';
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
import { SketchPicker } from 'react-color'

const tabs = ['Avaiable', 'Sold']
const modalTabs = ['Text', 'Email', 'Social']

function CompanyProfile(props) {
  console.log(props, 'test123')
  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [color, setColor] = useState('#3C7A30')

  const renderHeader = () => {
    if (props.match.url === '/profile') {
      return <Header history={props.history} />
    } else {
      return <OnboardingSteps step={1} onContinue={() => props.history.push('regions')} />
    }
  }

  const handleClose = () => {
    setDisplayColorPicker(false)
  }

  const handleChange = (e) => {
    console.log(e)
    setColor(e.hex)
  }

  return (
    <>
      {renderHeader()}
      <div className="contentContainer">
        <div className="leftSidebar">

        </div>
        <div className="centerContent bigArea">
          <div className="centerBoxContainer">
            <div className="cardContainer">
              <div className="cardBox">
                <div className="innerCardBox">
                  <div className="cardHeader">
                    <h4>Owner Details</h4>
                    <p>Add or manage company profile.</p>
                  </div>
                  <div className="cardBody">
                    <div className="customerDetail">
                      <TextField label="Admin Email Address" variant="outlined" className="formElement" size="small" />
                      <TextField label="Business Name" variant="outlined" className="formElement" size="small" />
                      <TextField label="Business Owner" variant="outlined" className="formElement" size="small" />
                      <TextField label="HQ Address" variant="outlined" className="formElement" size="small" multiline rows={4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardBox uploadCardBox">
                <div className="innerCardBox">
                  <div className="cardHeader">
                    <h4>Brand Logo</h4>
                    <p>Supported file formats are svg, png, and jpeg.</p>
                  </div>
                  <div className="cardBody">
                    <div className="uploadLogoBox">
                      <div className="uploadCon">
                        <input type="file" />
                        <CustomIcon icon="Header/Icon/Add" />
                      </div>
                      <h4>C&B Operations</h4>
                    </div>
                  </div>
                </div>
                <div className="innerCardBox">
                  <div className="cardHeader">
                    <h4>Brand Color</h4>
                    <p>Provide primary #hax code color value of your brand.</p>
                  </div>
                  <div className="cardBody">
                    <div className="uploadLogoBox">
                      <div className="uploadCon" style={{ backgroundColor: color }}>

                      </div>
                      <h4>
                        <span>Choose Color</span>
                        <button className="colorPickerBtn" onClick={() => setDisplayColorPicker(true)}></button>
                      </h4>
                      {displayColorPicker ? <div className="colorPopover">
                        <div className="colorPopoverCover" onClick={() => handleClose()} />
                        <SketchPicker color={color} onChange={(val) => handleChange(val)} />
                      </div> : null
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSidebar">

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
)(CompanyProfile);