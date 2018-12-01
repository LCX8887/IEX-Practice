import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { fetchSymbols } from "../flow/actions";
import { selectSymbol } from "../../../store/global/actions";
import SearchResult from "../components/SearchResult";
import { Row, Col, Input, Icon } from "antd";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "antd/dist/antd.css";

const Search = Input.Search;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: "",
      searchResult: []
    };
  }
  componentDidMount() {
    this.props.fetchSymbols();
  }

  handleSearchChange = e => {
    const value = e.target.value;
    const { symbols } = this.props;
    let filterData = [];
    for (var i = 0; i < symbols.length; i++) {
      if (isMatching(value, symbols[i])) {
        filterData.push(symbols[i]);
      }
    }
    this.setState({
      searchKeyword: value,
      searchResult: filterData
    });
  };

  handleSelectSymbol = e => {
    this.props.selectSymbol(e.target.rel);
    this.setState({
      searchKeyword: "",
      searchResult: []
    });
  };
  render() {
    const searchResultClassName = classNames({
      searchResultList: true,
      hidden: this.state.searchResult.length === 0
    });
    return (
      <Row type="flex" justify="center" className="SearchBar">
        <Col span={6}>
          <Link to="/">
            <Icon type="home" />
            <p>IEX Practice</p>
          </Link>
        </Col>
        <Col span={16}>
          <Search
            placeholder="search"
            onChange={this.handleSearchChange}
            value={this.state.searchKeyword}
          />
          <SearchResult
            searchResult={this.state.searchResult}
            searchResultClassName={searchResultClassName}
            handleSelectSymbol={this.handleSelectSymbol}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  symbols: state.SearchBarReducer.symbols
});

const mapDispatchToProps = {
  fetchSymbols,
  selectSymbol
};

function isMatching(value, obj) {
  const symbol = obj.symbol.toUpperCase();
  const name = obj.name.toUpperCase();
  const keyWord = value.toUpperCase();
  if (keyWord === "") {
    return false;
  } else if (symbol.indexOf(keyWord) === 0 || name.indexOf(keyWord) === 0) {
    return true;
  } else {
    return false;
  }
}
SearchBar.propTypes = {};
SearchBar.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
