import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchMostActive } from '../flow/actions';
import SymbolSummary from '../components/SymbolSummary';
import { Layout, Row, Col } from 'antd';

const { Header, Content } = Layout;

class MostActive extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchMostActive();
  }

  render() {
    return (
      <Layout>
        <Header className="MostActiveHeader">
          <p>MARKET VIEW</p>
          <h2>Today in the market</h2>
        </Header>
        <Content className="MostActiveContent">
          <Row type="flex" justify="space-around">
            {this.props.mostActive.map((item, index) => (
              <Col xs={{ span: 8 }} sm={{ span: 4 }} lg={{ span: 2 }}>
                <SymbolSummary
                  key={index}
                  symbol={item.symbol}
                  name={item.companyName}
                  price={item.latestPrice}
                  change={item.changePercent}
                />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  mostActive: state.MostActiveReducer.mostActive,
});
const mapDispatchToProps = {
  fetchMostActive,
};

MostActive.propTypes = {};
MostActive.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MostActive);
