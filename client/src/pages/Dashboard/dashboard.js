import React from 'react'
import Nav from '../../components/Nav/nav'
import { List, Avatar, Space } from 'antd'
import styles from './dashboard.module.css'
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <div>
        <p>g1</p>
      </div>
    </div>
  )
}

export default Dashboard
