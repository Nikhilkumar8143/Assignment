import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import './assets/css/style.css'


const store = createStore(
  reducers,
  window.__PRELOADED_STATE__,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
