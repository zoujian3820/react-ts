/*
 * @Author: mrzou
 * @Date: 2021-04-06 17:09:59
 * @LastEditors: mrzou
 * @LastEditTime: 2021-04-06 17:23:36
 * @Description: file content
 */
import React from 'react'

interface RobotProps {
    id: string,
    name: string,
    email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
    // const id = props.id
    return <li>
        <img src={`https://robohash.org/${id}`} alt="robot" />
        <h2>{name}</h2>
        <p>{email}</p>
    </li>
}

export default Robot