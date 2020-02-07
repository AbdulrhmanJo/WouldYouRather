import React from 'react'

const UserRecord = (props) => {
    const { rank, userName, userAvatar, answeredQuestions, createdQuestions, score} = props

    return (
        <tr>
            <th>{rank}</th>
            <th>{userName}</th>
            <th>{answeredQuestions}</th>
            <th>{createdQuestions}</th>
            <th>{score}</th>
        </tr>
    )
}

export default UserRecord