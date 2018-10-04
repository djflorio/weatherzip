import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

let middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware = [ ...middleware, createLogger() ]
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
