import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MarketView } from './views/index';
import './App.css';

class App extends Component {  

  render() {
    return (
      <div className="App">
        <MarketView />
      </div>
    );
  }
}


export default App;