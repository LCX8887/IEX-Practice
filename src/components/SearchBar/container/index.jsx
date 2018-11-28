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
    };
  }
  componentDidMount() {
    this.props.fetchSymbols();
  }

  handleSearchChange = (e) => {
    const { value } = e.target;
    this.setState((prevState) => ({ searchKeyword: value }));
  };

  handleSelectSymbol = (e) => {
    this.setState({ searchKeyword: "" });
    this.props.selectSymbol(e.target.value);
  };

  render() {
    const { searchKeyword } = this.state;
    const searchText = searchKeyword.toLowerCase();
    const { symbols } = this.props;
    const filterData = symbols.filter(
      (s) =>
        s.name.toLowerCase().indexOf(searchText) > -1 ||
        s.symbol.toLowerCase().indexOf(searchText) > -1
    );

    const searchResultClassName = classNames({
      searchResultList: true,
      hidden: filterData.length === 0 || searchKeyword === "",
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
            value={searchKeyword}
          />
          <SearchResult
            searchResult={filterData}
            searchResultClassName={searchResultClassName}
            handleSelectSymbol={this.handleSelectSymbol}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  symbols: state.SearchBarReducer.symbols,
});

const mapDispatchToProps = {
  fetchSymbols,
  selectSymbol,
};

SearchBar.propTypes = {};
SearchBar.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
