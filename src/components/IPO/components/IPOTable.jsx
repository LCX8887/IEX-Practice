import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';
import { Table } from 'antd';





class IPOTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };  
           
    }
    componentDidMount() {
        const { dispatch } = this.props;
        const target = this.props.target;
        dispatch(fetchPosts(target));
    }
    
    render() {
        const { ipoData,target,columns } = this.props;
        const ipoDetails = ipoData[target];
       
        return (
            <Table dataSource={ipoDetails} columns={columns} pagination={false}/>
        );
    }
}

const mapStateToProps = state => ({
    ipoData:state.IPOReducer,
});


IPOTable.propTypes = {

}
IPOTable.defaultProps = {
   
}

export default connect(
  mapStateToProps,
)(IPOTable);
