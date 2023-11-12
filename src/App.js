import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      {/* b. ルーティング経由のリンクリストを準備 */}
      <ul>
        <li><Link to="/">トップ</Link></li>
        <li><Link to="/hello">Hello</Link></li>
        <li><Link to="/article">公開記事</Link></li>  
      </ul>
      <hr />
      {/* a. 配下のコンポーネントを表示するための領域 */}
      <Outlet />
    </>
  );  
}
