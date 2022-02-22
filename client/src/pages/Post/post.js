import { Button } from 'antd'
import React from 'react'
import Nav from '../../components/Nav/nav'
import Nav2 from '../../components/Nav2/nav2'
import styles from './post.module.css'

const Post = () => {
  return (
    <div className={styles.container}>
      <Nav2 />
      <div className={styles.postContainer}>
        <input
          className={styles.inputHeader}
          type="text"
          placeholder="포스트 제목을 입력해 주세요."
        />
        <div className={styles.btnContainer}>
          <Button className={styles.addPhotoBtn}>사진추가</Button>
          <Button className={styles.postBtn}>등록</Button>
        </div>
        <textarea
          className={styles.inputContent}
          placeholder="내용을 입력해 주세요."
        />
      </div>
    </div>
  )
}

export default Post
