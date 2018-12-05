import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import SpecialListTable from "../../UI/SpecialListTable/index";

const columns = [
  {
    title: "Symbol",
    dataIndex: "symbol",
    width: "45%",
    key: "Symbol",
    render: (text, record) => {
      return (
        <div className="Symbol">
          <p>{record.symbol}</p>
          <p>{record.companyName}</p>
        </div>
      );
    }
  },
  {
    title: "Change",
    dataIndex: "change",
    key: "Change"
  },
  {
    title: "Price",
    dataIndex: "latestPrice",
    key: "Price"
  }
];
const target = "infocus";
const title = "Recently in focus";
class InFocus extends Component {
  render() {
    return (
      <div className="InFocus">
        <SpecialListTable columns={columns} target={target} title={title} />
      </div>
    );
  }
}

export default InFocus;
