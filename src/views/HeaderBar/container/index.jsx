import React, { Component } from "react";
import { SearchBar, LoginForm } from "../../../components/index";
import { Layout, Row, Col } from "antd";
import { withRouter } from "react-router-dom";

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const location = this.props.match.params.selectedSector;
    return (
      <div className="HeaderBar">
        <Row>
          <Col span={18}>
            <SearchBar />
          </Col>
          <Col span={6}>
            <LoginForm />
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(HeaderBar);
