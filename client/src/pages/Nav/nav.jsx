import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Styles from './nav.module.css';

function Nav(props) {
  const [isAuth, setIsAuth] = useState(false); //임시용

  function renderIsAuth(isLogin) {
    switch (isLogin) {
      case true:
        return (
          <li>
            <Link to="/logout">로그아웃</Link>
          </li>
        );
      default:
        return (
          <li>
            <Link to="/login">로그인</Link>
          </li>
        );
    }
  }
  return (
    <nav className={Styles.navContainer}>
      <div className={Styles.menu}>
        <div className={Styles.logo}>
          <h1>
            <Link to="/">Blog</Link>
          </h1>
        </div>
        <div className={Styles.userMenu}>
          <ul>
            <li>
              <Link to="/create">글 작성</Link>
            </li>
            {renderIsAuth(isAuth)}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
