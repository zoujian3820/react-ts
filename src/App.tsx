/*
 * @Author: mrzou
 * @Date: 2021-04-01 17:05:52
 * @LastEditors: mrzou
 * @LastEditTime: 2021-04-06 18:16:48
 * @Description: file content
 */
import React from 'react';
import logo from './logo.svg';
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <div className={style.robotList}>
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
