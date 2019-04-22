import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delFromWatchList } from '../../../store/global/actions';
import { fetchPosts } from '../flow/actions';
import { Icon, Table } from 'antd';
import { Link } from 'react-router-dom';
const getDate = (lastUpdated) => {
  const day = new Date(lastUpdated).toDateString();
  const time = new Date(lastUpdated).toTimeString().slice(0, 8);
  return day + ',' + time;
};
const getTabletDetails = (arr, obj) => {
  let result = [];
  Object.keys(obj).length === 0
    ? (result = [])
    : arr.forEach((a) =>
        obj.hasOwnProperty(a)
          ? result.push(Object.assign({}, obj[a].quote))
          : []
      );
  return result;
};
class MyWatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: '',
          dataIndex: 'symbol',
          key: 'button',
          width: '5%',
          render: (text, record) => {
            return (
              <button onClick={this.handleDelFromWatchList} value={text}>
                <Icon type="star" theme="filled" />
              </button>
            );
          },
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: '45%',
          render: (text, record) => {
            return (
              <Link to={`/stocks/${record.symbol}`}>
                <div className="Symbol">
                  <p>{record.symbol}</p>
                  <p>{record.companyName}</p>
                </div>
              </Link>
            );
          },
        },
        {
          title: 'Change',
          dataIndex: 'changePercent',
          key: 'changePercent',
          width: '25%',
          render: (text, record) => (text * 100).toFixed(2) + '%',
        },
        {
          title: 'Price',
          dataIndex: 'close',
          key: 'close',
          width: '35%',
        },
      ],
    };
  }
  componentDidMount() {
    this.props.fetchPosts(this.props.watchList.join());
  }
  componentDidUpdate(prevProps) {
    const equar = (a, b) => {
      if (a.length !== b.length) {
        return false;
      } else {
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
    };
    if (!equar(this.props.watchList, prevProps.watchList)) {
      this.props.fetchPosts(this.props.watchList.join());
    }
  }

  handleDelFromWatchList = (e) => {
    this.props.delFromWatchList(e.currentTarget.value);
  };
  render() {
    const { watchList, myWatchList, lastUpdated } = this.props;
    const listData = getTabletDetails(watchList, myWatchList);
    const updatedTime = getDate(lastUpdated);
    const tableHead = (
      <div>
        <h2>My watchlist</h2>
        <Icon type="star" theme="filled" />
        <p>{updatedTime}</p>
      </div>
    );

    return (
      <div className="MyWatchList">
        <Table
          className="WatchList"
          dataSource={listData}
          columns={this.state.columns}
          title={() => tableHead}
          pagination={{ defaultPageSize: 6 }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  myWatchList: state.MyWatchListReducer.myWatchList,
  lastUpdated: state.MyWatchListReducer.lastUpdated,
});

const mapDispatchToProps = {
  delFromWatchList: delFromWatchList,
  fetchPosts: fetchPosts,
};

MyWatchList.propTypes = {};
MyWatchList.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWatchList);
