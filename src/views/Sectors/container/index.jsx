import React, { Component } from "react";
import { SectorDetails } from "../../../components/index";
import { Layout, Row, Col } from "antd";
import { withRouter } from "react-router-dom";

const { Header, Footer, Content, Sider } = Layout;

class Sectors extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const location = this.props.match.params.selectedSector;
    return (
      <div className="Sectors">
        <SectorDetails selectedSector={location} />
      </div>
    );
  }
}

export default withRouter(Sectors);
