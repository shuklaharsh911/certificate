import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
// import 'normalize.css/normalize.css';

const root = document.getElementById('root');
ReactDOM.render(<AppRouter />, root);