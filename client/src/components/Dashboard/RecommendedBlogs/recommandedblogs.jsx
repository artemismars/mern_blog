import React from 'react'
import styles from './recommandedblogs.module.css'
const Recommandedblogs = () => {
  return (
    <div className={styles.recommand}>
      <img
        className={styles.recommendAvatar}
        src="/image/avatar/default.png"
        alt=""
      />
      <p className={styles.recommendName}>블로그 주인</p>
      <h3 className={styles.recommendTitle}>블로그 제목</h3>
    </div>
  )
}

export default Recommandedblogs
