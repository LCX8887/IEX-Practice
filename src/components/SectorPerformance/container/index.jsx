import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import SectorSummary from "../../UI/SectorSummary/index";
import { Layout, Row, Col } from "antd";

const { Header, Content } = Layout;
const bgSrcPrefix = "https://iextrading.com/images/stocks/";
const bgSrcSuffix = ".jpg";
const getDate = lastUpdated => {
  const day = new Date(lastUpdated).toDateString();
  const time = new Date(lastUpdated).toTimeString().slice(0, 8);
  return day + "," + time;
};
class SectorPerformance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getSrcByName = str => {
    const name = str.replace(" ", "%20");
    return bgSrcPrefix + name + bgSrcSuffix;
  };
  render() {
    const { sectors, lastUpdated } = this.props;
    const updatedTime = getDate(lastUpdated);
    return (
      <Layout>
        <Header className="SectorPerformanceHeader">
          <h2>Sector Performance</h2>
          <p>{updatedTime}</p>
        </Header>
        <Content className="SectorPerformanceContent">
          <Row type="flex" justify="start" gutter={16}>
            {sectors.map((sector, index) => (
              <Col key={index} span={index > 7 ? 8 : 6}>
                <SectorSummary
                  name={sector.name}
                  performance={sector.performance}
                  background={this.getSrcByName(sector.name)}
                />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  sectors: state.SectorPerformanceReducer.sectors,
  lastUpdated: state.SectorPerformanceReducer.lastUpdated
});

SectorPerformance.propTypes = {};
SectorPerformance.defaultProps = {};

export default connect(mapStateToProps)(SectorPerformance);
