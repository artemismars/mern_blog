import React from 'react'
import styles from './home.module.css'
const Home = () => {
  return (
    <div className={styles.container}>
      <button className={`${styles.loginBtn} ${styles.btn}`}>로그인</button>
      <button className={`${styles.loginBtn} ${styles.btn}`}>회원가입</button>
    </div>
  )
}

export default Home
