import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import SpecialListTable from "../../UI/SpecialListTable/index";
import { Row, Col } from "antd";
const lists = [
  {
    columns: [
      {
        title: "Symbol",
        dataIndex: "symbol",
        key: "Symbol",
        width: "45%",
        render: (text, record) => {
          return (
            <Link to={`/stocks/${record.symbol}`}>
              <div className="Symbol">
                <p>{record.symbol}</p>
                <p>{record.companyName}</p>
              </div>
            </Link>
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
    ],
    target: "gainers",
    title: "Gainers"
  },
  {
    columns: [
      {
        title: "Symbol",
        dataIndex: "symbol",
        key: "Symbol",
        width: "45%",
        render: (text, record) => {
          return (
            <Link to={`/stocks/${record.symbol}`}>
              <div className="Symbol">
                <p>{record.symbol}</p>
                <p>{record.companyName}</p>
              </div>
            </Link>
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
    ],
    target: "losers",
    title: "Losers"
  },
  {
    columns: [
      {
        title: "Symbol",
        dataIndex: "symbol",
        key: "Symbol",
        width: "45%",
        render: (text, record) => {
          return (
            <Link to={`/stocks/${record.symbol}`}>
              <div className="Symbol">
                <p>{record.symbol}</p>
                <p>{record.companyName}</p>
              </div>
            </Link>
          );
        }
      },
      {
        title: "Change",
        dataIndex: "change",
        key: "Change"
      },
      {
        title: "Market",
        dataIndex: "latestPrice",
        key: "Market"
      }
    ],
    target: "iexpercent",
    title: "IEX by percent"
  },
  {
    columns: [
      {
        title: "Symbol",
        dataIndex: "symbol",
        key: "Symbol",
        width: "45%",
        render: (text, record) => {
          return (
            <Link to={`/stocks/${record.symbol}`}>
              <div className="Symbol">
                <p>{record.symbol}</p>
                <p>{record.companyName}</p>
              </div>
            </Link>
          );
        }
      },
      {
        title: "Change",
        dataIndex: "change",
        key: "Change"
      },
      {
        title: "Volume",
        dataIndex: "latestPrice",
        key: "Volume"
      }
    ],
    target: "iexvolume",
    title: "IEX by volume"
  }
];
class SpecialList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row
        className="SpecialList"
        type="flex"
        justify="space-between"
        gutter={0}
      >
        {lists.map((list, index) => (
          <Col span={11}>
            <SpecialListTable
              key={index}
              columns={list.columns}
              target={list.target}
              title={list.title}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

export default SpecialList;
