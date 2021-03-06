import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import classNames from "classnames";
import { Table, Button, Row, Col } from "antd";
import CustomizePeers from "./CustomizePeers";
import PeersTable from "./PeersTable";

const getFilterPeersData = (arr, obj) => {
  let result = [];
  Object.values(obj).forEach(e => result.push(e.stats));
  return result.filter(e => arr.indexOf(e.symbol) < 0);
};
const getPeersDataArr = obj => {
  let result = [];
  Object.values(obj).forEach(e => result.push(e.stats));
  return result;
};

class SymbolPeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCustomizePeers: false,
      unSelectedPeers: [],
      prevUnselectedPeers: []
    };
  }
  handleShowCustomizePeers = e => {
    this.setState({
      showCustomizePeers: true,
      prevUnSelectedPeers: this.state.unSelectedPeers.concat()
    });
  };
  onClickSelectPeers = e => {
    const target = e.target.name;
    const unSelectedPeers = this.state.unSelectedPeers;
    const symbol = e.target.name.split("-")[0];
    const position = unSelectedPeers.indexOf(symbol);
    let copy = unSelectedPeers.concat();
    copy.splice(position, 1);
    position < 0
      ? this.setState({
          unSelectedPeers: unSelectedPeers.concat(symbol)
        })
      : this.setState({
          unSelectedPeers: copy
        });
  };
  onClickUpdatePeers = e => {
    this.setState({
      showCustomizePeers: false
    });
  };
  onClickCancel = e => {
    this.setState({
      showCustomizePeers: false,
      unSelectedPeers: this.state.prevUnSelectedPeers.concat()
    });
  };
  render() {
    const { showCustomizePeers, unSelectedPeers } = this.state;
    const { peersData, selectedSymbol } = this.props;
    const peersDataArr = getPeersDataArr(peersData);
    const filterPeersData = peersDataArr.filter(
      p => unSelectedPeers.indexOf(p.symbol) < 0
    );
    const customizeBtnClass = classNames({
      hidden: showCustomizePeers
    });
    let selectedTags = [];
    let unSelectedTags = [];
    peersDataArr.forEach(p => {
      if (p.symbol === selectedSymbol) {
        return null;
      } else {
        unSelectedPeers.indexOf(p.symbol) < 0
          ? selectedTags.push(p.symbol + "-" + p.companyName)
          : unSelectedTags.push(p.symbol + "-" + p.companyName);
      }
    });
    return (
      <div className="SymbolPeers">
        <div className="SymbolPeersHead">
          <h2>Peers</h2>
          <Button
            className={customizeBtnClass}
            type="primary"
            onClick={this.handleShowCustomizePeers}
          >
            Customize peers
          </Button>
        </div>
        <Row>
          <Col span={showCustomizePeers ? 16 : 24}>
            <PeersTable filterPeersData={filterPeersData} />
          </Col>
          <Col span={showCustomizePeers ? 8 : 0}>
            <CustomizePeers
              selectedTags={selectedTags}
              unSelectedTags={unSelectedTags}
              onClickSelectPeers={this.onClickSelectPeers}
              onClickUpdatePeers={this.onClickUpdatePeers}
              onClickCancel={this.onClickCancel}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

SymbolPeers.propTypes = {};
SymbolPeers.defaultProps = {};

export default SymbolPeers;
