import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Main1 from './axios/Main1';
//import Home from './tesla/Home';
//import Todolist from './Todolist'
// import Counter from './Counter'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Main1 />
  </React.StrictMode>
);

reportWebVitals();
