import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { deleteWatchList } from '../flow/actions';
import { Layout,Row,Col,Card,Icon } from 'antd';

const { Header,Content } = Layout;




class MyWatchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           

        };  
       
    }

    handleDeleteWatchList = (e) => {
        e.preventDefault();
        var target = e.target;
        this.props.deleteWatchList(target);
    }  
    render() {      
      
        return (
            <div>
                <Card title={<div><p>My watchlist</p><Icon type="star" theme='filled'/></div>}>
                    <p>Your watchlist is empty.Build your watchlist by <Icon type="star" theme='filled'/> the stocks you want to follow.</p>
                </Card>
               
            </div>
           
        );
    }
}


const mapStateToProps = state => ({
   myWatchList:state.MyWatchListReducer.myWatchList,
});

const mapDispatchToProps = {
    deleteWatchList:deleteWatchList,
}

MyWatchList.propTypes = {

}
MyWatchList.defaultProps = {

}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MyWatchList);
