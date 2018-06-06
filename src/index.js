import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Knight from './components/Knight';
// import Square from './components/Square';
import Board from './components/Board';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Board knightPosition={[7, 4]} />,
  document.getElementById('root')
);
registerServiceWorker();
