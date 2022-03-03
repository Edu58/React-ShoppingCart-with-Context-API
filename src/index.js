import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyContext from './Context/Context';

ReactDOM.render(
  <React.StrictMode>
    <MyContext>
      <App />
    </MyContext>
  </React.StrictMode>,
  document.getElementById("root")
);

if(module.hot) {
  module.hot.accept()
}