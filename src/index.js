import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyHello from './MyHello';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const str = 'おはようございます<br />さようなら'
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MyHello name="山田" />
  </React.StrictMode>
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
