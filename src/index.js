import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { env } from './config';

ReactDOM.render(
    <BrowserRouter>
        <App env={env} className='app'/>
    </BrowserRouter>
, document.getElementById('root'));

