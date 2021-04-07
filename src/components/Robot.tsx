/*
 * @Author: mrzou
 * @Date: 2021-04-06 17:09:59
 * @LastEditors: mrzou
 * @LastEditTime: 2021-04-07 11:06:04
 * @Description: file content
 */
import React from 'react'
import styles from './Robot.module.css'

interface RobotProps {
    id: string,
    name: string,
    email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
    // const id = props.id
    return <div className={styles.cardContainer}>
        <img src={`https://robohash.org/${id}`} alt="robot" />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
}

export default Robot