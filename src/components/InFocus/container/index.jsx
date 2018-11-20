import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import SpecialListTable from '../../SpecialList/components/SpecialListTable';
import { Row,Col } from 'antd';

class InFocus extends Component {
    constructor(props) {
        super(props);
        this.state = {
           columns:[{
                    title: 'Symbol',
                    dataIndex: 'coName',
                    key: 'Symbol',
                    },{
                    title: 'Change',
                    dataIndex: 'change',
                    key: 'Change',
                    }, {
                    title: 'Price',
                    dataIndex: 'latestPrice',
                    key: 'Price',}],
            target:'infocus',
            title:'Recently in focus',
        };  
           
    }
   
    
    render() {        
        return (
            <div className='InFocus'>            
              <SpecialListTable columns= {this.state.columns}
                                            target = {this.state.target} title={this.state.title}/>
          </div>
        );
    }
}


export default InFocus;


