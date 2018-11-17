import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MarketView,SearchBar } from './views/index';
import './App.css';
import { Layout,Row,Col } from 'antd';

const { Header, Footer, Content,Sider } = Layout;    
class App extends Component {  

  render() {
    return (
      <Layout className="App">
        <Header id='MarketViewLayoutHeader'>
          <SearchBar />
        </Header>
        <Content>
          <MarketView />
        </Content>
        <Footer>
          <p>Data provided for free by <a target='_blank' href='https://iextrading.com/developer/'>IEX</a>. View <a target='_blank' href='https://iextrading.com/api-exhibit-a/'>IEX’s Terms of Use</a>.</p>
        </Footer>
      </Layout>
    );
  }
}


export default App;