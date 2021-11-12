import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

const renderElement = (
  <App />
)

const renderTarget = document.getElementById('root')

ReactDOM.render(renderElement, renderTarget);