import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../constant/routes';

import Styles from './signup.module.css';

function Signup(props) {
  const [userForm, setUserForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const onSubmitSignup = e => {
    // 로직 작성..
  }

  return (
    <div className={Styles.container}>
      <form className={Styles.signupForm}>
        <h1 className={Styles.header}>회원가입</h1>
        <input
          type="text"
          name="usrname"
          className={Styles.emailInput}
          placeholder="Username"
        />
        <input
          type="text"
          name="email"
          className={Styles.emailInput}
          placeholder="Email"
        />
        <input
          className={Styles.passwordInput}
          placeholder="Password"
          type="text"
          name="password"
        />
        <button className={Styles.signupBtn} onClick={onSubmitSignup}>가입하기</button>
      </form>
    </div>
  );
}

export default Signup;
