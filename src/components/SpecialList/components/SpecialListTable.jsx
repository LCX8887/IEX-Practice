import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';
import { Table } from 'antd';




class SpecialListTable extends Component {
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
        const { listData,lastUpdated } = this.props;
        var listDetails = [];      
        listDetails = listData[this.props.target];
        if(listDetails !== undefined){
            for(var i=0;i<listDetails.length;i++){
                listDetails[i].coName = <div className='coName'><p>{listDetails[i].symbol}</p><p>{listDetails[i].companyName}</p></div>;
            }
        }
        
        
        var day = new Date(lastUpdated).toDateString();
        var time= new Date(lastUpdated).toTimeString().slice(0,8);
        var updatedTime = day+','+time;

        return (
            <div className='SpecialListTable'>
                <div className='SpecialListTableHeader'>
                    <h3>{this.props.title}</h3>
                    <p>{updatedTime}</p>
                </div>
                <Table className='SpecialListTableContent' dataSource={listDetails} columns={this.props.columns} pagination={false}/>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    listData:state.SpecialListReducer,
    lastUpdated:state.SpecialListReducer.lastUpdated,
});


SpecialListTable.propTypes = {

}
SpecialListTable.defaultProps = {
  
}

export default connect(
  mapStateToProps,
)(SpecialListTable);
