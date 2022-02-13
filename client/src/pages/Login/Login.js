import React from 'react'
import styles from './login.module.css'
function Login(props) {
  return (
    <div className={styles.container}>
      <form className={styles.loginForm}>
        <h1 className={styles.header}>로그인</h1>
        <input className={styles.emailInput} placeholder="Email" type="text" />
        <input
          className={styles.passwordInput}
          placeholder="Password"
          type="text"
        />
        <button className={styles.loginBtn}>로그인</button>
        <div className={styles.signupContainer}>
          <span className={styles.signupSpan1}>아직 계정이 없으신가요?</span>
          <span className={styles.signupSpan2}>회원가입</span>
        </div>
      </form>
    </div>
  )
}

export default Login
