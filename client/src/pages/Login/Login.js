import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './login.module.css'
import * as ROUTES from '../../constant/routes'
import { Form, Input, Button, Checkbox } from 'antd'
function Login(props) {
  const history = useHistory()
  const onMoveSignup = () => {
    history.push(ROUTES.SIGN_UP) // moves to signup page!
  }
  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={styles.container}>
      <Form
        className={styles.form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1 className={styles.header}>로그인</h1>
        <Form.Item
          className={styles.emailForm}
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input className={styles.emailInput} placeholder="이메일" />
        </Form.Item>
        <Form.Item
          className={styles.psForm}
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input className={styles.psInput} placeholder="비밀번호" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className={styles.loginBtn} type="primary" htmlType="submit">
            로그인
          </Button>
        </Form.Item>

        <div>
          <span className={styles.signupPhrase}>계정이 없으신가요?</span>
          <span className={styles.signup}>회원가입</span>
        </div>
      </Form>
      <div className={styles.half}></div>
    </div>
  )
}

export default Login

// <form className={styles.loginForm}>
// <h1 className={styles.header}>로그인</h1>
// <input className={styles.emailInput} placeholder="Email" type="text" />
// <input
//   className={styles.passwordInput}
//   placeholder="Password"
//   type="text"
// />
// <button className={styles.loginBtn}>로그인</button>
// <div className={styles.signupContainer}>
//   <span className={styles.signupSpan1}>아직 계정이 없으신가요?</span>
//   <span className={styles.signupSpan2} onClick={onMoveSignup}>
//     회원가입
//   </span>
// </div>
// </form>
