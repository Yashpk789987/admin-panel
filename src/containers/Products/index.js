import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";
import OnboardingSteps from "../../components/common/OnboardingSteps";
import HeadingBox from "../../components/common/HeadingBox";
import ItemCard from "../../components/cards/ItemCard";
import LeftSideBar from "../../components/cards/LeftSideBar";
import ListSideBar from "../../components/cards/ListSideBar";
import TableContent from "../../components/common/TableContent";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import CustomIcon from "../../components/common/CustomIcon";
import NavigationArrow from "../../components/common/NavigationArrow";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { Link, NavLink } from "react-router-dom";
import { getProducts, addProducts } from "../../api/product";
import InfiniteScroll from "react-infinite-scroller";
import {
  addNewProducts,
  onChangeProduct,
  removeNewProducts,
} from "../../actions/product";

const statusOptions = [
  { label: "Available", value: "available" },
  { label: "In-Service", value: "inService" },
  { label: "Sold", value: "sold" },
];

const columns = [
  { label: "Make", key: "make", hasCheckbox: true, minWidth: 200 },
  { label: "Model", key: "model" },
  { label: "Model name", key: "modelName" },
  { label: "City", key: "city" },
  { label: "State", key: "state" },
  { label: "Price", key: "price" },
  { label: "Region", key: "region" },
  { label: "Stock No", key: "stockNo" },
  { label: "Type", key: "type" },
  { label: "FRAN", key: "fran" },
  { label: "L_O_Business", key: "L_O_Business" },
  { label: "Category", key: "category" },
  { label: "Product Category", key: "product_category" },
  { label: "VIN NO", key: "vinNo" },
  { label: "Hours", key: "hours" },
  { label: "Tags", key: "tag", type: "chips" },
  { label: "Status", key: "productStatus", options: "statusOptions" },
  { label: "Customer", key: "customer", type: "name" },
  { label: "Sold by", key: "sold_by", type: "name" },
  { label: "Marked Sold", key: "marked_sold" },
  { label: "Wholesale", key: "wholesale" },
  { label: "Sale Date", key: "sale_date" },
  { label: "Sales Value", key: "sales_value" },
  { label: "Margin", key: "margin" },
];

const formObject = {
  model: "",
  modelName: "",
  make: "",
  hours: null,
  categrory: "",
  stockNo: "",
  vinNo: "",
  price: "",
  productStatusId: null,
  tag: "",
  description: "this is description",
  productStatusId: 1,
  isNew: true,
};

function Products(props) {
  console.log(props, "test123");
  const [loading, setloading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [newItems, setNewItems] = useState([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setloading(true);
    props.dispatch(getProducts(page)).then((res) => {
      setloading(false);
      setPage(page + 1);
      if (res.length < 10) {
        setHasMore(false);
      }
    });
  };

  const addNew = () => {
    props.dispatch(addNewProducts(JSON.parse(JSON.stringify(formObject))));
  };

  const onChange = (e, key, item, index) => {
    console.log(e, key, item, index, "test");
    props.dispatch(onChangeProduct(e.target.value, key, item, index));
  };

  const loadFunc = () => {
    if (!loading) {
      console.log(page, "page");
      fetchProducts();
    }
  };

  const onSave = (item, index) => {
    if (!item.model || !item.modelName || !item.make) {
      return;
    }
    setSaving(true);
    props.dispatch(addProducts(item, index)).then((res) => {
      setSaving(false);
    });
  };

  const removeRow = (index) => {
    props.dispatch(removeNewProducts(index));
  };

  const renderTableActions = () => {
    return (
      <div className="table-actions">
        <button className="sendBtn">
          <UncontrolledDropdown className="moreOptionsConnew" direction="left">
            <DropdownToggle>
              <button className="sendBtn">
                <CustomIcon icon="Header/Icon/More" />
              </button>
            </DropdownToggle>
            <DropdownMenu>
              <NavLink to="/productsarchived">
                <DropdownItem>
                  <CustomIcon icon="Archive" />
                  View Archive
                </DropdownItem>
              </NavLink>
            </DropdownMenu>
          </UncontrolledDropdown>
        </button>
        <button
          className="sendBtn"
          onClick={() => props.history.push("productdetail")}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  };

  return (
    <>
      <Header history={props.history} />
      <div className="contentContainerFull">
        <div className="innerFullCon">
          <div className="cardHeader noborder">
            <h4>Products</h4>
            <p>Add or import products and manage it.</p>
            <div className="topActionBar">
              {saving ? <button className="btn">Saving...</button> : ""}
              <div className="searchTabs">
                <CustomIcon icon="Search" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <UncontrolledDropdown className="moreOptionsCon">
                <DropdownToggle>
                  <button className="sendBtn">
                    <CustomIcon icon="Header/Icon/More" />
                  </button>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <CustomIcon icon="File" />
                    Import CSV
                  </DropdownItem>
                  <NavLink to="/productsarchived">
                    <DropdownItem>
                      <CustomIcon icon="Archive" />
                      View Archive
                    </DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <button className="sendBtn " onClick={() => addNew()}>
                <CustomIcon icon="Header/Icon/Add" />
              </button>
            </div>
          </div>
          <div className="tableBox">
            <InfiniteScroll
              pageStart={page}
              loadMore={loadFunc}
              hasMore={hasMore}
              loader={
                <div className="tableLoading" key={0}>
                  Loading ...
                </div>
              }
              threshold={150}
              useWindow={false}
              initialLoad={false}
            >
              <TableContent
                columns={columns}
                statusOptions={statusOptions}
                data={props.product.allProducts}
                loading={loading}
                tableActions={renderTableActions()}
                hasVerticalScroll
                onChange={onChange}
                onSave={onSave}
                removeRow={removeRow}
              />
              {/*<div className="addNewItem">
                <a>+ Add a product</a>
              </div>*/}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  product: state.product,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
