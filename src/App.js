import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar } from './views/index';
import './App.css';

class App extends Component {  

  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}


export default App;