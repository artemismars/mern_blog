import React, { useState } from 'react'
import styles from './nav2.module.css'

const Nav2 = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <img
          className={styles.blogImage}
          src="/image/avatar/default.png"
          alt="blog-image"
        />
        <div className={styles.blogInfo}>
          <h1 className={styles.blogHeader}>블로그 제목</h1>
          <p className={styles.blogUsername}>블로그 주인</p>
        </div>
        <p className={styles.blogDescription}>
          원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며,
          1차에 한하여 중임할 수 있다.
        </p>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.settingBtn}></button>
      </div>
    </nav>
  )
}

export default Nav2
