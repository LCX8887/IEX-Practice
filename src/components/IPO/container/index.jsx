import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import IPOTable from '../components/IPOTable';






class IPO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IPOTodayColumns:[{
                title: 'Symbol',
                dataIndex: 'Symbol',
                key: 'Symbol',
              }, {
                title: 'Company',
                dataIndex: 'Company',
                key: 'Company',
              }, {
                title: 'Price',
                dataIndex: 'Price',
                key: 'Price',
              },{
                title: 'Shares',
                dataIndex: 'Shares',
                key: 'Shares',
              },{
                title: 'Amount',
                dataIndex: 'Amount',
                key: 'Amount',
              },{
                title: 'Percent',
                dataIndex: 'Percent',
                key: 'Percent',
              },{
                title: 'Market',
                dataIndex: 'Market',
                key: 'Market',
              }],
            IPOTodayTarget:'today-ipos',
            
            IPOCalendarTitle:['Symbol','Company','Expected','Price','Shares','Amount','Float','Percent','Market'],
            IPOCalendarColumns:[{
                title: 'Symbol',
                dataIndex: 'Symbol',
                key: 'Symbol',
              }, {
                title: 'Company',
                dataIndex: 'Company',
                key: 'Company',
              }, {
                title: 'Expected',
                dataIndex: 'Expected',
                key: 'Expected',
              },{
                title: 'Price',
                dataIndex: 'Price',
                key: 'Price',
              },{
                title: 'Shares',
                dataIndex: 'Shares',
                key: 'Shares',
              },{
                title: 'Amount',
                dataIndex: 'Amount',
                key: 'Amount',
              },{
                title: 'Float',
                dataIndex: 'Float',
                key: 'Float',
              },{
                title: 'Percent',
                dataIndex: 'Percent',
                key: 'Percent',
              },{
                title: 'Market',
                dataIndex: 'Market',
                key: 'Market',
              }],
            IPOCalendarTarget:'upcoming-ipos',
        };  
           
    }
   
    
    render() {        
        const { IPOTodayColumns,IPOTodayTarget,IPOCalendarColumns,IPOCalendarTarget } = this.state;
        return (
            <div className='IPO'>
                <div className='IPOToday'>
                    <h2>Today's Expected IPOs</h2>
                    <IPOTable                    
                            columns={IPOTodayColumns}
                            target={IPOTodayTarget}
                        />
                </div>
                <div className='IPOCalendar'>
                    <h2>IPO Calendar</h2>
                    <IPOTable                
                        columns={IPOCalendarColumns}
                        target={IPOCalendarTarget}
                    />
                </div>
            </div>
        );
    }
}




export default IPO;
