import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';
import ListDetails from '../../ListDetails';





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
        const { title,target,attribute } = this.props;
        const { listData } = this.props;
        const listDetails = listData[target];
       
        if(listDetails !== undefined ){
            var listDetailsAsTitle = getDetails(listDetails,attribute);
        }

        return (
            <div>
               <ListDetails                     
                    title={title}
                    details={listDetailsAsTitle}
                />
            </div>
        );
    }
}

const getDetails = (listDetails,attribute) => {
    var result = [];
    for(var i=0;i<listDetails.length;i++){
        var item=[];
        for(var j=0;j<attribute.length;j++){
            item.push(listDetails[i][attribute[j]]);
        }
        result.push(item);
    }
    return result;

}

const mapStateToProps = state => ({
    listData:state.SpecialListReducer,
});


SpecialListTable.propTypes = {

}
SpecialListTable.defaultProps = {
   
}

export default connect(
  mapStateToProps,
)(SpecialListTable);
