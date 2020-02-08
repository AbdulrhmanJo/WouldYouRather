import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
class NewPoll extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleStateChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    addNewPoll = (event) => {
        event.preventDefault();
        const { dispatch } = this.props
        dispatch(handleAddQuestion({
            optionOneText: this.state.optionOne,
            optionTwoText: this.state.optionTwo,
        }))

        this.setState({
            optionOne: '',
            optionTwo: '',
            toHome: true

        })
    }
    render(){
        const { optionOne, optionTwo, toHome } = this.state

        if(toHome){
            return <Redirect to='/' />
        }

        return(
            <div>
                <h1>create new Question</h1>
                <form onSubmit={this.addNewPoll}>
                    <p>complete the question:</p>
                    <p>would you rather...</p>
                    <input 
                        name='optionOne'
                        type='text' 
                        placeholder="Enter option one text here"
                        value = {optionOne}
                        onChange= {this.handleStateChange}
                    />
                    <input 
                        name='optionTwo'
                        type='text' 
                        placeholder="Enter option Two text here"
                        value = {optionTwo}
                        onChange= {this.handleStateChange}
                    />
                    <button disabled={!optionOne ||  !optionTwo}>add</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewPoll)