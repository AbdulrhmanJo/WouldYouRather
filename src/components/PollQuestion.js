import React, { Component } from 'react'
import { handleSaveQuestionAnswer } from '../actions/questions'
import { connect } from 'react-redux'
import Option from './Option'
class PollQuestion extends Component {
    state = {
        option: null
    }

    handleUserchoice = (event) => {
        this.setState({
            option: event.target.value
        })
    }

    handlePollAnswer = (event) => {
        event.preventDefault()
        const answer = this.state.option
        const { id } = this.props.question
        this.props.dispatch(handleSaveQuestionAnswer({
            answer, 
            qid:id
        }))
    }

    render(){
        const { optionOne, optionTwo, id } = this.props.question

        return (
            <div>
                <form onSubmit={this.handlePollAnswer} className="form">
                    <Option 
                        id={id} 
                        option='optionOne'
                        stateOption={this.state.option}
                        optionText={optionOne.text}
                        handleUserchoice={this.handleUserchoice}
                    />
                    <Option 
                        id={id} 
                        option='optionTwo' 
                        stateOption={this.state.option}
                        optionText={optionTwo.text}
                        handleUserchoice={this.handleUserchoice}
                    />
                    <div>
                        <button className="question-btn">vote</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProp = ({ questions}, { id }) => {
    const question = questions[id] 
    return {
        question
    }
}

export default connect(mapStateToProp)(PollQuestion)