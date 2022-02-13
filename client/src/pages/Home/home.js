import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './home.module.css'
import * as ROUTES from '../../constant/routes' // set constant name of pages

const Home = () => {
  const history = useHistory()
  const onMoveLogin = () => {
    history.push(ROUTES.LOGIN) // moves to login page
  }

  const onMoveSignup = () => {
    history.push(ROUTES.SIGN_UP) // moves to signup page
  }
  return (
    <div className={styles.container}>
      <button
        className={`${styles.loginBtn} ${styles.btn}`}
        onClick={onMoveLogin}
      >
        로그인
      </button>
      <button
        className={`${styles.loginBtn} ${styles.btn}`}
        onClick={onMoveSignup}
      >
        회원가입
      </button>
    </div>
  )
}

export default Home
