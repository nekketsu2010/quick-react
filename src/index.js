import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyArticle from './MyArticle';

const root = ReactDOM.createRoot(document.getElementById('root'));
const articles = [
  {
    url: 'https://www.atmarkit.co.jp/ait/series/9383/',
    title: 'ECMAScriptで学ぶ正規表現',
    description: '正規表現の基本と、ECMAScript（JavaScript）における利用方法を紹介',
    isNew: true
  },
  {
    url: 'https://codezine.jp/article/corner/919',
    title: 'Railsによるクライアントサイド開発入門',
    description: 'Ruby on Rails 7にフォーカスし、クライアントサイド開発のためのさまざまな機能を、API開発やリアルタイムWeb開発も絡めながら紹介',
    isNew: false
  },
  {
    url: 'https://codezine.jp/article/corner/927',
    title: '再利用性とカプセル化のためのWeb Componentsを基礎から学ぶ',
    description: '再利用性とカプセル化の特性を持った、部品化されたUIをブラウザで扱う手法について解説',
    isNew: true
  },
  {
    url: 'https://atmarkit.itmedia.co.jp/ait/series/26423/',
    title: 'TypeScriptのTypeあれこれシリーズ',
    description: 'TypeScriptのType（型）に注目しつつ、その内容を掘り下げて紹介',
    isNew: false
  },
  {
    url: 'https://atmarkit.itmedia.co.jp/ait/series/24844/',
    title: '基本からしっかり学ぶRust入門',
    description: '今からRustを始める人向けに基本からしっかり解説',
    isNew: false
  },
];

const list = articles.map((article) => 
  <MyArticle {...article} key={article.url} />
);
root.render(
  <dl>{list}</dl>
  // <dl>
  //   {articles.map((article, index) => 
  //     <MyArticle {...article} key={index} />
  //   )}
  // </dl>
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
