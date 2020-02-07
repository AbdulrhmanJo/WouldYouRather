import React, { Component } from 'react'
import { handleSaveQuestionAnswer } from '../actions/questions'
import { connect } from 'react-redux'
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
                <p>Choose one option:</p>
                <form onSubmit={this.handlePollAnswer}>
                    <label>
                        <input 
                            type='radio' 
                            name={id}  
                            value="optionOne"
                            checked={this.state.option === 'optionOne'}
                            onChange={this.handleUserchoice}/>
                            {optionOne.text}
                    </label>
                    <label>
                        <input 
                            type='radio' 
                            name={id}  
                            value="optionTwo"
                            checked={this.state.option === 'optionTwo'}
                            onChange={this.handleUserchoice}/>
                            {optionTwo.text}
                    </label>
                    <button>vote</button>
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