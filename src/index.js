import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyHelloContent from './MyHelloContent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const data = {
  name: '近松門左衛門',
  age: 18,
  sex: '男',
};

root.render(
  <div>
    {/* <App /> */}
    <MyHelloContent>
      <b>山田</b>
    </MyHelloContent>
    
  </div>
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
