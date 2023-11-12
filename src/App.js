import { NavLink, Outlet } from 'react-router-dom';

// b. スタイルを決定するための関数
function isCurrent(link) {
  return link.isActive ? { backgroundColor: 'Yellow' } : undefined;
}

export default function App() {
  return (
    <>
      <ul>
        {/* a. 現在のページを表すリンクに対してスタイルを適用 */}
        <li><NavLink style={isCurrent} end to="/">トップ</NavLink></li>
        <li><NavLink style={isCurrent} to="/hello">Hello</NavLink></li>
        <li><NavLink style={isCurrent} to="/article">公開記事</NavLink></li>  
      </ul>
      <hr />
      <Outlet />
    </>
  );  
}
