import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';
import ListDetails from '../../ListDetails';





class IPOCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:['Symbol','Company','Expected','Price','Shares','Amount','Float','Percent','Market'],
        };  
           
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPosts());
    }
    
    render() {
        const { ipoCalendar } = this.props;
        const title = this.state.title;
        if(ipoCalendar.length >0 ){
            var ipoCalendarDetailsAsTitle = getDetails(ipoCalendar,title);
        }

        return (
            <div>
               <ListDetails                     
                    title={title}
                    details={ipoCalendarDetailsAsTitle}
                />
            </div>
        );
    }
}

const getDetails = (ipoCalendar,title) => {
    var result = [];
    for(var i=0;i<ipoCalendar.length;i++){
        var item=[];
        for(var j=0;j<title.length;j++){
            item.push(ipoCalendar[i][title[j]]);
        }
        result.push(item);
    }
    return result;

}

const mapStateToProps = state => ({
    ipoCalendar:state.IPOCalendarReducer.ipoCalendar,
});


IPOCalendar.propTypes = {

}
IPOCalendar.defaultProps = {
   
}

export default connect(
  mapStateToProps,
)(IPOCalendar);
