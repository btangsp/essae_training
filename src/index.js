import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './css/index.css';
import UserStudy from './user-study';


/*******************************************************************************
Entry point
*******************************************************************************/


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserStudy />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
