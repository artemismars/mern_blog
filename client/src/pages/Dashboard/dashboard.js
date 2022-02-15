import React from 'react'
import Nav from '../../components/Nav/nav'
import { List, Avatar, Space, Button } from 'antd'
import styles from './dashboard.module.css'
import Postbox from '../../components/Dashboard/PostBox/postbox'
import Recommandedblogs from '../../components/Dashboard/RecommendedBlogs/recommandedblogs'
const Dashboard = () => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <article className={styles.blogConainer}>
          <div className={styles.avatarContainer}>
            <img
              className={styles.avatar}
              src="/image/avatar/default.png"
              alt="user_avatar"
            />
            <button className={styles.setBtn}></button>
          </div>
          <h1 className={styles.blogHeader}>블로그 제목</h1>
          <p className={styles.name}>블로그 주인</p>
          <p className={styles.blogPhrase}>블로그 내용</p>
          <Button className={styles.postBtn}>포스트 쓰기</Button>
        </article>
        <section className={styles.postConainer}>
          <p className={styles.postHeader}>포스트</p>
          <div className={styles.postBoxContainer}>
            <Postbox />
            <Postbox />
            <Postbox />
            <Postbox />
            <Postbox />
            <Postbox />
            <Postbox />
            <Postbox />
            <div className={styles.postBox}>
              <p className={styles.catagory}>더보기</p>
            </div>
          </div>
        </section>
        <section className={styles.recommandConainer}>
          <p className={styles.postHeader}>추천 블로그</p>
          <div className={styles.recommandBoxConainer}>
            <Recommandedblogs />
            <Recommandedblogs />
            <Recommandedblogs />
            <Recommandedblogs />
            <div className={styles.recommand}>
              <p className={styles.recommendName}>더보기</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Dashboard
