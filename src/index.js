import ReactDOM from 'react-dom/client'
// React Routerに関わる関数をインポート
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  RouterProvider,
  Route
} from 'react-router-dom';
// ルーティングで利用するコンポーネントをインポート
import App from './App';
import MyTop from './MyTop';
import MyHello from './MyHello';
import MyArticle from './MyArticle';
import MySearch from './MySearch';
import MyQueryArticle from './MyQueryArticle';
import MyBook from './MyBook';
import MyError from './MyError';
import NotFound from './NotFound';
import MyBookPost from './MyBookPost';
// b. ルート情報を宣言
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        {/* a. 規定の子ルート */}
        <Route index element={<MyTop />} />
        <Route path='hello' element={<MyHello />} />
        <Route path='article/:id' element={<MyArticle />} errorElement={<MyError />} />
        <Route path='article' element={<MyQueryArticle />} />
        <Route path='search/*' element={<MySearch />} />
        <Route path='book/:isbn' element={<MyBook />}
          loader={
            ({params}) => {
              return fetch(`./data/${params.isbn}.json`).then(res => res.json());
            }
          }/>
          <Route path='post' element={<MyBookPost />}
            action={
              async ({ request }) => {
                // エラー情報の保存場所を準備
                const errs = new Map();
                // a. フォームデータを取得
                const form = await request.formData();
                const title = form.get('title');
                const price = Number(form.get('price'));
                // b. 入力値を検証（文字列長、数値範囲）
                if (typeof title !== 'string' || title.length > 20) {
                  errs.set('title', '書名は20文字以内で入力してください。');
                }
                if (Number.isNaN(price) || price < 0) {
                  errs.set('price', '価格は整数で入力してください。');
                }
                // c. エラーが1つでも検出されたか
                if (errs.size > 0) {
                  return errs;
                }
                // d. 入力値をログ出力した後、トップページへ移動
                console.log(title, price);
                return redirect('/');
              }
            }/>
        <Route path='*' element={<NotFound />} />
      </Route>
    </>
  )
);
// a. React Routerを有効化
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);  
