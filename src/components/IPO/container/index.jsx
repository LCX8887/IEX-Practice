import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import IPOTable from '../components/IPOTable';






class IPO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IPOTodayTitle:['Symbol','Company','Price','Shares','Amount','Percent','Market'],
            IPOTodayTarget:'today-ipos',
            IPOCalendarTitle:['Symbol','Company','Expected','Price','Shares','Amount','Float','Percent','Market'],
            IPOCalendarTarget:'upcoming-ipos',
        };  
           
    }
   
    
    render() {        
        const { IPOTodayTitle,IPOTodayTarget,IPOCalendarTitle,IPOCalendarTarget } = this.state;
        return (
            <div>
               <IPOTable                     
                    title={IPOTodayTitle}
                    target={IPOTodayTarget}
                />
                <IPOTable                     
                    title={IPOCalendarTitle}
                    target={IPOCalendarTarget}
                />
            </div>
        );
    }
}




export default IPO;
