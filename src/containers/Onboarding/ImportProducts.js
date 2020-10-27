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
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { toast } from "react-toastify";
import {addProduct} from '../../api/auth'

const statusOptions = [
  {label: 'Available', value: 'available'},
  {label: 'In-Service', value: 'inService'},
  {label: 'Sold', value: 'sold'},
]

const columns = [
  { label: 'Model', key: 'model' },
  { label: 'Model name', key: 'model_name' },
  { label: 'Make', key: 'make' },
  { label: 'Category', key: 'category' },
  { label: 'Status', key: 'status', options: 'statusOptions' },
  { label: 'Price', key: 'price' },
  { label: 'Tags', key: 'tag', type: 'chips' }
]

const data = [
  {
    model: 'test123',
    model_name: 'test123',
    make: 'test name',
    category: 'test no',
    status: 'test state',
    price: 'test city',
    tag: 'test zip',
  },
  {
    model: 'test123',
    model_name: 'test123',
    make: 'test name',
    category: 'test no',
    status: 'test state',
    price: 'test city',
    tag: 'test zip',
  },
  {
    model: 'test123',
    model_name: 'test123',
    make: 'test name',
    category: 'test no',
    status: 'test state',
    price: 'test city',
    tag: 'test zip',
  }
]

class ImportProducts extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      openModal: false,
      openAddProductForm: false,
      model: ''
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleOpenModal = () => {
    this.setState({openModal: !this.state.openModal})
  }

  handleOpenAddProductForm = () => {
    this.setState({openAddProductForm: !this.state.openAddProductForm})
  }
  // console.log(props, 'test123')
  // const [openModal, setOpenModal] = useState(false)

  handleSubmit = () => {
    this.props.dispatch(addProduct({
      "description" : "a well known tested product",
      "model" : "Yash",
      "model_name" : "KC180 Supreme Grinder",
      "make" : "Vent",
      "hours" : 12,
      "categrory" : "195",
      "Stock_no" : 226385,
      "vin_no" : "KC180-AB12",
      "price" : "KC180-AB12",
      "status" : 1,
      "tag" : "KC180-AB12"
  
  })).then(res => {
      if (res.status === 200) {
        toast.success('Product added successfully')
      } else {
        toast.error(res.message);
      }
    });
  }

  render(){
    let newData = null
    if(this.state.openAddProductForm){
      newData = [
        {
          model: <input onChange={(event) => this.onChange(event)} name="model" type="text" style={{width: '48px'}} onBlur={this.handleSubmit}/>,
          model_name: <input name="model_name" type="text" style={{width: '48px'}}/>,
          make: <input name="make" type="text" style={{width: '48px'}}/>,
          category: <input name="category" type="text" style={{width: '48px'}}/>,
          status: <input name="status" type="text" style={{width: '48px'}}/>,
          price: <input name="price" type="text" style={{width: '48px'}}/>,
          tag: <input name="tag" type="text" style={{width: '48px'}}/>,
        },

        ...data
      ]
    }

    return (
      <>
        <OnboardingSteps step={4} onContinue={() => this.props.history.push('importcustomers')} />
        <div className="contentContainerFull">
          <div className="innerFullCon">
            <div className="cardHeader noborder">
              <h4>Products</h4>
              <p>Add or import products and manage it.</p>
              <div className="topActionBar">
                <button className="btn" onClick={this.handleOpenModal}>Import CSV</button>
                <button className="sendBtn attach" onClick={this.handleOpenAddProductForm}>
                  <CustomIcon icon="Header/Icon/Add" />
                </button>
                <button className="sendBtn">
                  <CustomIcon icon="Header/Icon/More" />
                </button>
              </div>
  
            </div>
            <div className="tableBox">
              <TableContent 
                columns={columns} 
                data={this.state.openAddProductForm ? newData :data} 
                statusOptions={statusOptions}
              />
              <div className="addNewItem">
                <a>+ Add a product</a>
              </div>
            </div>
          </div>
        </div>
  
        <Modal isOpen={this.state.openModal} className="dropFileModal" toggle={() => this.handleOpenModal()}>
          <ModalBody>
            <div className="importContentModal">
              <div className="cardHeader">
                <h4>Choose a CSV file</h4><div className="iconCon">
                  <i className="fa fa-times" />
                </div>
                <p>Add or import products and manage it.</p>
              </div>
              <div className="dropCon">
                <Button color="primary" className="mainBtn">Choose a .CSV file</Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
  
        {/*<div className="mainLoading">
            <div className="loadingbox"></div>
            <p>Importing...</p>
          </div>*/}
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
)(ImportProducts);