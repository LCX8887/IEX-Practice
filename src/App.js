import React, { Component } from "react";
import { connect } from "react-redux";
import { MarketView, SymbolDetails, Sectors, SearchBar } from "./views/index";
import "./App.scss";
import { Layout, Row, Col, Breadcrumb } from "antd";
import { Route, Switch, BrowserRouter, HashRouter } from "react-router-dom";
const { Header, Footer, Content, Sider } = Layout;
class App extends Component {
  render() {
    const header = <Route path="/" component={SearchBar} />;
    const content = (
      <Switch>
        <Route exact path="/stocks/:selectedSymbol" component={SymbolDetails} />
        <Route exact path="/sectors/:selectedSector" component={Sectors} />
        <Route exact path="/" component={MarketView} />
      </Switch>
    );
    const footer = (
      <div>
        <p>
          Data provided for free by
          <a target="_blank" href="https://iextrading.com/developer/">
            IEX
          </a>
          . View
          <a target="_blank" href="https://iextrading.com/api-exhibit-a/">
            IEX’s Terms of Use
          </a>
          .
        </p>
      </div>
    );

    return (
      <HashRouter>
        <Layout className="App">
          <Header className="AppHeader">{header}</Header>
          <Content className="AppContent">{content}</Content>
          <Footer className="AppFooter">{footer}</Footer>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
