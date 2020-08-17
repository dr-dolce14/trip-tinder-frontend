import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import App from './App';import "./resources/css/style.css";
import "./resources/css/queries.css";
import "./resources/css/style.css";
import "./vendors/css/grid.css";




ReactDOM.render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

