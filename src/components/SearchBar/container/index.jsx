import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';
import SearchResult from '../components/SearchResult';
import { Input,Row,Col } from 'antd';
import 'antd/dist/antd.css'



class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
           searchKeyWords: '',
           searchResult: [],

        };  
        this.handleSearchChange = this.handleSearchChange.bind(this);   
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPosts());
    }
    handleSearchChange = e => {
        const value = e.target.value;
        const { symbols } = this.props;
        var result = [];
        for(var i=0; i<symbols.length;i++){
            if(isMatching(value,symbols[i])){
                result.push(symbols[i]);
            }
        }
        this.setState({
            searchKeyWords: value,
            searchResult: result, 
        });
    }
    render() {
        const Search = Input.Search;
        const { searchResult } = this.state;
        const handleSearchChange = this.handleSearchChange;
        return (            
            <Row type='flex' justify='center'>
                <Col span={16}>
                    <Search 
                        placeholder='search'
                        onChange={handleSearchChange}
                    />
                    <SearchResult
                        searchResult={searchResult}
                    />
                </Col>
            </Row>
           
        );
    }
}


const mapStateToProps = state => ({
    symbols:state.SearchBarReducer.symbols,
});

function isMatching(value,obj){
    var symbol = obj.symbol.toUpperCase();
    var name = obj.name.toUpperCase();
    var keyWord = value.toUpperCase();
    if(keyWord === ''){
        return false;
    }else if(symbol.indexOf(keyWord) === 0 || name.indexOf(keyWord) === 0){
        return true;
    }else{
        return false;
    }
}
SearchBar.propTypes = {

}
SearchBar.defaultProps = {
    //symbols:[],
}

export default connect(
  mapStateToProps,
)(SearchBar);
