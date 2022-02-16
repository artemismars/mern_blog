import React from 'react'
import styles from './postbox.module.css'
const Postbox = () => {
  return (
    <div className={styles.postBox}>
      <p className={styles.catagory}>카테고리1</p>
      <h2 className={styles.postHeader}>포스팅</h2>
    </div>
  )
}

export default Postbox
