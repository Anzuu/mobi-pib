/**
 * @author zzhao
 */
'use strict';

import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';




main();

function main() {
  const app = document.createElement('div');
  const meta = document.createElement('meta');

  app.setAttribute("id", "outer-div");
  document.body.appendChild(app);
  ReactDOM.render(<App/>, app);
}