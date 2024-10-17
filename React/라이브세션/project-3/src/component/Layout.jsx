import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const navigate = useNavigate()
  return (
    <div>
      <header className="gnb">
        <ul>
          <li>
            <a onClick={() => (navigate('/'))}>홈</a>
          </li>
          <li>
            <Link to="/contents">컨텐츠</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
