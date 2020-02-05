import React, { Component } from 'react'
import { connect } from 'react-redux'
import { convertTime } from '../utils/helpers'
class PollCard extends Component {

    handleQuestionAnswer = (event) => {
        const btn = event.target
        const btnText = btn.textContent;
        btn.textContent = 'your choice is '+btnText
    }

    render(){

        const { timestamp, optionOne, optionTwo } = this.props.question

        const { name , avatarURL} = this.props.user
        
        return (
            <div className="question">
                <div className="question-header">
                    <div className="question-header-avatar">
                        <img src={avatarURL} alt={`avatar of ${name}`} className="avatar"/>
                        <div>
                            <p>{name}</p>    
                        </div>
                    </div>
                    <div className="question-header-votes">
                        <p>{optionOne.votes.length +optionTwo.votes.length } Votes</p>
                    </div> 
                </div>
                <p className="question-text">
                    {`would you rather ${optionOne.text} or ${optionTwo.text} ?`}
                </p>
                <p className="question-date">{convertTime(timestamp)}</p>
                {/* <h4>would you rather?</h4>
                {

                    answers[id]
                    ?  <div>
                            <button disabled={true} className="answerBtn" onClick={this.handleQuestionAnswer}>
                                {optionOne.text}
                            </button>
                            <button  disabled={true}  className="answerBtn" onClick={this.handleQuestionAnswer}>
                                {optionTwo.text}
                            </button>
                        </div>
                    :   <div>
                            <button className="answerBtn" onClick={this.handleQuestionAnswer}>
                                {optionOne.text}
                            </button>
                            <button className="answerBtn" onClick={this.handleQuestionAnswer}>
                                {optionTwo.text}
                            </button>
                        </div>
                    // optionTwo.votes.map(id => {
                    //     if(id === authedUser){
                    //         return <p>you answered this Q</p>
                    //     }
                    // })
                } */}
               
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
    }
}

export default connect(mapStateToProps)(PollCard)
