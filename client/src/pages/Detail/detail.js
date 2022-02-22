import { Avatar, Button, Input, List } from 'antd'
import React from 'react'
import Nav from '../../components/Nav/nav'
import styles from './detail.module.css'
const Detail = () => {
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ]
  return (
    <div className={styles.detail}>
      <Nav />
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.header}>포스트 제목</h1>
          <div>
            <span className={styles.edit}>수정 </span>
            <span className={styles.postHeader}>제목</span>
          </div>
          <img
            className={styles.img}
            src="/image/avatar/default.png"
            alt="postImage"
          />
          <p className={styles.description}>
            원장은 국회의 동의를 얻어 대통령이 임명하고...
          </p>
          <div className={styles.commentContainer}>
            <h3 className={styles.commentHeader}>댓글</h3>

            <ul className={styles.commentsForm}>
              <li className={styles.comments}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarImage}
                    src="/image/avatar/default.png"
                    alt="othersavatar"
                  />
                  <p className={styles.content}>내용</p>
                </div>
                <div className={styles.info}>
                  <span className={styles.username}>이름</span>
                  <span className={styles.date}>날짜</span>
                </div>
              </li>
            </ul>

            <div className={styles.input}>
              <Input className={styles.inputComment} type="text" />
              <Button className={styles.inputBtn}>작성</Button>
            </div>
          </div>
          <div className={styles.postContainer}>
            <h3 className={styles.headerPost}>포스트</h3>
            <div className={styles.posts}>
              <p className={styles.catagories}>카테고리</p>
              <h2 className={styles.postsName}>포스팅</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
