import {
  SectorHighLights,
  SectorPerformance,
  MostActive,
  IPO,
  SpecialList,
  News,
  MyWatchList,
  InFocus,
} from '../../../components/index';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';

const { Header, Footer, Content, Sider } = Layout;

class MarketView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const watchList = [];
    const watchList =
      Object.keys(this.props.loginUser).length !== 0
        ? this.props.loginUser.watchList
        : this.props.watchList;
    return (
      <Layout>
        <Content className="MarketViewContent">
          <MostActive />
          <Layout className="MarketViewLayout">
            <Content>
              <SectorHighLights />
              <InFocus />
            </Content>
            <Sider className="MarketViewSider" width={400}>
              <MyWatchList watchList={watchList} />
            </Sider>
          </Layout>
          <IPO />
          <SectorPerformance />
          <SpecialList />
          <News />
        </Content>
      </Layout>
    );
  }
}
const mapStateToProps = (state) => ({
  loginUser: state.global.loginUser,
  watchList: state.global.watchList,
});
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketView);
