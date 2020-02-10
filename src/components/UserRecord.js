import React from 'react'
import {AiOutlineTrophy } from 'react-icons/ai'

const UserRecord = (props) => {
    const { rank, userName, userAvatar, answeredQuestions, createdQuestions, score} = props

    return (
        <tr>
            <td>{rank === 1 ? <AiOutlineTrophy/> : rank}</td>
            <td>
                <div className="leader-avatar">
                    <img src={userAvatar} alt='userAvatar'/>
                    <p>{userName}</p>
                </div>
                
            </td>
            <td>{answeredQuestions}</td>
            <td>{createdQuestions}</td>
            <td>{score}</td>
        </tr>
    )
}

export default UserRecord