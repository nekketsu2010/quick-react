import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyType from './MyType';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const str = 'おはようございます<br />さようなら'
root.render(
  <div>
    {/* <App /> */}
    <MyType value="山田" />
    <MyType value={ '鈴木' } />
    <MyType value={ 108 } />
    <MyType value={ true } />
    <MyType value={ ['うめ', 'もも', 'さくら'] } />
    <MyType value={ {name:"山田太郎", age:40} } />
    <MyType value={ () => console.log('Hoge') }  />
    
  </div>
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
