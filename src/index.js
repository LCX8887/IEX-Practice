import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';
import makeRootReducer from './store/reducer';


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
