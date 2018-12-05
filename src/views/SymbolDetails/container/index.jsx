import React, { Component } from "react";
import { StockDetails } from "../../../components/index";
import { Layout, Row, Col } from "antd";
import { withRouter } from "react-router-dom";

const { Header, Footer, Content, Sider } = Layout;

class SymbolDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const location = this.props.match.params.selectedSymbol;
    return (
      <div className="StockDetails">
        <StockDetails selectedSymbol={location} />
      </div>
    ); 
  }
}

export default withRouter(SymbolDetails);
