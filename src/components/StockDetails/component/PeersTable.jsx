import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import classNames from "classnames";
import { Table } from "antd";
const showAsPercent = value =>
  value === null ? "" : (value * 100).toFixed(2) + "%";
const showAsMillion = value =>
  value === null ? "" : (value / 1000000).toFixed(2) + "M";
const showAsBillion = value =>
  value === null ? "" : (value / 1000000000).toFixed(2) + "B";
const showAsKilo = value =>
  value === null ? "" : (value / 1000).toFixed(3) + "K";
const addPercentSymbol = value =>
  value === null ? "" : value.toFixed(3) + "%";
const keepThreeDecimals = value => (value === null ? "" : value.toFixed(3));
const columns = [
  {
    title: "Symbol",
    dataIndex: "symbol",
    key: "symbol",
    fixed: "left"
  },
  {
    title: "MarketCap",
    dataIndex: "marketcap",
    key: "marketcap",
    render: text => showAsBillion(text)
  },
  {
    title: "5d %",
    dataIndex: "day5ChangePercent",
    key: "day5ChangePercent",
    render: text => showAsPercent(text)
  },
  {
    title: "3m %",
    dataIndex: "day30ChangePercent",
    key: "day30ChangePercent",
    render: text => showAsPercent(text)
  },
  {
    title: "YTD %",
    dataIndex: "ytdChangePercent",
    key: "ytdChangePercent",
    render: text => showAsPercent(text)
  },
  {
    title: "1yr %",
    dataIndex: "year1ChangePercent",
    key: "year1ChangePercent",
    render: text => showAsPercent(text)
  },
  {
    title: "5yr %",
    dataIndex: "year5ChangePercent",
    key: "year5ChangePercent",
    render: text => showAsPercent(text)
  },
  {
    title: "52wk low",
    dataIndex: "week52low",
    key: "week52low"
  },
  {
    title: "52wk high",
    dataIndex: "week52high",
    key: "week52high"
  },
  {
    title: "50d MA",
    dataIndex: "day50MovingAvg",
    key: "day50MovingAvg",
    render: text => keepThreeDecimals(text)
  },
  {
    title: "200d MA",
    dataIndex: "day200MovingAvg",
    key: "day200MovingAvg",
    render: text => keepThreeDecimals(text)
  },
  {
    title: "Suprise %",
    dataIndex: "EPSSurprisePercent",
    key: "EPSSurprisePercent",
    render: text => addPercentSymbol(text)
  },
  {
    title: "Beta",
    dataIndex: "beta",
    key: "beta",
    render: text => keepThreeDecimals(text)
  },
  {
    title: "Rev/employee",
    dataIndex: "revenuePerEmployee",
    key: "revenuePerEmployee",
    render: text => showAsKilo(text)
  },
  {
    title: "P/S",
    dataIndex: "priceToSales",
    key: "priceToSales",
    render: text => keepThreeDecimals(text)
  },
  {
    title: "P/B",
    dataIndex: "priceToBook",
    key: "priceToBook",
    render: text => keepThreeDecimals(text)
  },
  {
    title: "Cash",
    dataIndex: "cash",
    key: "cash",
    render: text => showAsBillion(text)
  },
  {
    title: "Profit margin",
    dataIndex: "profitMargin",
    key: "profitMargin",
    fixed: "right"
  }
];
class PeersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.props.filterPeersData}
        pagination={false}
        size="middle"
        scroll={{ x: 1300 }}
      />
    );
  }
}

PeersTable.propTypes = {};
PeersTable.defaultProps = {};

export default PeersTable;
