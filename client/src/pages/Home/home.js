import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './home.module.css'
import * as ROUTES from '../../constant/routes' // set constant name of pages
import { Form, Input, Button, Checkbox } from 'antd'
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
      <div className={styles.form}>
        <h1 className={styles.header}>어서오세요</h1>

        <button className={styles.loginBtn} onClick={onMoveLogin}>
          로그인
        </button>
        <div className={styles.commentContainer}>
          <span className={styles.dash1}></span>
          <span className={styles.comment}>처음이신가요?</span>
          <span className={styles.dash2}></span>
        </div>
        <button className={styles.signupBtn} onClick={onMoveSignup}>
          회원가입
        </button>
      </div>
    </div>
  )
}

export default Home
