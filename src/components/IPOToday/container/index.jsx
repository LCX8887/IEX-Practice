import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';
import ListDetails from '../../ListDetails';






class IPOToday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:['Symbol','Company','Price','Shares','Amount','Percent','Market'],
        };  
           
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPosts());
    }
    
    render() {
        const { ipoToday } = this.props;
        const title = this.state.title;
        if(ipoToday.length >0 ){
            var ipoTodayDetailsAsTitle = getDetails(ipoToday,title);
        }
        

        return (
            <div>
               <ListDetails                     
                    title={title}
                    details={ipoTodayDetailsAsTitle}
                />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    ipoToday:state.IPOTodayReducer.ipoToday,
});

const getDetails = (ipoToday,title) => {
    var result = [];
    for(var i=0;i<ipoToday.length;i++){
        var item=[];
        for(var j=0;j<title.length;j++){
            item.push(ipoToday[i][title[j]]);
        }
        result.push(item);
    }
    return result;

}
IPOToday.propTypes = {

}
IPOToday.defaultProps = {
   
}

export default connect(
  mapStateToProps,
)(IPOToday);
