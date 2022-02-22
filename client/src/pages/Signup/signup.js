import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../../constant/routes'
import { Form, Input, Button, Checkbox } from 'antd'
import styles from './signup.module.css'
import axios from 'axios'
function Signup(props) {
  const [userForm, setUserForm] = useState({
    username: '',
    email: '',
    password: '',
  })

  const onSubmitSignup = (e) => {
    // 로직 작성..
  }
  const onFinish = async (values) => {
    console.log('Success:', values)

    await axios.post('nodeURL' + '/api/', values).thne((res) => {
      if (res.status === 200) {
        console.log(res.data, 'Successful to post')
      } else if (res.status !== 200) {
        console.error('Fail to post')
      }
    })
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
        <h1 className={styles.header}>회원가입</h1>
        <Form.Item
          className={styles.item}
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
          className={styles.item}
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
          className={styles.item}
          name="password2"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input className={styles.ps2Input} placeholder="비밀번호 확인" />
        </Form.Item>
        <Form.Item
          className={styles.item}
          name="nickname"
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
            },
          ]}
        >
          <Input className={styles.nicknameInput} placeholder="닉네임" />
        </Form.Item>
        <Form.Item
          className={styles.item}
          name="blogname"
          rules={[
            {
              required: true,
              message: 'Please input your blog name!',
            },
          ]}
        >
          <Input className={styles.blognameInput} placeholder="블로그 이름" />
        </Form.Item>
        <Form.Item
          className={styles.item}
          name="blogdescription"
          rules={[
            {
              required: true,
              message: 'Please input your blog description!',
            },
          ]}
        >
          <Input
            className={styles.blogDescriptionInput}
            placeholder="블로그 설명"
          />
        </Form.Item>
        <Button className={styles.signupBtn} type="primary" htmlType="submit">
          회원가입
        </Button>
        <div>
          <span className={styles.signinPhrase}>계정이 있으신가요?</span>
          <span className={styles.signinLogin}>로그인</span>
        </div>
      </Form>
      <div className={styles.half}></div>
    </div>
  )
}

export default Signup
