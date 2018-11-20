import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { delFromWatchList } from '../../../store/global/actions';
import { fetchPosts } from '../flow/actions';
import { Layout,Card,Icon,Table } from 'antd';

const { Header,Content } = Layout;




class MyWatchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns:[{
                title: '',
                dataIndex: 'button',
                key: 'button',
              }, {
                title: '',
                dataIndex: 'companyName',
                key: 'name',
              }, {
                title: '',
                dataIndex: 'changePercent',
                key: 'changePercent',
              },{
                title: '',
                dataIndex: 'close',
                key: 'close',
              }],
        }; 
        this.handleDelFromWatchList = this.handleDelFromWatchList.bind(this); 
       
    }
    componentDidMount() {
        this.props.fetchPosts(this.props.watchList.join());
    }
    handleDelFromWatchList = (e) => {
        e.preventDefault();
        var target = e.currentTarget.value;
        this.props.delFromWatchList(target);
    }  
    render() {       
        var listData = getTabletDetails(this.props.watchList,this.props.myWatchList,this.handleDelFromWatchList);
        for(var i=0;i<listData.length;i++){
            listData[i].button = <button onClick={this.handleDelFromWatchList} value={listData[i].symbol}><Icon type="star" theme='filled'/></button>;
        }
        return (
            <div>
                <p>My watchlist</p>
                <Table className='WatchList' dataSource={listData} columns={this.state.columns} pagination={{defaultPageSize:2}}/>
            </div>
           
        );
    }
}


const mapStateToProps = state => ({
   watchList: state.global.watchList,
   myWatchList:state.MyWatchListReducer.myWatchList,
});

const mapDispatchToProps = {
    delFromWatchList:delFromWatchList,
    fetchPosts:fetchPosts,
}

MyWatchList.propTypes = {

}
MyWatchList.defaultProps = {

}
const getTabletDetails = (arr,obj,handleDelFromWatchList) => {
    var result=[];
    if(Object.keys(obj).length === 0){
        return result;
    }
    for(var i=0;i<arr.length;i++){
        var item = Object.assign({},obj[arr[i]].quote);
        item.changePercent = (item.changePercent*100).toFixed(2)+'%';
        result.push(item);
    }
    return result;
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MyWatchList);
