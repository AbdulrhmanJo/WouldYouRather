import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/questions'

class PollPage extends Component {
    handlePollAnswer = (event) => {
        
        event.preventDefault()
        const answer = this.input.value
        console.log(answer);
        
        const { id } = this.props.question
        
        this.props.dispatch(handleSaveQuestionAnswer({
            answer, 
            qid:id
        }))
    }

    render(){        
        const { name, avatarURL } = this.props.user 
        const { id,optionOne, optionTwo } = this.props.question
        const { answers } = this.props.authedUserInfo

        return (
            <div>
                <img src={avatarURL} alt={`avatar of ${name}`} className="avatar"/>
                <p>Would you rather?</p>
                <p>Asked by <span>{name}</span></p>
                {
                    answers[id] 
                        ? <p>question answerd</p> 
                        : (
                            <div>
                                <p>Choose one option:</p>
                                <form onSubmit={this.handlePollAnswer}>
                                    <label>
                                        <input type='radio' name={id} ref={(input) => this.input = input} value="optionOne"/>
                                        {optionOne.text}
                                    </label>
                                    <label>
                                        <input type='radio' name={id} ref={(input) => this.input = input} value="optionTwo"/>
                                        {optionTwo.text}
                                    </label>
            
                                    <button>vote</button>
                                </form>
                            </div>
                            )
                }
                
            </div>
        )
    }
}

const mapStateToProp = ({ questions, authedUser, users}, { match }) => {
    const question = questions[match.params.id]
    const user = users[question.author]    
    const authedUserInfo = users[authedUser]
    return {
        question,
        user,
        authedUserInfo
    }
}

export default connect(mapStateToProp)(PollPage)