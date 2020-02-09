import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Login extends Component{

    signIn = (event) => {
        event.preventDefault()
        const id = this.input.value
        this.props.dispatch(setAuthedUser(id))
      }

    render(){
        return (
            <div>
                <h1>please sign in to complete:</h1>
                <form onSubmit={this.signIn}>
                  <label>
                    username
                    <input 
                      type='text' 
                      ref={(input) => this.input = input}/>
                  </label>
                  <button>signIn</button>
                </form>
            </div>
        )
    }
}

export default connect()(Login)