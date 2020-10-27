import React, { useState } from "react";
import CustomIcon from "../common/CustomIcon";
import Checkbox from "@material-ui/core/Checkbox";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function TableContent(props) {
  const [currentIndex, setCurrentIndex] = useState(null);

  const renderColumns = () => {
    return (
      <tr>
        {props.columns.map((item, i) => {
          return (
            <th key={i} className={item.hasCheckbox ? "hasCheckbox" : ""}>
              {item.hasCheckbox ? (
                <div className="checkBoxCon">
                  <Checkbox
                    //checked={false}
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </div>
              ) : null}
              {item.label}
            </th>
          );
        })}
        <th></th>
        <th></th>
      </tr>
    );
  };

  const onFocus = (index) => {
    setCurrentIndex(index);
  };

  const onBlur = (index) => {
    setCurrentIndex(null);
  };

  const rendertableCell = (
    value,
    key,
    type,
    options,
    innerKey,
    item,
    index
  ) => {
    if (item.isNew) {
      if (value !== undefined) {
        return (
          <input
            type="text"
            className="form-control"
            onFocus={() => onFocus(index)}
            onBlur={() => onBlur(index)}
            onKeyDown={(e) => {
              if (key === "tag" && e.keyCode === 13) {
                e.preventDefault();
                e.stopPropagation();
                props.onSave(item, index);
              }
            }}
            onChange={(e) => {
              props.onChange(e, key, item, index);
            }}
            value={value}
          />
        );
      }
    }
    if (innerKey) {
      return item[key].length ? item[key][0][innerKey] : "";
    }
    if (type === "name") {
      if (value) {
        return (
          <div className="userCard">
            <div className="userCon">
              <CustomIcon icon="Placeholder/Person/Small" />
            </div>
            {value}
          </div>
        );
      }
    } else if (type === "chips") {
      if (value) {
        return (
          <ul className="chips">
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        );
      }
    } else if (options) {
      return (
        <UncontrolledDropdown className="tableOptions">
          <DropdownToggle>{value && value.status}</DropdownToggle>
          <DropdownMenu>
            {props[options] &&
              props[options].map((item, i) => {
                return <DropdownItem>{item.label}</DropdownItem>;
              })}
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    } else {
      return value;
    }
  };

  const renderData = () => {
    if (!props.loading && !props.data.length) {
      return (
        <tr>
          <td colSpan={props.columns.length + 2}>No Data Found</td>
        </tr>
      );
    }
    if (props.data.length) {
      return props.data.map((item, index) => {
        return (
          <tr key={index} className={currentIndex === index && "currentIndex"}>
            {props.columns.map((col, i) => {
              return (
                <td
                  key={i}
                  style={
                    col.type === "name"
                      ? { minWidth: 150 }
                      : { minWidth: col.minWidth }
                  }
                >
                  {col.hasCheckbox && !item.isNew ? (
                    <div className="checkBoxCon">
                      <Checkbox
                        //checked={false}
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </div>
                  ) : null}
                  {rendertableCell(
                    item[col.key],
                    col.key,
                    col.type,
                    col.options,
                    col.innerKey,
                    item,
                    index
                  )}
                </td>
              );
            })}
            <td align="right">{renderActions(item, index)}</td>
          </tr>
        );
      });
    }
  };

  const renderActions = (item, index) => {
    if (item.isNew) {
      return (
        <div className="table-actions alwaysShow">
          {/* <button className="btn" onClick={() => props.onSave(item, index)}>
            Save
          </button> */}
          <button className="sendBtn" onClick={() => props.removeRow(index)}>
            <i className="fa fa-times" />
          </button>
        </div>
      );
    } else {
      return props.tableActions ? (
        props.tableActions
      ) : (
        <div className="table-actions">
          <button className="sendBtn">
            <CustomIcon icon="Header/Icon/More" />
          </button>
        </div>
      );
    }
  };

  return (
    <div className={props.hasVerticalScroll ? "table-responsive" : ""}>
      <div className="tableContent">
        <table cellpadding="0" cellspacing="0">
          <thead>{renderColumns()}</thead>
          <tbody>{renderData()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TableContent;
