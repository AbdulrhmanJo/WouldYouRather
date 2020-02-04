import React, { Component } from 'react'
import { connect } from 'react-redux'
import { convertTime } from '../utils/helpers'
class Question extends Component {

   

    handleQuestionAnswer = (event) => {
        const btn = event.target
        const btnText = btn.textContent;
        btn.textContent = 'your choice is '+btnText
        
    }

    render(){

        const { author,timestamp, optionOne, optionTwo } = this.props.question

        const { name , avatarURL } = this.props.user

        const { authedUser } = this.props

        return (
            <div className="question">
                <div className="question-header">
                    <div className="question-header-avatar">
                        <img src={avatarURL} alt={`avatar of ${name}`} className="avatar"/>
                        <div>
                            <p>{name}</p>    
                            <p>{`@${author}`}</p>
                        </div>
                    </div>
                    <p>{convertTime(timestamp)}</p>
                </div>
                <h4>would you rather?</h4>
                {
                    // optionTwo.votes.map(id => {
                    //     if(id === authedUser){
                    //         return <p>you answered this Q</p>
                    //     }
                    // })
                }
                <button className="answerBtn" onClick={this.handleQuestionAnswer}>
                    {optionOne.text}
                </button>
                <button className="answerBtn" onClick={this.handleQuestionAnswer}>
                    {optionTwo.text}
                </button>
            </div>

        )
    }
}

const mapStateToProps = ({ questions, users, authedUser}, { id }) => {
    const question = questions[id]
    const user = users[question.author]

    return {
        question,
        user,
        authedUser
    }
}

export default connect(mapStateToProps)(Question)
