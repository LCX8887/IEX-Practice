import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MarketView,SymbolDetails,SearchBar } from './views/index';
import './App.css';
import { Layout,Row,Col,Breadcrumb } from 'antd';

const { Header, Footer, Content,Sider } = Layout;    
class App extends Component {  

  render() {
    return (
      <Layout className="App">
        <Header className='AppHeader'>
          <SearchBar />
        </Header>
        <Content className='AppContent'>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <MarketView />
          <SymbolDetails />
        </Content>
        <Footer className='AppFooter'>
          <p>Data provided for free by <a target='_blank' href='https://iextrading.com/developer/'>IEX</a>. View <a target='_blank' href='https://iextrading.com/api-exhibit-a/'>IEX’s Terms of Use</a>.</p>
        </Footer>
      </Layout>
    );
  }
}


export default App;