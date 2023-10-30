import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyArticle from './MyArticle';

const root = ReactDOM.createRoot(document.getElementById('root'));
const articles = [
  {
    url: 'https://www.atmarkit.co.jp/alt/series/9383/',
    title: 'ECMAScriptで学ぶ正規表現',
    description: '正規表現の基本とECMAScript...',
    isNew: true,
  }
]

root.render(
  <dl>
    {articles.map((article) => 
      <MyArticle {...article} key={article.url} />
    )}
  </dl>
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
