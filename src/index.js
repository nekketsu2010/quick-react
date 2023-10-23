import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyBook from './MyBook';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const book = {
  isbn: 'WGS-JST-002',
  title: '速習webpack 第2版',
  price: 500,
  published: 'WINGSプロジェクト',
};

root.render(
  <div>
    {/* <App /> */}
    <MyBook info={book} />
  </div>
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
