import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  // 最外围包裹路由器
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root')
);