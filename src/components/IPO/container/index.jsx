import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { fetchIPOs } from "../flow/actions";
import { Table } from "antd";

const IPOTodayTitle = "Today's Expected IPOs";
const IPOCalendarTitle = "IPO Calendar";
const IPOTodayTarget = "today-ipos";
const IPOCalendarTarget = "upcoming-ipos";
const IPOTodayColumns = [
  {
    title: "Symbol",
    dataIndex: "Symbol",
    key: "Symbol"
  },
  {
    title: "Company",
    dataIndex: "Company",
    key: "Company"
  },
  {
    title: "Price",
    dataIndex: "Price",
    key: "Price"
  },
  {
    title: "Shares",
    dataIndex: "Shares",
    key: "Shares"
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount"
  },
  {
    title: "Percent",
    dataIndex: "Percent",
    key: "Percent"
  },
  {
    title: "Market",
    dataIndex: "Market",
    key: "Market"
  }
];
const IPOCalendarColumns = [
  {
    title: "Symbol",
    dataIndex: "Symbol",
    key: "Symbol"
  },
  {
    title: "Company",
    dataIndex: "Company",
    key: "Company"
  },
  {
    title: "Expected",
    dataIndex: "Expected",
    key: "Expected"
  },
  {
    title: "Price",
    dataIndex: "Price",
    key: "Price"
  },
  {
    title: "Shares",
    dataIndex: "Shares",
    key: "Shares"
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount"
  },
  {
    title: "Float",
    dataIndex: "Float",
    key: "Float"
  },
  {
    title: "Percent",
    dataIndex: "Percent",
    key: "Percent"
  },
  {
    title: "Market",
    dataIndex: "Market",
    key: "Market"
  }
];

class IPO extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchIPOs();
  }
  render() {
    const { ipoData } = this.props;
    const ipoTodayData =
      Object.keys(ipoData).length === 0 ? [] : ipoData["today-ipos"].viewData;
    const ipoUpcomingData =
      Object.keys(ipoData).length === 0
        ? []
        : ipoData["upcoming-ipos"].viewData;
    return (
      <div className="IPO">
        <div className="IPOToday">
          <Table
            dataSource={ipoTodayData}
            columns={IPOTodayColumns}
            pagination={false}
            title={() => IPOTodayTitle}
          />
        </div>
        <div className="IPOCalendar">
          <Table
            dataSource={ipoUpcomingData}
            columns={IPOCalendarColumns}
            pagination={false}
            title={() => IPOCalendarTitle}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ipoData: state.IPOReducer.ipoData
});
const mapDipatchToProps = {
  fetchIPOs
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(IPO);
