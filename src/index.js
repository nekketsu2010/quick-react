import ReactDOM from 'react-dom/client'
// React Routerに関わる関数をインポート
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
// ルーティングで利用するコンポーネントをインポート
import MyTop from './MyTop';
import MyHello from './MyHello';
import MyArticle from './MyArticle';
import NotFound from './NotFound';
// b. ルート情報を宣言
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='' element={<MyTop />} />
      <Route path='hello' element={<MyHello />} />
      <Route path='article' element={<MyArticle />} />
      <Route path='*' element={<NotFound />} />
    </>
  )
);
// a. React Routerを有効化
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);  
