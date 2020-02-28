import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserRecord from "./UserRecord";
class Leaderboard extends Component {
    
    userRank = (users) => {
        let userScore = []
        const usersId = Object.keys(users);
        usersId.forEach(id => {
            userScore = [
                ...userScore,
                {
                    id,
                    score: Object.keys(users[id].answers).length + Object.keys(users[id].questions).length
                }
            ]
        });

        userScore.sort((aUser, bUser) => bUser.score - aUser.score)
        return userScore
    }

    render(){
        const usersScore = this.userRank(this.props.users)
        const { users } = this.props
        return (
            <div className="leaderBoard">
                <h1 className="top-section-action--heading">Leader board</h1>
                <p className="info">Below are the most active users of our game</p>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>User</th>
                            <th>Answered Questions</th>
                            <th>Created Questions</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usersScore.map( (user,index) => (
                                <UserRecord 
                                    key={user.id}
                                    rank={index+1}
                                    userName={users[user.id].name}
                                    userAvatar= {users[user.id].avatarURL}
                                    answeredQuestions={Object.keys(users[user.id].answers).length}
                                    createdQuestions={Object.keys(users[user.id].questions).length}
                                    score={user.score}
                                />
                            )) 
                        }
                    </tbody>
                </table>
            </div>
            
        )
    }
}

const mapStateToprops = ({ users }) => {
    return {
        users
    }
}

export default connect(mapStateToprops)(Leaderboard)