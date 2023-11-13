import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

// b. スタイルを決定するための関数
function isCurrent({ isActive }) {
  return isActive ? 'current' : undefined;
}

export default function App() {
  return (
    <>
      <ul>
        {/* a. 現在のページを表すリンクに対してスタイルを適用 */}
        <li><NavLink end className={ isCurrent } to="/">トップ</NavLink></li>
        <li><NavLink className={ isCurrent } to="/hello">Hello</NavLink></li>
        <li><NavLink className={ isCurrent } to="/article">公開記事</NavLink></li>  
      </ul>
      <hr />
      <Outlet />
    </>
  );  
}
