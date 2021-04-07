/*
 * @Author: mrzou
 * @Date: 2021-04-01 17:05:52
 * @LastEditors: mrzou
 * @LastEditTime: 2021-04-07 12:00:20
 * @Description: file content
 */
import React from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="" />
        <h1>罗伯特机器人哈哈哈哈哈哈哈机器人机器人图片</h1>
      </div>
      <div className={styles.robotList}>
        {
          robots.map(r => {
            return <Robot id={String(r.id)} name={r.name} email={r.email} />
          })
        }
      </div>
    </div>
  );
}

export default App;
