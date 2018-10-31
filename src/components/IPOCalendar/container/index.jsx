import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';





class IPOCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };  
           
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPosts());
    }
    
    render() {
        const { ipoCalendar } = this.props;

        return (
            <div>
               
            </div>
        );
    }
}


const mapStateToProps = state => ({
    ipoCalendar:state.IPOCalendarReducer.mostActive,
});


IPOCalendar.propTypes = {

}
IPOCalendar.defaultProps = {
   
}

export default connect(
  mapStateToProps,
)(IPOCalendar);
