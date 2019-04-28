import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchLists } from '../flow/actions';
import { Table } from 'antd';

class SpecialListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchLists(this.props.target);
  }

  render() {
    const { listData, lastUpdated, target, title, columns } = this.props;
    let listDetails = [];
    listDetails = listData[target];
    const day = new Date(lastUpdated).toDateString();
    const time = new Date(lastUpdated).toTimeString().slice(0, 8);
    const updatedTime = day + ',' + time;
    const tableHead = (
      <div className="SpecialListTableHeader">
        <h2>{title}</h2>
        <p>{updatedTime}</p>
      </div>
    );
    return (
      <div className="SpecialListTable">
        <Table
          className="SpecialListTableContent"
          dataSource={listDetails}
          columns={columns}
          pagination={false}
          title={() => tableHead}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listData: state.SpecialListReducer,
  lastUpdated: state.SpecialListReducer.lastUpdated,
});
const mapDispatchToProps = {
  fetchLists,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialListTable);
