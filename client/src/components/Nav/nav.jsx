import { Button } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './nav.module.css'

function Nav(props) {
  return (
    <nav className={styles.container}>
      <h1 className={styles.logo}>블로그 제목</h1>
      <Button className={styles.loginBtn}>로그인</Button>
    </nav>
  )
}

export default Nav
