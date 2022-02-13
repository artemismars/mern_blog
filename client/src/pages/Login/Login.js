import React from 'react'
import styles from './login.module.css'
function Login(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>로그인</h1>
      <form className={styles.loginForm}>
        <div className={styles.emailContainer}>
          <label className={styles.emailLabel} htmlFor="">
            이메일
          </label>
          <input className={styles.emailInput} type="text" />
        </div>
        <div className={styles.passwordContainer}>
          <label className={styles.passwordLabel} htmlFor="">
            비밀번호
          </label>
          <input className={styles.passwordInput} type="text" />
        </div>
        <button className={styles.loginBtn}>로그인</button>
      </form>
      <div className={styles.signupContainer}>
        <span className={styles.signupSpan1}>아직 계정이 없으신가요?</span>
        <span className={styles.signupSpan2}>회원가입</span>
      </div>
    </div>
  )
}

export default Login
