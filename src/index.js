import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css'
import App from './App';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import appReducers from './reducers/index'

const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


