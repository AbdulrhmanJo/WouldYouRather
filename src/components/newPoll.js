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
            <div >
                <h1 className="top-section--heading">Create Question</h1>
                <form onSubmit={this.addNewPoll}>
                    <p className="form-text">Complete the below fields to create your question</p>
                    <p className="form-question">Would you rather...</p>
                    <div className="form-options">
                        <input 
                            name='optionOne'
                            type='text' 
                            placeholder="Enter option one"
                            value = {optionOne}
                            onChange= {this.handleStateChange}
                        />
                        <input 
                            name='optionTwo'
                            type='text' 
                            placeholder="Enter option Two"
                            value = {optionTwo}
                            onChange= {this.handleStateChange}
                        />
                    </div>
                    
                    <button className='form-btn' disabled={!optionOne ||  !optionTwo}>add</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewPoll)