import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSectorDetails } from "../flow/actions";
import { Link } from "react-router-dom";
import { Table } from "antd";
const getNumWithPercent = num => {
  const preFix = num > 0 ? "+" : "";
  const sufFix = "%";
  return preFix + (num * 100).toFixed(2) + sufFix;
};
const showAsBillionOrMillion = value =>
  value === null
    ? ""
    : value < 1000
    ? value
    : value < 1000000
    ? (value / 1000).toFixed(2) + "K"
    : value < 1000000000
    ? (value / 1000000).toFixed(2) + "M"
    : (value / 1000000000).toFixed(2) + "B";
const columns = [
  {
    title: "Symbol",
    dataIndex: "symbol",
    key: "symbol",
    width: "40%",
    render: (text, record) => {
      return (
        <Link to={`/stocks/${record.symbol}`}>
          <div>
            <p>{record.symbol}</p>
            <p>{record.companyName}</p>
          </div>
        </Link>
      );
    }
  },
  {
    title: "Price",
    dataIndex: "close",
    key: "price"
  },
  {
    title: "Change %",
    dataIndex: "changePercent",
    key: "change",
    render: text => getNumWithPercent(text)
  },
  {
    title: "Market Cap",
    key: "marketCap",
    dataIndex: "marketCap",
    render: text => showAsBillionOrMillion(text)
  },
  {
    title: "YTD %",
    dataIndex: "ytdChange",
    key: "ytdChange",
    render: text => getNumWithPercent(text)
  }
];
class SectorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchSectorDetails(this.props.selectedSector);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.selectedSector !== this.props.selectedSector) {
      this.props.fetchSectorDetails(this.props.selectedSector);
    }
  }

  render() {
    const {} = this.props;
    const title = (
      <div>
        <h3>Sector</h3>
        <h2>{this.props.selectedSector}</h2>
      </div>
    );

    return (
      <div className="SectorDetailsContent">
        <Table
          title={() => title}
          columns={columns}
          dataSource={this.props.sectorData}
          pagination={false}
          size="middle"
          scroll={{ x: 800, y: 400 }}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  sectorData: state.SectorDetailsReducer.sectorData
});

const mapDispatchToProps = {
  fetchSectorDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectorDetails);
