import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import ListTable from '../components/SpecialListTable';

class SpecialList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists:[{title:['Symbol','Change','Price'],attribute:['symbol','change','latestPrice'],target:'infocus'},
           {title:['Symbol','Change','Price'],attribute:['symbol','change','latestPrice'],target:'gainers'},{title:['Symbol','Change','Price'],attribute:['symbol','change','latestPrice'],target:'losers'},            
           {title:['Symblo','Change','Market'],attribute:['symbol','change','latestPrice'],target:'iexpercent'},{title:['Symbol','Change','Volume'],attribute:['symbol','change','latestPrice'],target:'iexvolume'}],
        };  
           
    }
   
    
    render() {        
        const { lists } = this.state;
        return (
            <div>
               {lists.map(list => <ListTable title = {list.title}
                                            target = {list.target}
                                            attribute = {list.attribute} />)}
            </div>
        );
    }
}




export default SpecialList;
