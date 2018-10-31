import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';
import SymbolSummary from '../components/SymbolSummary';




class MostActive extends Component {
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
        const { mostActive } = this.props;

        return (
            <div>
                {mostActive.map((item,index) => <SymbolSummary 
                                                    key={index}
                                                    symbol={item.symbol}
                                                    name={item.companyName}
                                                    price={item.latestPrice}
                                                    change={item.changePercent}/>
                )}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    mostActive:state.MostActiveReducer.mostActive,
});


MostActive.propTypes = {

}
MostActive.defaultProps = {
   
}

export default connect(
  mapStateToProps,
)(MostActive);
