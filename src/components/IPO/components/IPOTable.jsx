import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';
import ListDetails from '../../ListDetails';





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
        const { title,target } = this.props;
        const { ipoData } = this.props;
        const ipoDetails = ipoData[target];
       
        if(ipoDetails !== undefined ){
            var ipoDetailsAsTitle = getDetails(ipoDetails,title);
        }

        return (
            <div>
               <ListDetails                     
                    title={title}
                    details={ipoDetailsAsTitle}
                />
            </div>
        );
    }
}

const getDetails = (ipoDetails,title) => {
    var result = [];
    for(var i=0;i<ipoDetails.length;i++){
        var item=[];
        for(var j=0;j<title.length;j++){
            item.push(ipoDetails[i][title[j]]);
        }
        result.push(item);
    }
    return result;

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
