import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import makeRootReducer from './store/reducer';
import App from './App';
import { MarketView,SymbolDetails } from './views/index';
import './index.css';
import './styles/styles.css';


const store = createStore(
  makeRootReducer(),
  {},
  applyMiddleware(thunk, logger),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//registerServiceWorker();
